import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './InputAlias.style';

import { cardAction, CreditCard, RootState } from '~/entities/Card';
import { Button, Field } from '~/shared/ui';

const Root = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  const targetCard = useSelector((state: RootState) => {
    return state.cards.find((card) => card.id === params.id);
  });

  const handleClickButton = () => {
    dispatch(
      cardAction.addCardName({
        id: params.id,
        cardAlias: inputRef.current?.value ?? targetCard?.company,
      }),
    );
    navigate('/manage-card');
  };

  return (
    <S.BodyContainer>
      <CreditCard size='big' {...targetCard} />
      <Field.Input
        value={targetCard?.alias}
        ref={inputRef}
        styleType={'flushed'}
      />
      <S.ButtonContainer>
        <Button.Root onClick={handleClickButton}>
          <S.ButtonLabel>완료</S.ButtonLabel>
        </Button.Root>
      </S.ButtonContainer>
    </S.BodyContainer>
  );
};

export default Root;
