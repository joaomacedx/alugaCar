import { ICategoryDTO } from "../dto/ICategoryDTO";
import { ICategoryFactory } from "../factories/ICategoryFactory";
import { ICategoriesRepository } from "../repositories/ICategoriesRepositoryInMemory";

class CreateCategoryService {
  constructor(
    private categoriesRepository: ICategoriesRepository,
    private categoriesFactory: ICategoryFactory) {
  }
  public execute(dto: ICategoryDTO): void{ 
    const categoryAlreadyExists = this.categoriesRepository.findByName(dto);
    if (categoryAlreadyExists){
      throw new Error("Category already exists");
    }
    const category = this.categoriesFactory.build(dto);
    this.categoriesRepository.save(category);
  }
}

export { CreateCategoryService }
