import { Controller, useFormContext } from 'react-hook-form';

import TitleText from '../TitleText';

import { Card, CardBody, CardHeader, Input, InputWrapper } from '~/components';

const InputCardUser = () => {
  const { control } = useFormContext();

  return (
    <Card>
      <CardHeader>
        <TitleText label={'카드 사용자 이름(선택, 최대 20자)'} />
      </CardHeader>
      <CardBody>
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
      </CardBody>
    </Card>
  );
};

export default InputCardUser;
