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
   public async execute(dto: ISpecificationDTO): Promise<void>{ 
    try{
      const specificationAlreadyExists = await this.specificationRepository.findByName(dto.name);
      if (specificationAlreadyExists) throw new Error("Specification already exists");
      const specification = this.specificationFactory.build(dto);
      await this.specificationRepository.save(specification);
    } catch (error) {

    }

   }
}

export { CreateSpecificationUseCase }