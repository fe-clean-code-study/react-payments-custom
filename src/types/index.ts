import { cardCompany } from '../constants';

export type CardCompany = keyof typeof cardCompany;

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

export type TupleOfLength<N extends number, T = unknown> = [T, ...T[]] & {
  length: N;
};

export type CardNumber = TupleOfLength<4, string>;

export type CardPassword = TupleOfLength<2, string>;

export type KeypadNumbers = TupleOfLength<10, number>;
