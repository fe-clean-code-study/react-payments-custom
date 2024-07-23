import { cardCompany } from '../constants';

export type CardCompany = keyof typeof cardCompany | 'none';

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
  cardAlias?: string;
}

export type CardPassword = [string, string];

export interface MyCardForm extends MyCard {
  securityCode: string;
  password: CardPassword;
}

export type KeypadNumbers = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
];
