import { CategoryFactory } from "../../factories/CategoryFactory";
import { CategoriesRepository } from "../../repositories/implementations/InMemoryCategoriesRepository";
import { CreateCategoryService } from "../../services/CreateCategoryService";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const categoriesFactory = new CategoryFactory();
const createCategoryService = new CreateCategoryService(categoriesRepository, categoriesFactory)
const importCategoryUseCase =  new ImportCategoryUseCase(createCategoryService);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController }