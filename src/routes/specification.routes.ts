import { Router } from 'express';
import { SpecificationFactory } from '../modules/cars/Factories/SpecificationFatory';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();
const specificationsFactory = new SpecificationFactory();



export { specificationsRoutes }