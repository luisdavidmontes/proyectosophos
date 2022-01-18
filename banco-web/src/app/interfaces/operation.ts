export interface Operation {
  from: string;
  to: string;
  balance: number;
  type: 'consign' | 'withdraw' | 'between';
}
