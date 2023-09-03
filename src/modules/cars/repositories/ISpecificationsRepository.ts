import { ISpecificationDTO } from "../dto/ISpecificationDTO";
import { SpecificationDTO } from "../dto/implementations/SpecificationDTO"
import { Specification } from "../entities/Specification";

interface ISpecificationsRepository{
   findByName(name: string) : Promise<Specification>;
   list(): Promise<Specification[]>;
   save(specification: Specification) : Promise<void>;

}

export { ISpecificationsRepository }
