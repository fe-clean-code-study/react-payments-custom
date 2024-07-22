import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from 'react';
import styled from 'styled-components';

const CardInput = forwardRef(
  (
    {
      ...props
    }: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return <CardInputLayout ref={ref} {...props} />;
  }
);

const CardInputLayout = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  text-align: center;
  outline: none;
`;

export default CardInput;
