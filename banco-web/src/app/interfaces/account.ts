import { Client } from './client';

export interface Account {
  id: number;

  type: 'current' | 'savings';

  number: number;

  createdAt: Date;

  active: boolean;

  balance: number;

  client: Client;
}
