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
   public list(): CategoryDTO[] {
     const list : CategoryDTO[] = [];
     for (let index = 0; index < this.categories.length; index++) {
       let element = this.categories[index];
       let dto = new CategoryDTO(element.name, element.description);
       list.push(dto);
     }
     return list;
   }
   public findByName(data: CategoryDTO): CategoryDTO {
     for(let index = 0; index < this.categories.length; index++) {
       if(this.categories[index].name === data.name) {
         return data;
       }
     }
   }
   
}

export { CategoriesRepository }