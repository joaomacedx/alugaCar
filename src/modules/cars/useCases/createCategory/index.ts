import { CategoryFactory } from "../../Factories/CategoryFactory";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryService } from "../../services/CreateCategoryService";
import { CreateCategoryController } from "./CreateCategoryController";

const categoriesRepository = new CategoriesRepository();

const categoriesFactory= new CategoryFactory();

const createCategoryService = new CreateCategoryService(categoriesRepository,categoriesFactory );

const createCategoryController = new CreateCategoryController(createCategoryService);

export { createCategoryController }