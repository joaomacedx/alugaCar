import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IAuthenticateUserDTO } from "../../dto/IAuthenticateUserDTO";
import { AppError } from "@errors/AppError";

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(userData: IAuthenticateUserDTO): Promise<IAuthenticateUserResponse> {
    const userFoundByEmail = await this.usersRepository.findByEmail(userData.email);
    if(!userFoundByEmail) {
      throw new AppError("Email or password incorrect!");
    }
    const passworMatch = await compare(userData.password, userFoundByEmail.password);
    if(!passworMatch) {
      throw new AppError("Email or password incorrect!");
    }
    const token = sign(
        {}, 
        "f8886815eb3423fce958930c5cb76204",
        {
          subject: userFoundByEmail.id,
          expiresIn: "1d",
        }
    );
    const response: IAuthenticateUserResponse = {
        token,
        user: {
          name: userFoundByEmail.name,
          email: userFoundByEmail.email,
        },
      };

      return response;
    }
  }

export { AuthenticateUserUseCase }

