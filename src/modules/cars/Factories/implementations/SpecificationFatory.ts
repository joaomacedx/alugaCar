import { ISpecificationDTO } from "../../dto/ISpecificationDTO";
import { Specification } from "../../infra/typeorm/entities/Specification";
import { ISpecificationFactory } from "../ISpecificationFactory";

class SpecificationFactory implements ISpecificationFactory{
  public build(dto: ISpecificationDTO): Specification {
    const specification = new Specification(dto.name, dto.description);
    return specification;
  }
}

export { SpecificationFactory }
