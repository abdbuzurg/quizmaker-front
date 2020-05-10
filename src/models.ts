export interface User{
  username: String;
  lastName: String;
  firstName: String;
}

export interface UserRegister extends User{
  password: String;
}

export interface UserLogin {
  username: String;
  password: String;
}