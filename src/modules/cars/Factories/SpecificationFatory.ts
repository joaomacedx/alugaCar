import { ISpecificationDTO } from "../DataTransferObjects/ISpecificationDTO";
import { Specification } from "../entities/Specification";

class SpecificationFactory{
  public build(dto: ISpecificationDTO): Specification {
    const specification = new Specification(dto.name, dto.description);
    return specification;
  }
}

export { SpecificationFactory }
