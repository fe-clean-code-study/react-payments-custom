import { MouseEvent } from 'react';
import { useFormContext } from 'react-hook-form';

import { CreditCard } from '~/entities/Card';

export interface RootProps {
  onClick: (event?: MouseEvent<HTMLDivElement>) => void;
}

const Root = ({ onClick }: RootProps) => {
  const { watch } = useFormContext();

  return <CreditCard {...watch()} onClick={onClick} />;
};

export default Root;
