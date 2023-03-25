import { CategoryFactory } from "../../Factories/CategoryFactory";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

const categoriesRepository = CategoriesRepository.getInstance();

const categoriesFactory= new CategoryFactory();

const createCategoryUseCase =  new CreateCategoryUseCase(categoriesRepository,categoriesFactory );

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController }