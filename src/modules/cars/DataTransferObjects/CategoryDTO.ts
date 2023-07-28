import { ICategoryDTO } from "./ICategoryDTO";
class CategoryDTO implements ICategoryDTO {
  public name: string;
  public description: string; 
  constructor(
    _name: string,
    _description: string) {
    this.name = _name;
    this.description = _description;

  }
}
export { CategoryDTO }
