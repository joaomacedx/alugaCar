import { CategoryDTO } from "../DataTransferObjects/CategoryDTO";
import { Category } from "../model/Category";

 interface ICategoriesRepository{
   findByName(dto: CategoryDTO) : CategoryDTO;
   list(): CategoryDTO[];
   save(category: Category): void;
 }

 export { ICategoriesRepository }