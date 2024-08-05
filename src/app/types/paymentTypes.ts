export interface ICard {
  id?: string
  type: string
  nickname?: string
  cardNumbers: Array<{
    numbers: string
    isPrivate: boolean
  }>
  expirationMonth: string
  expirationYear: string
  owner?: string
  securityCode: string
  password: Array<0|1|2|3|4|5|6|7|8|9>
}
