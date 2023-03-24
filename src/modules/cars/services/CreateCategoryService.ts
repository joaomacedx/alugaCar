import { ICategoryDTO } from "../DataTransferObjects/ICategoryDTO";
import { ICategoryFactory } from "../Factories/ICategoryFactory";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

class CreateCategoryService {
   constructor(
     private categoriesRepository: ICategoriesRepository,
     private categoriesFactory: ICategoryFactory) {
   }
   public create(dto: ICategoryDTO): void{ 
     const categoryAlreadyExists = this.categoriesRepository.findByName(dto);
     if (categoryAlreadyExists){
       throw new Error("Category already exists");
     }
     const category = this.categoriesFactory.build(dto);
     this.categoriesRepository.save(category);
  }
}

export { CreateCategoryService }