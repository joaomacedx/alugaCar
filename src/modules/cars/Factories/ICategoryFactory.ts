import { ICategoryDTO } from "../dto/ICategoryDTO";
import { Category } from "../infra/typeorm/entities/Category";

interface ICategoryFactory{
  build(dto: ICategoryDTO) : Category;
}

export { ICategoryFactory }
