import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { Request, Response } from "express";

class ListCategoriesController{
   constructor(
     private categoriesRepository: CategoriesRepository
   ){}
   public  handle(request: Request, response: Response): Response {
     const all = this.categoriesRepository.list();
     return response.json(all);
   }
}
export { ListCategoriesController }

