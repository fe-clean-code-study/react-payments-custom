import { Controller, useFormContext } from 'react-hook-form';
import { Card, CardSelector } from '../../../components';
import { useModal } from '../../../hooks';

const InputCard = () => {
  const { control, watch } = useFormContext();
  const { isOpen, close, open } = useModal(true);

  return (
    <div>
      <Card
        numbers={watch('numbers')}
        endDate={watch('endDate')}
        cardUser={watch('cardUser')}
        company={watch('company')}
        onClick={() => {
          open();
        }}
      />
      <Controller
        name='company'
        control={control}
        render={({ field: { onChange } }) => (
          <CardSelector
            isOpen={isOpen}
            onClose={() => {
              close();
            }}
            onClick={onChange}
          />
        )}
      />
    </div>
  );
};

export default InputCard;
