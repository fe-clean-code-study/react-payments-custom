import { ComponentProps, CSSProperties } from 'react';

export interface RootProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Root = ({ style, ...props }: RootProps) => {
  return (
    <div style={style} {...props}>
      보유 카드
    </div>
  );
};

export default Root;
