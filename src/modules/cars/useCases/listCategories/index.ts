import { CategoriesRepository } from "../../repositories/implementations/InMemoryCategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesController = new ListCategoriesController(categoriesRepository);

export { listCategoriesController }