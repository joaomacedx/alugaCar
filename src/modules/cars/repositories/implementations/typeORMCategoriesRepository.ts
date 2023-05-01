import { Repository } from "typeorm";
import dataSource from "../../../../dataBase/index";
import { Category } from "../../entities/Category"; 
import { ICategoriesRepository } from "../ICategoriesRepository";
class CategoriesRepository implements ICategoriesRepository {
   private categoryRepository: Repository<Category>;
    constructor() {
    this.categoryRepository = dataSource.getRepository(Category);
   }

   public async save(category: Category): Promise<void> {
     await this.categoryRepository.save(category);
   }

   public async list(): Promise<Category[]> {
     const categories: Category [] = await this.categoryRepository.find();
     return categories;
   }
   
   public  async findByName(name: string): Promise<Category> {
     const categoryFound = await this.categoryRepository.findOne({where: { name }});
     return categoryFound;
   }
   
}

export { CategoriesRepository }
