import { Router } from 'express';
import { CategoryDTO } from '../modules/cars/DataTransferObjects/CategoryDTO';
import { CategoryFactory } from '../modules/cars/Factories/CategoryFactory';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
const categoriesFactory = new CategoryFactory();

categoriesRoutes.post("/", (request, response)=> {
    const { name, description } = request.body;
    const dto = new CategoryDTO(name, description);
    const createCategoryService = new CreateCategoryService(categoriesRepository, categoriesFactory);
    createCategoryService.execute(dto);
    response.status(201).send();
});

categoriesRoutes.get("/", (request, response)=> {
    const all = categoriesRepository.list();
    response.json(all);
});

export { categoriesRoutes };