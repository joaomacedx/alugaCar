import { container } from "tsyringe";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { ICategoryFactory } from "@modules/cars/factories/ICategoryFactory";
import { CategoryFactory } from "@modules/cars/factories/implementations/CategoryFactory";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { ISpecificationFactory } from "@modules/cars/factories/ISpecificationFactory";
import { SpecificationFactory } from "@modules/cars/factories/implementations/SpecificationFatory";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUserFactory } from "@modules/accounts/factories/IUserFactory";
import { UserFactory } from "@modules/accounts/factories/implementations/UserFactory";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/typeORMSpecificationsRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/typeORMCategoriesRepository";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/TypeORMUsersRepository";

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

