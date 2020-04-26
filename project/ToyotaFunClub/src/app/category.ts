import { Photos } from './photos';
export interface Category {
    id: number;
    name: string;
    img: string;
}

export class LoginResponse {
  token: string;
}
