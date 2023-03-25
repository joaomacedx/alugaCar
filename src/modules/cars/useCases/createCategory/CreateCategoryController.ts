import { CreateCategoryService } from "../../services/CreateCategoryService";
import { Request, Response } from "express";
import { CategoryDTO } from "../../DataTransferObjects/CategoryDTO";

class CreateCategoryController{
   constructor(
     private createCategoryService: CreateCategoryService
   ){}

   public handle(request: Request, response: Response): Response {
     const { name, description } = request.body;
     const dto = new CategoryDTO(name, description);
     this.createCategoryService.execute(dto);
     return response.status(201).send();
   }

}

export { CreateCategoryController }
