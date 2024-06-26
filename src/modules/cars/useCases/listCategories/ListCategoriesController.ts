import { CategoriesRepository } from "../../repositories/implementations/InMemoryCategoriesRepository";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController{

   public  async handle(request: Request, response: Response): Promise<Response> {
   const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)
   const all = await listCategoriesUseCase.execute();
   return response.json(all);
   }
}
export { ListCategoriesController }


