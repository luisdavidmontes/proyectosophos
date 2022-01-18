import { Client } from './client';

export interface Registry {
  id: number;
  to: Client;
  from: Client;
  type: 'consign' | 'withdraw' | 'between';
  balance: number;
  result: number;
  date: string;
}
