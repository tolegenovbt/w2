export class Company {
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
}

export class Vacancy {
  id: number;
  name: string;
  description: string;
  salary: string;
  company_id: string;
}

export class LoginResponse {
  token: string;
}
