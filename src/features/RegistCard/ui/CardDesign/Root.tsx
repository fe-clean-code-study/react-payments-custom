import { MouseEvent } from 'react';
import { useFormContext } from 'react-hook-form';

import { CreditCard } from '~/entities/Card';

export interface RootProps {
  onClick: (event?: MouseEvent<HTMLDivElement>) => void;
}

const Root = ({ onClick }: RootProps) => {
  const { getValues } = useFormContext();

  return <CreditCard {...getValues()} onClick={onClick} />;
};

export default Root;
