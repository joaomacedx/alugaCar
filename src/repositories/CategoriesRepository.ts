import { CategoryDTO } from "../DataTransferObjects/CategoryDTO";
import { Category } from "../model/Category"; 
class CategoriesRepository {
   private categories : Category[];
    
   constructor() {
     this.categories = [];
   }

   public create(dto : CategoryDTO): void {
     const category = new Category(
       dto.name,
       dto.description,
       new Date()
     ); 
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