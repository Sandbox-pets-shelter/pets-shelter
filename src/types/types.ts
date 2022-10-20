// TODO: Всё что ниже примеры

export interface ITokenInfo {
  name: string
  symbol: string
  decimal: number
  balance: number
  allowance: string
}

export type TTokens = ITokenInfo & { address: string }
