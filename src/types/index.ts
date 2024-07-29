import { cardCompany } from '../constants';

export type CardCompany = keyof typeof cardCompany;

export type CardNumber = [string, string, string, string];

export type CardPassword = [string, string];

export interface CardEndDate {
  month: string;
  day: string;
}

export interface DefaultCard {
  numbers: CardNumber;
  endDate: CardEndDate;
  cardUser?: string;
  company: CardCompany;
}

export interface RegisteredCard extends DefaultCard {
  id: string;
  cardAlias?: string;
}

export interface CardForm extends Omit<RegisteredCard, 'id'> {
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
