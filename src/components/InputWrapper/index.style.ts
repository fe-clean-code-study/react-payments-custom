import styled from '@emotion/styled';

interface ContainerProps {
  type: 'fill' | 'flushed';
  isInvalidation?: boolean;
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
  border: ${({ theme, isInvalidation }) =>
    isInvalidation ? `2px solid ${theme.color.red}` : 'none'};

  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
