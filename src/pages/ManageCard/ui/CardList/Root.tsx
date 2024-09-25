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
    const { target } = event;

    if (target instanceof HTMLElement) {
      const $li = target.closest('li') as HTMLLIElement;
      const $button = target.closest('button');
      const { id } = $li.dataset;

      if ($button instanceof HTMLButtonElement) {
        id && handleClickRemoveButton(id);
        return;
      }

      if ($li instanceof HTMLLIElement) {
        id && handleClickRegisteredCard(id);
      }
    }
  };

  return (
    <S.Container onClick={handleClickCardUL}>
      {cards.map((card) => (
        <S.CardContainer data-id={card.id} key={card.id}>
          <CreditCard {...card} />
          <S.DeleteButton>
            <GoogleIcon name='close' />
          </S.DeleteButton>
          <S.CardAlias>{card.alias}</S.CardAlias>
        </S.CardContainer>
      ))}
      <li>
        <AddCard size={'small'} onClick={() => navigate('/card-regist')} />
      </li>
    </S.Container>
  );
};

export default Root;
