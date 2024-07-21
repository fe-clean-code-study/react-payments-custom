export interface ICard {
  id?: string
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
