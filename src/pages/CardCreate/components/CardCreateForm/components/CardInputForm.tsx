import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface CardInputFormProps extends PropsWithChildren {
  title: string;
}

const CardInputForm = ({ title, children }: CardInputFormProps) => {
  return (
    <CardInputFormLayout>
      <CardInputFormLabel>{title}</CardInputFormLabel>
      {children}
    </CardInputFormLayout>
  );
};

const CardInputFormLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CardInputFormLabel = styled.label`
  color: #525252;
  font-size: 12px;
  font-weight: 500;
`;

export default CardInputForm;
