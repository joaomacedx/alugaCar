import { inject, injectable } from "tsyringe";
import { ISpecificationDTO } from "../../DataTransferObjects/ISpecificationDTO";
import { ISpecificationFactory } from "../../factories/ISpecificationFactory";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
class CreateSpecificationUseCase {
   constructor(
    @inject("SpecificationsRepository")
     private specificationRepository: ISpecificationsRepository,
    @inject("SpecificationFactory")
     private specificationFactory: ISpecificationFactory) {
   }
   public execute(dto: ISpecificationDTO): void{ 
     const specificationAlreadyExists = this.specificationRepository.findByName(dto);
     if (specificationAlreadyExists) throw new Error("Specification already exists");
     const specification = this.specificationFactory.build(dto);
     this.specificationRepository.save(specification);
   }
}

export { CreateSpecificationUseCase }