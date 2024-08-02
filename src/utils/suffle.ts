import { TupleOfLength } from '~/types';

const suffle = <T, N extends number>(
  arr: TupleOfLength<N, T>,
): TupleOfLength<N, T> => {
  const suffledArray = [...arr];

  for (let i = suffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [suffledArray[i], suffledArray[j]] = [suffledArray[j], suffledArray[i]];
  }

  return suffledArray as TupleOfLength<N, T>;
};

export default suffle;
