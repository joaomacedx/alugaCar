import { CategoryDTO } from "../DataTransferObjects/CategoryDTO";
import { Category } from "../model/Category"; 
import { ICategoriesRepository } from "./ICategoriesRepository";
class CategoriesRepository implements ICategoriesRepository {
   private categories : Category[];
    
   constructor() {
     this.categories = [];
   }

   public save(category: Category): void {
     this.categories.push(category);
   }
   public list(): Category[] {
     return this.categories;
   }
   public findByName(dto: CategoryDTO): Category {
     const category = this.categories.find((category) =>
       category.name === dto.name
     );
     return category;
   }
   
}

export { CategoriesRepository }