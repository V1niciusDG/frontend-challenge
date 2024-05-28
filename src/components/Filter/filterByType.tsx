import { FilterList, FilterItems } from './styled';

export interface FilterItemProps {
  selected?: boolean;
}

export function FilterByType() {
  return (
    <FilterList>
      <FilterItems>Todos os produtos</FilterItems>
      <FilterItems>Camisetas</FilterItems>
      <FilterItems>Canecas</FilterItems>
    </FilterList>
  );
}
