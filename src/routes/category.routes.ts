import { Router } from 'express';
import { CategoryDTO } from '../DataTransferObjects/CategoryDTO';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/categories", (request, response)=> {
   const { name, description } = request.body;
   const dto = new CategoryDTO();
   dto.description = description;
   dto.name = name;
   const categoryAlreadyExists = categoriesRepository.findByName(dto);
   if (categoryAlreadyExists){
     return response.status(400).json({
       error: "Category already exists"
     });
   }
   categoriesRepository.create(dto);
   response.status(201).send();
});

categoriesRoutes.get("/categories", (request, response)=> {
   const all = categoriesRepository.list();
   response.json(all);
});

export { categoriesRoutes };