import { container } from "tsyringe";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "@modules/cars/repositories/implementations/typeORMCategoriesRepository";
import { ICategoryFactory } from "@modules/cars/factories/ICategoryFactory";
import { CategoryFactory } from "@modules/cars/factories/implementations/CategoryFactory";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "@modules/cars/repositories/implementations/typeORMSpecificationsRepository";
import { ISpecificationFactory } from "@modules/cars/factories/ISpecificationFactory";
import { SpecificationFactory } from "@modules/cars/factories/implementations/SpecificationFatory";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "@modules/accounts/repositories/implementations/TypeORMUsersRepository";
import { IUserFactory } from "@modules/accounts/factories/IUserFactory";
import { UserFactory } from "@modules/accounts/factories/implementations/UserFactory";

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
);

  container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository,
);

  container.registerSingleton<IUserFactory>(
    "UserFactory",
    UserFactory,
)

