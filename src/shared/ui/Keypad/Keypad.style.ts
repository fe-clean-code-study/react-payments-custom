import styled from '@emotion/styled';

interface RootProps {
  row?: number;
  col?: number;
}

export const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props: RootProps) => props.col}, 1fr);
  grid-template-rows: repeat(${(props: RootProps) => props.row}, 1fr);
`;

export const Item = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.color.green500};
`;
