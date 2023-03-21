import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories : Category[] = [];
categoriesRoutes.post("/categories", (request, response)=>{
   const { name, description } = request.body;

   const category = new Category(name, description, new Date());   

   console.log(category);
   categories.push(category);
  
   response.status(201).json(category);
});

export { categoriesRoutes };