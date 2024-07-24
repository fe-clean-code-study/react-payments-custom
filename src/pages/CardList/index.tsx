import { useSelector } from 'react-redux';
import {
  Button,
  Card,
  ModalBody,
  ModalHeader,
  PrevIcon,
} from '../../components';
import * as S from './index.style';
import { removeCard, RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const CardList = () => {
  const cards = useSelector((state: RootState) => state.cards);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <ModalHeader>
        <S.HeaderText>
          <PrevIcon onClick={() => navigate('/payment')} />
          보유 카드
        </S.HeaderText>
      </ModalHeader>
      <ModalBody>
        <S.CardUl>
          {cards.length > 0 ? (
            cards.map((card) => (
              <S.CardLi key={card.id}>
                <div onClick={() => navigate(`/card-alias/${card.id}`)}>
                  <Card {...card} />
                </div>
                <S.CardNameText>{card.cardAlias}</S.CardNameText>
                <S.ButtonContainer>
                  <Button onClick={() => dispatch(removeCard({ id: card.id }))}>
                    삭제
                  </Button>
                </S.ButtonContainer>
              </S.CardLi>
            ))
          ) : (
            <S.NoneCardText>아직 보유중인 카드가 없어요.</S.NoneCardText>
          )}
        </S.CardUl>
        <Card clickable={true} onClick={() => navigate('/card-regist')} />
      </ModalBody>
    </>
  );
};

export default CardList;
