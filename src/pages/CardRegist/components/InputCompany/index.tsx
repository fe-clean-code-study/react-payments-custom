import { Controller, useFormContext } from 'react-hook-form';

import * as S from './index.style';

import { CompanySelection, DeemBackground } from '~/components';
import { cardRegsitFormValidate } from '~/utils/cardRegistFormValidate';
import { validateHelper } from '~/utils/validateHelper';

interface InputCompanyProps {
  isOpen: boolean;
  close: () => void;
}

const InputCompany = ({ isOpen, close }: InputCompanyProps) => {
  const { control } = useFormContext();

  return (
    <S.Container>
      {isOpen && (
        <DeemBackground onClose={close}>
          <S.InputCompanyContainer>
            <Controller
              name='company'
              control={control}
              rules={{
                validate: (value) =>
                  validateHelper(cardRegsitFormValidate.company, value),
              }}
              render={({ field: { onChange } }) => (
                <CompanySelection onClick={onChange} />
              )}
            />
          </S.InputCompanyContainer>
        </DeemBackground>
      )}
    </S.Container>
  );
};

export default InputCompany;
