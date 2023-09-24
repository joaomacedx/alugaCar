import { CategoryDTO } from "../dto/implementations/CategoryDTO";
import { ICategoryDTO } from "../dto/ICategoryDTO";
import { Category } from "../infra/typeorm/entities/Category";

interface ICategoriesRepositoryInMemory{
  findByName(dto: ICategoryDTO) : CategoryDTO;
  list(): CategoryDTO[];
  save(category: Category): void;
}

export { ICategoriesRepositoryInMemory as ICategoriesRepository }
