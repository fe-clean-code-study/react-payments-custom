import { MouseEvent } from 'react';

import * as S from './index.style';
import { cardCompany } from '../../constants';
import { CardCompany } from '../../types';

function isCardCompany(key: string): key is keyof typeof cardCompany {
  return key in cardCompany;
}

interface CompanySelectionProps {
  isOpen: boolean;
  onClose?: () => void;
  onClick?: (company: CardCompany) => void;
}

const CompanySelection = ({
  isOpen,
  onClose,
  onClick,
}: CompanySelectionProps) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const { target } = event;

    if (target instanceof HTMLElement) {
      if (target.classList.contains('palete-background')) {
        onClose && onClose();
        return;
      }
      const $palateItem = target.closest('.palete-item');

      if ($palateItem instanceof HTMLElement) {
        const { company } = $palateItem.dataset;

        if (company) {
          onClick && onClick(company as CardCompany);
          onClose && onClose();
        }
      }
    }
  };

  return (
    isOpen && (
      <S.DeemBackground className='palete-background' onClick={handleClick}>
        <S.Container>
          {Object.entries(cardCompany).map(
            ([key, value]) =>
              isCardCompany(key) && (
                <S.PaleteItem
                  data-company={key}
                  className='palete-item'
                  key={key}
                >
                  <S.Color companey={key} />
                  <S.CompanyName>{value}</S.CompanyName>
                </S.PaleteItem>
              ),
          )}
        </S.Container>
      </S.DeemBackground>
    )
  );
};

export default CompanySelection;
