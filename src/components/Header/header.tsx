'use client';

import { Saira_Stencil_One } from 'next/font/google';
import { Logo, TagHeader } from './styled';
import {
  PrimaryInput,
  PrimaryInputWSearchIcon,
} from '../Inputs/Primary/styled';
import { CartControl } from './bag/cart-control';

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
});

interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWSearchIcon placeholder="Procurando por algo específico?" />
      </div>
      <div>
        <CartControl />
      </div>
    </TagHeader>
  );
}
