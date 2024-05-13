import styled from 'styled-components';

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
  text-align: center;
  color: var(--text-dark);
`;
