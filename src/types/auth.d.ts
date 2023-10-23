export interface AuthLoginPayload {
  username: string;
  password: string;
}

export interface AuthRegisterPayload {
  username: string;
  password: string;
  seller?: boolean;
  address?: Address;
}

export interface Address {
  addr1: string;
  addr2: string;
  city: string;
  state: string;
  country: string;
  zip: number;
}
