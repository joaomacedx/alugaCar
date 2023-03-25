import { Router } from 'express';
import { SpecificationDTO } from '../modules/cars/DataTransferObjects/SpecificationDTO';
import { SpecificationFactory } from '../modules/cars/Factories/SpecificationFatory';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();
const specificationsFactory = new SpecificationFactory();

specificationsRoutes.post("/", (request, response)=>{
   const {name, description } = request.body;
   console.log(description);
   const dto = new SpecificationDTO(name, description);
   const createSpecificationService = new CreateSpecificationService(specificationsRepository, specificationsFactory);
   createSpecificationService.execute(dto);
   console.log(dto);
   response.status(201).send();
});

export { specificationsRoutes }