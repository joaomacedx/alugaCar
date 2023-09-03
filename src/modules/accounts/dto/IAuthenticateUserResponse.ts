  interface IAuthenticateUserResponse {
    user: {
      name: string;
      email: string;
    };
    token: string;
  }
