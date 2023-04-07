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
     try{
       this.createSpecificationUseCase.execute(dto);
       return response.status(201).send();
     } catch (error) {
      return response.status(400).json({ error: error.message });
     }
   }

}

export { CreateSpecificationController }

