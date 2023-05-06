import { ISpecificationDTO } from "../DataTransferObjects/ISpecificationDTO";
import { ISpecificationFactory } from "../factories/ISpecificationFactory";
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";


class CreateSpecificationService {
   constructor(
     private specificationRepository: ISpecificationsRepository,
     private specificationFactory: ISpecificationFactory) {
   }
   public execute(dto: ISpecificationDTO): void{ 
     const specificationAlreadyExists = this.specificationRepository.findByName(dto.name);
     if (specificationAlreadyExists){
       throw new Error("Specification already exists");
     }
     const specification = this.specificationFactory.build(dto);
     this.specificationRepository.save(specification);
   }
}

export { CreateSpecificationService }