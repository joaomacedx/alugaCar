import { IAuthenticateUserDTO } from "../IAuthenticateUserDTO";

class AuthenticateUserDTO implements IAuthenticateUserDTO {
  public email: string;
  public password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    }
}
export { AuthenticateUserDTO }
