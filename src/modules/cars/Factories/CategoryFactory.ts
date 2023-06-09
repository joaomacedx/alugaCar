import { ICategoryDTO } from "../DataTransferObjects/ICategoryDTO";
import { Category } from "../entities/Category";

class CategoryFactory{
   public build(dto: ICategoryDTO): Category{
     const category = new Category(dto.name, dto.description);
     return category;
   }
}

export { CategoryFactory }