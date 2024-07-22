import { Controller, useFormContext } from 'react-hook-form';
import {
  Information,
  InformationBody,
  InformationHeader,
  Input,
  InputWrapper,
} from '../../../components';

const InputCardUser = () => {
  const { control } = useFormContext();

  return (
    <Information>
      <InformationHeader>카드 소유자이름(선택)</InformationHeader>
      <InformationBody>
        <InputWrapper>
          <Controller
            name='cardUser'
            rules={{ maxLength: 20 }}
            control={control}
            render={({ field: { onChange } }) => (
              <Input
                onChange={onChange}
                placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
                maxLength={20}
              />
            )}
          />
        </InputWrapper>
      </InformationBody>
    </Information>
  );
};

export default InputCardUser;
