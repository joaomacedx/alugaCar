import { CategoryFactory } from "../../factories/CategoryFactory";
import { CategoriesRepository } from "../../repositories/implementations/typeORMCategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

const categoriesRepository = new CategoriesRepository();

const categoriesFactory= new CategoryFactory();

const createCategoryUseCase =  new CreateCategoryUseCase(categoriesRepository,categoriesFactory );

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController }