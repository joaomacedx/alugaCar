import { CategoryDTO } from "../DataTransferObjects/CategoryDTO";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

class CreateCategoryService {
   constructor(
     private categoriesRepository: ICategoriesRepository) {
   }
   public build(dto: CategoryDTO): void{ 
     const categoryAlreadyExists = this.categoriesRepository.findByName(dto);
     if (categoryAlreadyExists){
       throw new Error("Category already exists");
     }
     this.categoriesRepository.create(dto);

  }

}

export { CreateCategoryService }