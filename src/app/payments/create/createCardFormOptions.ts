import {IFormOptions} from "../../../libs/form";
import {ICard} from "../type.ts";

export const createCardFormOptions: IFormOptions<ICard> = {
  'cardNumbers.0.numbers': {
    check: (value) => value.length >= 4,
    nextField: 'cardNumbers.1.numbers'
  },
  'cardNumbers.1.numbers': {
    check: (value) => value.length >= 4,
    nextField: 'cardNumbers.2.numbers'
  },
  'cardNumbers.2.numbers': {
    type: 'password',
    check: (value) => value.length >= 4,
    nextField: 'cardNumbers.3.numbers'
  },
  'cardNumbers.3.numbers': {
    type: 'password',
  },
  expirationMonth: {
    check: (value) => value.length >= 2,
    nextField: 'expirationYear'
  },
  'password.0': {
    check: (value) => value.length >= 1,
    nextField: 'password.1'
  },
  'password.1': {
    check: (value) => value.length >= 1,
    nextField: 'password.2'
  },
  'password.2': {
    check: (value) => value.length >= 1,
    nextField: 'password.3'
  }
}

export const initialCard: ICard = {
  id: '',
  type: '',
  cardNumbers: [{
    numbers: '',
    isPrivate: false
  },{
    numbers: '',
    isPrivate: false
  },{
    numbers: '',
    isPrivate: true
  },{
    numbers: '',
    isPrivate: true
  }],
  expirationMonth: '',
  expirationYear: '',
  securityCode: '',
  password: []
}