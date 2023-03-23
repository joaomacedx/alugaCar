import { CategoryDTO } from "../DataTransferObjects/CategoryDTO";
import { Category } from "../model/Category";

 interface ICategoryFactory{
   build(dto: CategoryDTO) : Category;
 }

 export { ICategoryFactory }
