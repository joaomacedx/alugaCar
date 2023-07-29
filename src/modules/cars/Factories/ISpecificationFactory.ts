import { ISpecificationDTO } from "../dto/ISpecificationDTO";
import { Specification } from "../entities/Specification";

interface ISpecificationFactory{
  build(dto: ISpecificationDTO): Specification;
}

export { ISpecificationFactory }

