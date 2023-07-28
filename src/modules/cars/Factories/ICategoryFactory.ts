import { ICategoryDTO } from "../DataTransferObjects/ICategoryDTO";
import { Category } from "../entities/Category";

interface ICategoryFactory{
  build(dto: ICategoryDTO) : Category;
}

export { ICategoryFactory }
