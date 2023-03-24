import { ICategoryDTO } from "../DataTransferObjects/ICategoryDTO";
import { Category } from "../model/Category";

 interface ICategoryFactory{
   build(dto: ICategoryDTO) : Category;
 }

 export { ICategoryFactory }
