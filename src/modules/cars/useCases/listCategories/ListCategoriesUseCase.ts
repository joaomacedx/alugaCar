
import { Request, Response } from "express";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";

@injectable()
class ListCategoriesUseCase{
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ){}
  public  async execute(): Promise<Category[]> {
    const all = await this.categoriesRepository.list();
    return all;
  }
}
export { ListCategoriesUseCase }


