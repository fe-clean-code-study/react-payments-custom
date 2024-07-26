import { MouseEvent } from 'react';

import * as S from './index.style';
import { cardCompany } from '~/constants';
import { CardCompany } from '~/types';

function isCardCompany(key: string): key is keyof typeof cardCompany {
  return key in cardCompany;
}

interface CompanySelectionProps {
  onClick?: (company: CardCompany) => void;
}

const CompanySelection = ({ onClick }: CompanySelectionProps) => {
  const handleClickCompany = (event: MouseEvent<HTMLDivElement>) => {
    const { target } = event;

    if (target instanceof HTMLElement) {
      const $palateItem = target.closest('.palete-item');

      if ($palateItem instanceof HTMLElement) {
        const { company } = $palateItem.dataset;

        if (company && isCardCompany(company)) {
          onClick && onClick(company);
        }
      }
    }
  };

  return (
    <S.Container onClick={handleClickCompany}>
      {Object.entries(cardCompany).map(
        ([key, value]) =>
          isCardCompany(key) && (
            <S.PaleteItem data-company={key} className='palete-item' key={key}>
              <S.Color companey={key} />
              <S.CompanyName>{value}</S.CompanyName>
            </S.PaleteItem>
          ),
      )}
    </S.Container>
  );
};

export default CompanySelection;
