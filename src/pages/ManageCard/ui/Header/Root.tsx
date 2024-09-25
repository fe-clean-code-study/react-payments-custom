import { ComponentProps } from 'react';

export interface RootProps extends ComponentProps<'div'> {}

const Root = ({ style, ...props }: RootProps) => {
  return (
    <div style={style} {...props}>
      보유 카드
    </div>
  );
};

export default Root;
