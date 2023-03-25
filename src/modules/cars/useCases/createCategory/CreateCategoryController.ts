import { CreateCategoryUseCase} from "./CreateCategoryUseCase";
import { Request, Response } from "express";
import { CategoryDTO } from "../../DataTransferObjects/CategoryDTO";

class CreateCategoryController{
   constructor(
     private createCategoryUseCase: CreateCategoryUseCase
   ){}

   public handle(request: Request, response: Response): Response {
     const { name, description } = request.body;
     const dto = new CategoryDTO(name, description);
     this.createCategoryUseCase.execute(dto);
     return response.status(201).send();
   }

}

export { CreateCategoryController }
