import { ISpecificationDTO } from "../DataTransferObjects/ISpecificationDTO";
import { ISpecificationFactory } from "../Factories/ISpecificationFactory";
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

class CreateSpecificationService {
   constructor(
     private specificationRepository: ISpecificationsRepository,
     private specificationFactory: ISpecificationFactory) {
   }
   public execute(dto: ISpecificationDTO): void{ 
     const specificationAlreadyExists = this.specificationRepository.findByName(dto);
     if (specificationAlreadyExists){
       throw new Error("Specification already exists");
     }
     const category = this.specificationFactory.build(dto);
     this.specificationRepository.save(category);
   }
}

export { CreateSpecificationService }