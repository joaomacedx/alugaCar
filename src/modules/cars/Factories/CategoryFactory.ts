import { CategoryDTO } from "../DataTransferObjects/CategoryDTO";
import { Category } from "../model/Category";

class CategoryFactory{
   public build(dto: CategoryDTO): Category{
     const category = new Category(dto.name, dto.description, new Date());
     return category;
   }
}

export { CategoryFactory }