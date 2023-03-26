import { FC } from 'react';

export interface RouteElement {
  id: number;
  name?: string;
  path: string;
  component: FC;
}

// TODO: Всё что ниже примеры

export interface ITokenInfo {
  name: string;
  symbol: string;
  decimal: number;
  balance: number;
  allowance: string;
}

export type TTokens = ITokenInfo & { address: string };
