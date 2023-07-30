import { User } from "../entities/User";

interface IUsersRepository {
    save(data: User): Promise<void>;
}
export { IUsersRepository }
