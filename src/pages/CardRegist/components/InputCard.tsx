import { Controller, useFormContext } from 'react-hook-form';
import { CardSelector } from '../../../components';

interface InputCardProps {
  isOpen: boolean;
  close: () => void;
}

const InputCard = ({ isOpen, close }: InputCardProps) => {
  const { control } = useFormContext();

  return (
    <div>
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
