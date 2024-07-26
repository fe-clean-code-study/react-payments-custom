import styled from '@emotion/styled';

interface KeypadItemProps {
  order: number;
}

export const KeypadContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0px;
  bottom: 0px;

  background-color: ${({ theme }) => theme.color.white};
  z-index: 3;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 90px);
`;

export const KeypadItem = styled.div<KeypadItemProps>`
  color: ${({ theme }) => theme.color.mainGreen};

  width: 100%;
  padding: 30px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  order: ${({ order }) => order};

  cursor: pointer;
`;

export const LeftEmptyItem = styled.div`
  background-color: transparent;
  border: none;
  order: 8;
`;

export const RightEmptyItem = styled.div`
  background-color: transparent;
  border: none;
  order: 12;
`;
