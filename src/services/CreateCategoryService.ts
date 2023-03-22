import { CategoryDTO } from "../DataTransferObjects/CategoryDTO";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

class CreateCategoryService {
   private categoriesRepository: CategoriesRepository;
   constructor(_categoriesRepository: CategoriesRepository) {
     this.categoriesRepository =_categoriesRepository;
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