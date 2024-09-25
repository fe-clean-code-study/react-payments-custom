import { googleIcon } from '~/shared/constants';
import { GoogleIconName } from '~/shared/types';

export interface RootProps {
  name: GoogleIconName;
}

const Root = ({ name }: RootProps) => {
  return <span className='material-symbols-outlined'>{googleIcon[name]}</span>;
};

export default Root;
