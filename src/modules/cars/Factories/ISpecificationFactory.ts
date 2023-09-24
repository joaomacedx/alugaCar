import { ISpecificationDTO } from "../dto/ISpecificationDTO";
import { Specification } from "../infra/typeorm/entities/Specification";

interface ISpecificationFactory{
  build(dto: ISpecificationDTO): Specification;
}

export { ISpecificationFactory }

