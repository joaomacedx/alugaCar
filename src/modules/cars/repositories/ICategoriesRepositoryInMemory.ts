import { CategoryDTO } from "../dto/CategoryDTO";
import { ICategoryDTO } from "../dto/ICategoryDTO";
import { Category } from "../entities/Category";

interface ICategoriesRepositoryInMemory{
  findByName(dto: ICategoryDTO) : CategoryDTO;
  list(): CategoryDTO[];
  save(category: Category): void;
}

export { ICategoriesRepositoryInMemory as ICategoriesRepository }
