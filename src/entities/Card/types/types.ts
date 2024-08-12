import { CARD_COMPANY } from '../constants';

export type Company = keyof typeof CARD_COMPANY;

export type Numbers = [string, string, string, string];

export type Password = [string, string];

export interface ExpirationDate {
  month: string;
  year: string;
}

export interface DefaultCard {
  numbers: Numbers;
  expirationDate: ExpirationDate;
  cardUser?: string;
  company: Company;
}

// ! 이건 feature애 있어야 함
export interface RegisteredCard extends DefaultCard {
  id: string;
  alias?: string;
}

export interface CardForm extends Omit<RegisteredCard, 'id'> {
  securityCode: string;
  password: Password;
}
