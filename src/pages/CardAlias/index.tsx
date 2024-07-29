import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './index.style';
import {
  Button,
  CreditCard,
  Input,
  InputWrapper,
  ModalBody,
  ModalFooter,
} from '../../components';
import { addCardName, CardState, RootState } from '../../store';

const CardAlias = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  const targetCard = useSelector((state: RootState) => {
    return state.cards.find((card) => card.id === id) as CardState;
  });
  const { cardAlias } = targetCard;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickConfirmButton = () => {
    navigate('/card-list');
    dispatch(addCardName({ id, cardAlias: inputRef.current?.value }));
  };

  return (
    <>
      <ModalBody>
        <S.BodyContainer>
          <S.ContentContainer>
            <S.TextContainer>
              <S.CompleteText>카드등록이 완료되었습니다.</S.CompleteText>
            </S.TextContainer>
            <CreditCard size='big' {...targetCard} />
            <S.InputContainer>
              <InputWrapper type='flushed'>
                <Input
                  ref={inputRef}
                  placeholder='카드 이름을 입력해주세요.'
                  defaultValue={cardAlias}
                />
              </InputWrapper>
            </S.InputContainer>
          </S.ContentContainer>
        </S.BodyContainer>
      </ModalBody>
      <ModalFooter>
        <S.ButtonContainer>
          <Button onClick={handleClickConfirmButton}>확인</Button>
        </S.ButtonContainer>
      </ModalFooter>
    </>
  );
};

export default CardAlias;
