import { CARD_COMPANY } from '../../entities/Card/constants';

export const cardRegsitFormValidate = {
  numbers: {
    type: {
      validate: (value: string | undefined) => {
        return !isNaN(Number(value));
      },
      message: '카드번호는 숫자만 입력 가능합니다.',
    },
    length: {
      validate: (value: string) => {
        return value.length === 4;
      },
      message: '카드번호는 4자리로 입력해주세요.',
    },
    required: {
      validate: (value: string) => {
        return value.length > 0;
      },
      message: '카드번호를 입력해주세요.',
    },
  },
  cardUser: {
    length: {
      validate: (value: string) => {
        return value.length <= 30;
      },
      message: '카드 사용자 이름은 30자 이하로 입력해주세요.',
    },
  },
  company: {
    type: {
      validate: (value: string | undefined) => {
        return typeof value === 'string';
      },
      message: '카드사는 문자로 입력해주세요.',
    },
    required: {
      validate: (value: string) => {
        return value.length > 0;
      },
      message: '카드사를 선택해주세요.',
    },
    valueInCompany: {
      validate: (value: string) => {
        return value in CARD_COMPANY;
      },
      message: '올바른 카드사가 아닙니다.',
    },
  },
  endDate: {
    month: {
      type: {
        validate: (value: string | undefined) => {
          return !isNaN(Number(value));
        },
        message: '월은 숫자로 입력해주세요.',
      },
      required: {
        validate: (value: string) => {
          return value.length > 0;
        },
        message: '월을 입력해주세요.',
      },
      length: {
        validate: (value: string) => {
          return value.length === 2;
        },
        message: '월은 2자리로 입력해주세요.',
      },
      min: {
        validate: (value: string) => {
          return Number(value) >= 1;
        },
        message: '월은 1이상의 숫자로 입력해주세요.',
      },
      max: {
        validate: (value: string) => {
          return Number(value) <= 12;
        },
        message: '월은 12이하의 숫자로 입력해주세요.',
      },
    },
    year: {
      type: {
        validate: (value: string | undefined) => {
          return !isNaN(Number(value));
        },
        message: '년은 숫자로 입력해주세요.',
      },
      required: {
        validate: (value: string) => {
          return value.length > 0;
        },
        message: '년을 입력해주세요.',
      },
      length: {
        validate: (value: string) => {
          return value.length === 2;
        },
        message: '년은 2자리로 입력해주세요.',
      },
      min: {
        validate: (value: string) => {
          return Number(value) >= 1;
        },
        message: '년은 1이상의 숫자로 입력해주세요.',
      },
      max: {
        validate: (value: string) => {
          return Number(value) <= 31;
        },
        message: '년은 99이하의 숫자로 입력해주세요.',
      },
    },
  },
  password: {
    type: {
      validate: (value: string | undefined) => {
        return !isNaN(Number(value));
      },
      message: '비밀번호는 숫자로 입력해주세요.',
    },
    length: {
      validate: (value: string) => {
        return value.length === 1;
      },
      message: '비밀번호는 각자리당 하나의 숫자를 입력해주세요.',
    },
    required: {
      validate: (value: string) => {
        return value.length > 0;
      },
      message: '비밀번호를 입력해주세요.',
    },
  },
  securityCode: {
    type: {
      validate: (value: string | undefined) => {
        return !isNaN(Number(value));
      },
      message: '보안코드는 숫자로 입력해주세요.',
    },
    length: {
      validate: (value: string) => {
        return value.length === 3;
      },
      message: '보안코드는 3자리로 입력해주세요.',
    },
    required: {
      validate: (value: string) => {
        return value.length > 0;
      },
      message: '보안코드를 입력해주세요.',
    },
  },
  form: {
    numbers: {
      validate: (value: string[]) => {
        return value.length === 4 && value.every((v) => v.length === 4);
      },
      message: '카드번호를 정확히 입력해주세요.',
    },
    cardUser: {
      validate: (value: string) => {
        return value.length <= 30;
      },
      message: '카드 사용자 이름은 30자 이하여야합니다.',
    },
    company: {
      validate: (value: string) => {
        return value in CARD_COMPANY;
      },
      message: '카드사를 선택해주세요.',
    },
    endDate: {
      validate: (value: { month: string; year: string }) => {
        return value.month.length === 2 && value.year.length === 2;
      },
      message: '만료일을 정확히 입력해주세요.',
    },
    password: {
      validate: (value: string[]) => {
        return value.length === 2 && value.every((v) => v.length === 1);
      },
      message: '비밀번호를 정확히 입력해주세요.',
    },
    securityCode: {
      validate: (value: string) => {
        return value.length === 3;
      },
      message: '보안코드를 정확히 입력해주세요.',
    },
  },
};
