import { Request, Response } from "express";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";
import { container } from "tsyringe";

class UpdateUserAvatarController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const  id  = request.user.id;
    const avatar_file = request.file.filename;
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    await updateUserAvatarUseCase.execute({user_id: id, avatar_file});

    return response.status(204).send();
  }
}

export { UpdateUserAvatarController }
