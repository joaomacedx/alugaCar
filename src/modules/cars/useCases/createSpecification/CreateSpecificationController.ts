import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { container  } from "tsyringe";
import { Request, Response } from "express";
import { SpecificationDTO } from "../../dto/SpecificationDTO";

class CreateSpecificationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const dto = new SpecificationDTO(name, description);
    try{
      const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase);
      await createSpecificationUseCase.execute(dto);
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export { CreateSpecificationController }


