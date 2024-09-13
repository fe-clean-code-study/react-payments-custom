import { describe, test, expect } from 'vitest';

import { cardRegsitFormValidate } from '~/features/utils/cardRegistFormValidate';

describe('카드 등록시 유효성 검사 로직.', () => {
  test('카드 번호의 문자열은 4자리여야 한다.', () => {
    const cardNumber = '1234';
    const result = cardRegsitFormValidate.numbers.length.validate(cardNumber);
    expect(result).toBe(true);
  });

  test('카드는 숫자로만 이루어져야 한다.', () => {
    const cardNumber = '1234';
    const result = cardRegsitFormValidate.numbers.type.validate(cardNumber);
    expect(result).toBe(true);
  });

  test('카드번호는 필수로 입력되어야 한다.', () => {
    const cardNumber = '1234';
    const result = cardRegsitFormValidate.numbers.required.validate(cardNumber);
    expect(result).toBe(true);
  });

  test('카드 사용자 이름은 30자 이하로 입력되어야 한다.', () => {
    const cardUser = '김철수';
    const result = cardRegsitFormValidate.cardUser.length.validate(cardUser);
    expect(result).toBe(true);
  });

  test('카드사는 필수로 입력되어야 한다.', () => {
    const company = 'SUYEON';
    const result = cardRegsitFormValidate.company.required.validate(company);
    expect(result).toBe(true);
  });

  test('카드사는 cardCompany에 있는 값이어야 한다.', () => {
    const company = 'SUYEON';
    const result =
      cardRegsitFormValidate.company.valueInCompany.validate(company);
    expect(result).toBe(true);
  });

  test('카드 만료일의 월은 2자리여야 한다.', () => {
    const endDate = '12';
    const result = cardRegsitFormValidate.endDate.month.type.validate(endDate);
    expect(result).toBe(true);
  });

  test('카드 만료일의 월은 필수로 입력되어야 한다.', () => {
    const endDate = '12';
    const result =
      cardRegsitFormValidate.endDate.month.required.validate(endDate);
    expect(result).toBe(true);
  });

  test('카드 만료일의 월은 숫자로만 이루어져야 한다.', () => {
    const endDate = '12';
    const result = cardRegsitFormValidate.endDate.month.type.validate(endDate);
    expect(result).toBe(true);
  });

  test('카드 만료일의 월은 1이상의 숫자여야 한다.', () => {
    const endDate = '12';
    const result = cardRegsitFormValidate.endDate.month.min.validate(endDate);
    expect(result).toBe(true);
  });

  test('카드 만료일의 월은 12이하의 숫자여야 한다.', () => {
    const endDate = '12';
    const result = cardRegsitFormValidate.endDate.month.max.validate(endDate);
    expect(result).toBe(true);
  });

  test('카드 만료일의 일은 2자리여야 한다.', () => {
    const endDate = '12';
    const result = cardRegsitFormValidate.endDate.year.type.validate(endDate);
    expect(result).toBe(true);
  });

  test('카드 만료일의 일은 필수로 입력되어야 한다.', () => {
    const endDate = '12';
    const result =
      cardRegsitFormValidate.endDate.year.required.validate(endDate);
    expect(result).toBe(true);
  });

  test('카드 만료일의 일은 숫자로만 이루어져야 한다.', () => {
    const endDate = '12';
    const result = cardRegsitFormValidate.endDate.year.type.validate(endDate);
    expect(result).toBe(true);
  });

  test('카드 만료일의 일은 1이상의 숫자여야 한다.', () => {
    const endDate = '12';
    const result = cardRegsitFormValidate.endDate.year.min.validate(endDate);
    expect(result).toBe(true);
  });

  test('카드 만료일의 일은 31이하의 숫자여야 한다.', () => {
    const endDate = '12';
    const result = cardRegsitFormValidate.endDate.year.max.validate(endDate);
    expect(result).toBe(true);
  });

  test('카드 비밀번호 한칸은 1자리씩 입력받아야 한다.', () => {
    const password = '1';
    const result = cardRegsitFormValidate.password.length.validate(password);
    expect(result).toBe(true);
  });

  test('카드 비밀번호 한칸은 숫자로만 입력받아야 한다.', () => {
    const password = '1';
    const result = cardRegsitFormValidate.password.type.validate(password);
    expect(result).toBe(true);
  });

  test('카드 비밀번호 한칸은 필수로 입력받아야 한다.', () => {
    const password = '1';
    const result = cardRegsitFormValidate.password.required.validate(password);
    expect(result).toBe(true);
  });

  test('보안코드는 숫자로 이루어져야 한다.', () => {
    const securityCode = '123';
    const result =
      cardRegsitFormValidate.securityCode.type.validate(securityCode);
    expect(result).toBe(true);
  });

  test('보안코드는 3자리여야 한다.', () => {
    const securityCode = '123';
    const result =
      cardRegsitFormValidate.securityCode.length.validate(securityCode);
    expect(result).toBe(true);
  });

  test('보안코드는 필수로 입력되어야 한다.', () => {
    const securityCode = '123';
    const result =
      cardRegsitFormValidate.securityCode.required.validate(securityCode);
    expect(result).toBe(true);
  });

  test('카드 번호는 16자리여야 한다.', () => {
    const cardNumber = ['1234', '1234', '1234', '1234'];
    const result = cardRegsitFormValidate.form.numbers.validate(cardNumber);
    expect(result).toBe(true);
  });

  test('카드 사용자 이름은 30자 이하로 입력되어야 한다.', () => {
    const cardUser = '김철수';
    const result = cardRegsitFormValidate.form.cardUser.validate(cardUser);
    expect(result).toBe(true);
  });

  test('카드사는 지정한 카드사 중 하나로 선택해야 한다.', () => {
    const company = 'SUYEON';
    const result = cardRegsitFormValidate.form.company.validate(company);
    expect(result).toBe(true);
  });

  test('카드 만료일은 각각 2자리의 월, 일로 이루어져야 한다.', () => {
    const endDate = { month: '12', year: '31' };
    const result = cardRegsitFormValidate.form.endDate.validate(endDate);
    expect(result).toBe(true);
  });

  test('카드 비밀번호는 각자리당 하나의 숫자를 입력해야 한다.', () => {
    const password = ['1', '2'];
    const result = cardRegsitFormValidate.form.password.validate(password);
    expect(result).toBe(true);
  });

  test('보안코드는 3자리의 숫자로 이루어져야 한다.', () => {
    const securityCode = '123';
    const result =
      cardRegsitFormValidate.form.securityCode.validate(securityCode);
    expect(result).toBe(true);
  });
});
