import { ComponentProps, MouseEvent } from 'react';
import { useFormContext } from 'react-hook-form';

import * as S from './CompanyField.style';

import { CARD_COMPANY } from '~/entities/Card';
import { CompanyItem } from '~/entities/Card/ui/CompanyItem';
import { cardRegsitFormValidate, validateHelper } from '~/features/utils';

export interface RootProps extends ComponentProps<'div'> {}

function isCardCompany(key: string): key is keyof typeof CARD_COMPANY {
  return key in CARD_COMPANY;
}

const Root = ({ ...props }: RootProps) => {
  const { setValue, register } = useFormContext();
  register('company', {
    validate: (value) =>
      validateHelper(cardRegsitFormValidate['company'], value),
  });

  const handleClickCompany = (event: MouseEvent<HTMLDivElement>) => {
    const { target } = event;

    if (target instanceof HTMLElement) {
      const $palateItem = target.closest('.company-item');

      if ($palateItem instanceof HTMLElement) {
        const { company } = $palateItem.dataset;

        if (company && isCardCompany(company)) {
          setValue('company', company, {
            shouldValidate: true,
          });
        }
      }
    }
  };

  return (
    <S.Container onClick={handleClickCompany} {...props}>
      {Object.keys(CARD_COMPANY).map(
        (key) =>
          isCardCompany(key) && (
            <CompanyItem
              className='company-item'
              data-company={key}
              key={key}
              company={key}
            />
          ),
      )}
    </S.Container>
  );
};

export default Root;
