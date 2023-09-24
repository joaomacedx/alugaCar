import { IUserDTO } from "../dto/IUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUserFactory {
    build (data: IUserDTO): User;
}

export { IUserFactory }
