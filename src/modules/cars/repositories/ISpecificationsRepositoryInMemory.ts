import { ISpecificationDTO } from "../dto/ISpecificationDTO";
import { SpecificationDTO } from "../dto/SpecificationDTO"
import { Specification } from "../entities/Specification";

interface ISpecificationsRepository{
   findByName(dto: ISpecificationDTO) : SpecificationDTO;
   list(): SpecificationDTO[];
   save(specification: Specification) : void;

}

export { ISpecificationsRepository }
