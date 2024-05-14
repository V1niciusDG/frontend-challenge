import styled from 'styled-components';
import { SearchIcon } from './search-icon';
import { InputHTMLAttributes } from 'react';

export const PrimaryInput = styled.input`
  width: 352px;
  height: 42px;
  border-radius: 8px;
  padding: 10px, 16px;
  border: none;

  background-color: var(--input-color);

  font-family: inherit; // para herdar a fonte pai
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: var(--text-dark);
  padding-left: 16px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput {...props} />
      <SearchIcon />
    </InputContainer>
  );
}
