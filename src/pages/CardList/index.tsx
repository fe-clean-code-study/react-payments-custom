import { useSelector } from 'react-redux';
import { Card, ModalBody, ModalHeader } from '../../components';
import * as S from './index.style';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';

const CardList = () => {
  const cards = useSelector((state: RootState) => state.cards);
  const navigate = useNavigate();

  return (
    <>
      <ModalHeader>
        <S.HeaderText>보유 카드</S.HeaderText>
      </ModalHeader>
      <ModalBody>
        <S.CardUl>
          {cards.length > 0 ? (
            cards.map((card) => <Card {...card} />)
          ) : (
            <S.NoneCardText>아직 보유중인 카드가 없어요.</S.NoneCardText>
          )}
        </S.CardUl>
        <Card
          type='empty'
          clickable={true}
          onClick={() => navigate('/card-regist')}
        />
      </ModalBody>
    </>
  );
};

export default CardList;
