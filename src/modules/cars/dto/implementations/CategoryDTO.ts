import { ICategoryDTO } from "../ICategoryDTO";
class CategoryDTO implements ICategoryDTO {
  public name: string;
  public description: string; 
  constructor(
    name: string,
    description: string,
    ) {
    this.name = name;
    this.description = description;

  }
}
export { CategoryDTO }
