import { CategoryDTO } from "../DataTransferObjects/CategoryDTO";
import { ICategoryDTO } from "../DataTransferObjects/ICategoryDTO";
import { Category } from "../entities/Category";

interface ICategoriesRepositoryInMemory{
  findByName(dto: ICategoryDTO) : CategoryDTO;
  list(): CategoryDTO[];
  save(category: Category): void;
}

export { ICategoriesRepositoryInMemory as ICategoriesRepository }
