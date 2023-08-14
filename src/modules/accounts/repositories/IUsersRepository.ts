import { User } from "../entities/User";

interface IUsersRepository {
    save(data: User): Promise<void>;
    findByEmail(email: string): Promise<User>;
}
export { IUsersRepository }
