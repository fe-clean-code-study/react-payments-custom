export interface ICard {
  type: string
  nickname?: string
  cardNumbers: Array<{
    numbers: number
    isPrivate: boolean
  }>
  expirationMonth: number
  expirationYear: number
  owner?: string
  securityCode: number
  password: number
}
