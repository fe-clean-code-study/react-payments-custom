import { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as S from './CardList.style';

import { RootState, cardAction } from '~/entities/Card';
import { CreditCard } from '~/entities/Card/ui/CreditCard';
import { AddCard } from '~/features/ManageCard/ui';
import { GoogleIcon } from '~/shared/ui';

export const Root = () => {
  const cards = useSelector((state: RootState) => state.cards);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickRemoveButton = (id: string) => {
    dispatch(cardAction.removeCard({ id }));
  };

  const handleClickRegisteredCard = (id: string) => {
    navigate(`/card-alias/${id}`);
  };

  const handleClickCardUL = (event: MouseEvent<HTMLUListElement>) => {
    const { currentTarget, target } = event;

    if (currentTarget instanceof HTMLUListElement) {
      const $li = currentTarget.querySelector('li') as HTMLLIElement;
      const { id } = $li.dataset;

      if (target instanceof HTMLButtonElement) {
        id && handleClickRemoveButton(id);
      }

      if (target instanceof HTMLDivElement) {
        id && handleClickRegisteredCard(id);
      }
    }
  };

  return (
    <S.Container onClick={handleClickCardUL}>
      {cards.map((card) => (
        <li>
          <CreditCard />
          <S.DeleteButton>
            <GoogleIcon name='close' />
          </S.DeleteButton>
          <S.CardAlias>{card.alias}</S.CardAlias>
        </li>
      ))}
      <li>
        <AddCard size={'small'} onClick={() => navigate('/card-regist')} />
      </li>
    </S.Container>
  );
};

export default Root;
