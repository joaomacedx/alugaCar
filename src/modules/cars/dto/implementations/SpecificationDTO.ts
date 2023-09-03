import { ISpecificationDTO } from "../ISpecificationDTO";

class SpecificationDTO implements ISpecificationDTO {
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

export { SpecificationDTO };
