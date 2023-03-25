import { CreateSpecificationUseCase} from "./CreateSpecificationUseCase";
import { Request, Response } from "express";
import { SpecificationDTO } from "../../DataTransferObjects/SpecificationDTO";

class CreateSpecificationController{
   constructor(
     private createSpecificationUseCase: CreateSpecificationUseCase
   ){}

   public handle(request: Request, response: Response): Response {
     const { name, description } = request.body;
     const dto = new SpecificationDTO(name, description);
     this.createSpecificationUseCase.execute(dto);
     return response.status(201).send();
   }

}

export { CreateSpecificationController }

