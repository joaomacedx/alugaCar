import { Router } from 'express';
import { CategoryDTO } from '../DataTransferObjects/CategoryDTO';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/categories", (request, response)=> {
   const { name, description } = request.body;
   const dto = new CategoryDTO(name, description);
   const createCategoryService = new CreateCategoryService(categoriesRepository);
   createCategoryService.build(dto);
   response.status(201).send();
});

categoriesRoutes.get("/categories", (request, response)=> {
   const all = categoriesRepository.list();
   response.json(all);
});

export { categoriesRoutes };