import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface CardInputBoxProps extends PropsWithChildren {
  width?: string;
}

const CardInputBox = ({ width = '100%', children }: CardInputBoxProps) => {
  return <InputBox width={width}>{children}</InputBox>;
};

const InputBox = styled.div<Pick<CardInputBoxProps, 'width'>>`
  height: 49px;
  width: ${({ width }) => width};
  border-radius: 7px;
  background: #ecebf1;
`;

export default CardInputBox;
