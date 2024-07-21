import styled from '@emotion/styled';

interface ContainerProps {
  type: 'fill' | 'flushed';
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 5px;

  background-color: ${({ theme, type }) =>
    type === 'fill' ? theme.color.grayBackground : 'transparent'};
  border-bottom: ${({ theme, type }) =>
    type === 'flushed' ? `1px solid ${theme.color.grayBackground}` : 'none'};

  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
