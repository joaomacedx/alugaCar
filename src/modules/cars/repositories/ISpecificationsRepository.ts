import { ISpecificationDTO } from "../DataTransferObjects/ISpecificationDTO";
import { SpecificationDTO } from "../DataTransferObjects/SpecificationDTO"
import { Specification } from "../entities/Specification";

interface ISpecificationsRepository{
   findByName(name: string) : Promise<Specification>;
   list(): Promise<Specification[]>;
   save(specification: Specification) : Promise<void>;

}

export { ISpecificationsRepository }