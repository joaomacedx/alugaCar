import { CategoryDTO } from "../DataTransferObjects/CategoryDTO";
import { Category } from "../model/Category";

 interface ICategoriesRepository{
   findByName(dto: CategoryDTO) : Category;
   list(): Category[];
   save(dto:CategoryDTO): void;

 }

 export { ICategoriesRepository }