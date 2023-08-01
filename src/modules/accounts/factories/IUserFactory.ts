import { IUserDTO } from "../dto/IUserDTO";
import { User } from "../entities/User";

interface IUserFactory {
    build (data: IUserDTO): User;
}

export { IUserFactory }
