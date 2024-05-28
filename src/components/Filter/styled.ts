import styled from 'styled-components';
import { FilterItemProps } from './filterByType';

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const FilterItems = styled.li<FilterItemProps>`
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;

  color: var(--text-dark);

  border-bottom: ${(props) =>
    props.selected ? '4px solid var(--orange-low)' : ''};
`;
