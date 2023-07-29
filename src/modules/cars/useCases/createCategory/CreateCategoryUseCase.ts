import { inject, injectable } from "tsyringe";
import { ICategoryDTO } from "../../dto/ICategoryDTO";
import { ICategoryFactory } from "../../factories/ICategoryFactory";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
    @inject("CategoryFactory")
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
