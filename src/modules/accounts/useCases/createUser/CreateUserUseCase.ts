import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUserFactory } from "../../factories/IUserFactory";
import { IUserDTO } from "../../dto/IUserDTO";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("UserFactory")
        private userFactory: IUserFactory,
        ) {}

        public async execute(data: IUserDTO) {
            const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
            if (userAlreadyExists)  
                throw new AppError("User already exists");
            const newUser = this.userFactory.build(data);
            await this.usersRepository.save(newUser);
        }
}
export { CreateUserUseCase }
