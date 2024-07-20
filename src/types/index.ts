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
