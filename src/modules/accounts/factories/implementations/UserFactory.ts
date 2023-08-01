import { IUserDTO } from "../../dto/IUserDTO";
import { User } from "../../entities/User";
import { IUserFactory } from "../IUserFactory";

class UserFactory implements IUserFactory {
    build(data: IUserDTO): User {
        const user = new User(data.name, data.username, data.email, data.password, data.driver_license);
        return user;
    }

}
