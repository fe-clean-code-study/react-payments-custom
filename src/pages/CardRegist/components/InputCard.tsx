import { Controller, useFormContext } from 'react-hook-form';

import { CompanySelection } from '../../../components';

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
          <CompanySelection
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
