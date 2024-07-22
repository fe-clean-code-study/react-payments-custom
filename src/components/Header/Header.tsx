import styled from 'styled-components';
import { ArrowButton } from '../ArrowButton';
import { MouseEventHandler, PropsWithChildren } from 'react';

interface HeaderProps extends PropsWithChildren {
  showBackButton?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Header = ({ showBackButton = true, children, onClick }: HeaderProps) => {
  return (
    <HeaderLayout>
      {showBackButton && (
        <HeaderBackButton onClick={onClick} direction='left' />
      )}
      <HeaderTitle>{children}</HeaderTitle>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`;

const HeaderBackButton = styled(ArrowButton)`
  width: 10px;
`;

const HeaderTitle = styled.h1`
  color: #383838;
  font-size: 16px;
  font-weight: 500;
`;

export default Header;
