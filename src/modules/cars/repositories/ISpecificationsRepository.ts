import { SpecificationDTO } from "../DataTransferObjects/SpecificationDTO"
import { Specification } from "../model/Specification";

interface ISpecificationsRepository{
   findByName(dto: SpecificationDTO) : SpecificationDTO;
   list(): SpecificationDTO[];
   save(specification: Specification) : void;

}

export { ISpecificationsRepository }