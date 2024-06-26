import { ISpecificationDTO } from "../dto/ISpecificationDTO";
import { SpecificationDTO } from "../dto/implementations/SpecificationDTO"
import { Specification } from "../infra/typeorm/entities/Specification";

interface ISpecificationsRepository{
   findByName(dto: ISpecificationDTO) : SpecificationDTO;
   list(): SpecificationDTO[];
   save(specification: Specification) : void;

}

export { ISpecificationsRepository }
