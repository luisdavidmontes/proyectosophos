import { Account } from './account';

export interface Client {
  id: number;
  identicationType: 'document' | '';
  identificationNumber: number;
  name: string;
  lastName: string;
  email: string;
  birthday: Date;
  date: Date;
  accounts: Account[];
}
