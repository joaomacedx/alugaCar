import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { ICategoryDTO } from "../../DataTransferObjects/ICategoryDTO";
import { CategoryDTO } from "../../DataTransferObjects/CategoryDTO";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";
import { ICategoryFactory } from "../../factories/ICategoryFactory";

@injectable()
class ImportCategoryUseCase{
   constructor(
    @inject("CategoriesRepository")
     private categoriesRepository: ICategoriesRepository,
    @inject("CategoryFactory")
     private categoryFactory: ICategoryFactory,

   ){}

   public async execute(file: Express.Multer.File): Promise<void> {
     const categories = await this.loadCategories(file);
     for (let index = 0; index < categories.length; index++) {
         let element = categories[index];
          let categoryAlreadyExists = await this.categoriesRepository.findByName(element.name);
          if(categoryAlreadyExists) throw new Error("Category already exists, unable to proceed with the transaction");
          let newCategoryToImport = this.categoryFactory.build(element);
         await this.categoriesRepository.save(newCategoryToImport);
       }
   }
   
   private async loadCategories(file: Express.Multer.File): Promise<CategoryDTO[]>{
     return new Promise((resolve, reject)=>{
       const stream = fs.createReadStream(file.path);
       const categories: ICategoryDTO[] = [];
       const parseFile = csvParse();
       stream.pipe(parseFile);

       parseFile.on("data", async (line)=> {
         const[name, description] = line;
         categories.push(new CategoryDTO(name, description));
       }).on("end", ()=> {
         fs.promises.unlink(file.path);
         resolve(categories);
       }).on("error",(err)=>{
         reject(err);
       });
     });
   }
}
 
export { ImportCategoryUseCase }