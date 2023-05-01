import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/typeORMCategoriesRepository";
import { ICategoryFactory } from "../../modules/cars/factories/ICategoryFactory";
import { CategoryFactory } from "../../modules/cars/factories/CategoryFactory";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository,
);
container.registerSingleton<ICategoryFactory>(
    "CategoryFactory",
    CategoryFactory,
);