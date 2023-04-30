import { Repository, getRepository } from "typeorm";
import { Category } from "../../entities/Category"; 
import { ICategoriesRepository } from "../ICategoriesRepository";
class CategoriesRepository implements ICategoriesRepository {
   private repository: Repository<Category>;
   private constructor() {
    this.repository = getRepository(Category);
   }

   public async save(category: Category): Promise<void> {
     await this.repository.save(category);
   }

   public async list(): Promise<Category[]> {
     const categories: Category [] = await this.repository.find();
     return categories;
   }
   
   public  async findByName(name: string): Promise<Category> {
     const categoryFound = await this.repository.findOne({where: { name }});
     return categoryFound;
   }
   
}

export { CategoriesRepository }
