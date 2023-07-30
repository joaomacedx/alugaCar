import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/TypeORMCategoriesRepository";
import { ICategoryFactory } from "../../modules/cars/factories/ICategoryFactory";
import { CategoryFactory } from "../../modules/cars/factories/CategoryFactory";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/TypeORMSpecificationsRepository";
import { ISpecificationFactory } from "../../modules/cars/factories/ISpecificationFactory";
import { SpecificationFactory } from "../../modules/cars/factories/SpecificationFatory";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository,
);
container.registerSingleton<ICategoryFactory>(
    "CategoryFactory",
    CategoryFactory,
);
container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository,
);
container.registerSingleton<ISpecificationFactory>(
    "SpecificationFactory",
    SpecificationFactory,
)
