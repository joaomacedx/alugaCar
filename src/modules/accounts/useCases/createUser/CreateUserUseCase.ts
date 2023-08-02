import { inject } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUserFactory } from "../../factories/IUserFactory";
import { IUserDTO } from "../../dto/IUserDTO";

class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("UserFactory")
        private userFactory: IUserFactory,
        ) {}

        public async execute(data: IUserDTO) {
            const newUser = this.userFactory.build(data);
            await this.usersRepository.save(newUser);
        }
}
