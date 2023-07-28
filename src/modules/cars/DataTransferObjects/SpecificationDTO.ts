import { ISpecificationDTO } from "./ISpecificationDTO";

class SpecificationDTO implements ISpecificationDTO {
  public name: string; 
  public description: string;

  constructor(
    _name: string,
    _description: string,
    ) {
      this.name = _name;
      this.description = _description;
  }
}

export { SpecificationDTO };
