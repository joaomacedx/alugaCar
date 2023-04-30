import { ISpecificationDTO } from "../DataTransferObjects/ISpecificationDTO";
import { SpecificationDTO } from "../DataTransferObjects/SpecificationDTO"
import { Specification } from "../entities/Specification";

interface ISpecificationsRepository{
   findByName(dto: ISpecificationDTO) : SpecificationDTO;
   list(): SpecificationDTO[];
   save(specification: Specification) : void;

}

export { ISpecificationsRepository }