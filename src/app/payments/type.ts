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
  password: Array<0|1|2|3|4|5|6|7|8|9>
}
