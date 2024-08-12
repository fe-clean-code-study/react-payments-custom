import { ComponentProps, MouseEvent } from 'react';

import * as S from './CardSelector.style';

import { CARD_COMPANY } from '~/entities/Card';
import { CompanyItem } from '~/entities/Card/ui/CompanyItem';

export interface RootProps extends ComponentProps<'div'> {
  onSelectCompany: (company: string) => void;
}

function isCardCompany(key: string): key is keyof typeof CARD_COMPANY {
  return key in CARD_COMPANY;
}

const Root = ({ onSelectCompany, ...props }: RootProps) => {
  const handleClickCompany = (event: MouseEvent<HTMLDivElement>) => {
    const { target } = event;

    if (target instanceof HTMLElement) {
      const $palateItem = target.closest('.company-item');

      if ($palateItem instanceof HTMLElement) {
        const { company } = $palateItem.dataset;

        if (company && isCardCompany(company)) {
          onSelectCompany && onSelectCompany(company);
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
