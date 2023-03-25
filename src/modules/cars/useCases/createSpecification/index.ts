import { SpecificationFactory } from "../../Factories/SpecificationFatory";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();

const specificationsFactory= new SpecificationFactory();

const createSpecificationsUseCase =  new CreateSpecificationUseCase(specificationsRepository, specificationsFactory );

const createSpecificationsController = new CreateSpecificationController(createSpecificationsUseCase);

export { createSpecificationsController }
