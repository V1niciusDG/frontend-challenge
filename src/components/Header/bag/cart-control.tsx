'use client';

import { BagIcon } from './shopping-bag';
import { ShoppingBagContainer } from './styled';

export function CartControl() {
  return (
    <ShoppingBagContainer>
      <BagIcon />
    </ShoppingBagContainer>
  );
}
