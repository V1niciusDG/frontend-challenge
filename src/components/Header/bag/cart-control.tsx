'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { BagIcon } from './shopping-bag';
import { CartCount, ShoppingBagContainer } from './styled';

export function CartControl() {
  const { value } = useLocalStorage('cart-items', []);
  return (
    <ShoppingBagContainer>
      <BagIcon />
      {value.length && <CartCount>{value.length}</CartCount>}
    </ShoppingBagContainer>
  );
}
