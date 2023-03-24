import { ICategoryDTO } from "../DataTransferObjects/ICategoryDTO";
import { Category } from "../model/Category";

class CategoryFactory{
   public build(dto: ICategoryDTO): Category{
     const category = new Category(dto.name, dto.description, new Date());
     return category;
   }
}

export { CategoryFactory }