import { ICategoryDTO } from "../../dto/ICategoryDTO";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoryFactory } from "../ICategoryFactory";

class CategoryFactory implements ICategoryFactory{
  public build(dto: ICategoryDTO): Category{
    const category = new Category(dto.name, dto.description);
    return category;
  }
}

export { CategoryFactory }
