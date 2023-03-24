import { ISpecificationDTO } from "../DataTransferObjects/ISpecificationDTO";
import { Specification } from "../model/Specification";

 interface ISpecificationFactory{
   build(dto: ISpecificationDTO): Specification;
 }

 export { ISpecificationFactory }

