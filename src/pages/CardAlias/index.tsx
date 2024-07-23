import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Card,
  Input,
  InputWrapper,
  ModalBody,
  ModalFooter,
} from '../../components';
import * as S from './index.style';
import { useSelector } from 'react-redux';
import { CardState, RootState } from '../../store';

const CardAlias = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const { id } = params;
  const targetCard = useSelector((state: RootState) => {
    return state.cards.find((card) => card.id === id) as CardState;
  });

  return (
    <>
      <ModalBody>
        <S.BodyContainer>
          <S.ContentContainer>
            <S.TextContainer>
              <S.CompleteText>카드등록이 완료되었습니다.</S.CompleteText>
            </S.TextContainer>
            <Card size='big' {...targetCard} />
            <S.InputContainer>
              <InputWrapper type='flushed'>
                <Input
                  placeholder='카드 이름을 입력해주세요.'
                  defaultValue={targetCard.cardAlias}
                />
              </InputWrapper>
            </S.InputContainer>
          </S.ContentContainer>
        </S.BodyContainer>
      </ModalBody>
      <ModalFooter>
        <S.ButtonContainer>
          <Button
            onClick={() => {
              navigate('/card-list');
            }}
          >
            확인
          </Button>
        </S.ButtonContainer>
      </ModalFooter>
    </>
  );
};

export default CardAlias;
