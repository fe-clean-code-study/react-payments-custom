import { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as S from './index.style';

import {
  Button,
  CreditCard,
  CardBody,
  CardHeader,
  GoogleIcon,
} from '~/components';
import AddCreditCard from '~/components/AddCreditCard';
import { removeCard, RootState } from '~/store';

const CardList = () => {
  const cards = useSelector((state: RootState) => state.cards);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickBackButton = () => {
    navigate('/payment');
  };

  const handleClickRemoveButton = (id: string) => {
    dispatch(removeCard({ id }));
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

  const handleClickAddCard = () => {
    navigate('/card-regist');
  };

  return (
    <>
      <CardHeader>
        <S.HeaderText>
          <GoogleIcon name='arrowBack' onClick={handleClickBackButton} />
          보유 카드
        </S.HeaderText>
      </CardHeader>
      <CardBody>
        <S.CardUl onClick={handleClickCardUL}>
          {cards.length > 0 ? (
            cards.map((card) => (
              <S.CardLi data-id={card.id} key={card.id}>
                <CreditCard {...card} />
                <S.CardNameText>{card.cardAlias}</S.CardNameText>
                <Button>삭제</Button>
              </S.CardLi>
            ))
          ) : (
            <S.NoneCardText>아직 보유중인 카드가 없어요.</S.NoneCardText>
          )}
        </S.CardUl>
        <AddCreditCard onClick={handleClickAddCard} />
      </CardBody>
    </>
  );
};

export default CardList;
