export type CardCompany =
  | 'none'
  | 'suyeon'
  | 'sejin'
  | 'chanwook'
  | 'jonggil'
  | 'hyori'
  | 'hyesong'
  | 'jingyeong'
  | 'geonwoo';

export type CardNumber = [string, string, string, string];

export interface CardEndDate {
  month: string;
  day: string;
}

export interface MyCard {
  numbers: CardNumber;
  endDate: CardEndDate;
  cardUser: string;
  company: CardCompany;
}
