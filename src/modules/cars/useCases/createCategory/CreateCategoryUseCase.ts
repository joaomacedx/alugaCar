import { ICategoryDTO } from "../../DataTransferObjects/ICategoryDTO";
import { ICategoryFactory } from "../../factories/ICategoryFactory";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class CreateCategoryUseCase {
   constructor(
     private categoriesRepository: ICategoriesRepository,
     private categoriesFactory: ICategoryFactory) {
   }
   public async execute(dto: ICategoryDTO): Promise<void>{ 
     const categoryAlreadyExists = await this.categoriesRepository.findByName(dto.name);
     if (categoryAlreadyExists) throw new Error("Category already exists");
     const category = this.categoriesFactory.build(dto);
     this.categoriesRepository.save(category);
  }
}

export {  CreateCategoryUseCase }