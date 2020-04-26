export class Model {
    id: number;
    name: string;
  }
  
  export class Car {
    id: number;
    name: string;
    imageURL: string;
    description: string;
    price: string;
    model: string;
  }
  
  export class LoginResponse {
    token: string;
  }