import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { ICategoryDTO } from "../../DataTransferObjects/ICategoryDTO";
import { CategoryDTO } from "../../DataTransferObjects/CategoryDTO";
import { ICategoryFactory } from "../../Factories/ICategoryFactory";
import { CreateCategoryService } from "../../services/CreateCategoryService";
class ImportCategoryUseCase{
   constructor(
     private createCategoryService: CreateCategoryService
   ){}

   public async execute(file: Express.Multer.File): Promise<void> {
     const categories = await this.loadCategories(file);
     for (let index = 0; index < categories.length; index++) {
       let element = categories[index];
       this.createCategoryService.execute(element);
       }
   }
   
   private async loadCategories(file: Express.Multer.File): Promise<CategoryDTO[]>{
     return new Promise((resolve, reject )=>{
       const stream = fs.createReadStream(file.path);
       const categories: ICategoryDTO[] = [];
       const parseFile = csvParse();
       stream.pipe(parseFile);

       parseFile.on("data", async (line)=> {

        const[name, description] = line;
        categories.push(new CategoryDTO(name, description));
       }).on("end", ()=> {
        resolve(categories);
       });
     });
   }
}
 
export { ImportCategoryUseCase }