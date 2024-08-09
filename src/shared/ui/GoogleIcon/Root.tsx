import { CSSProperties } from 'react';

import { GoogleIconName } from '~/shared/types';

export interface RootProps {
  name: GoogleIconName;
  style?: CSSProperties;
}

const Root = ({ name, style }: RootProps) => {
  return (
    <span style={{ ...style }} className='material-symbols-outlined'>
      {name}
    </span>
  );
};

export default Root;
