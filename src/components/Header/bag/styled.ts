import styled from 'styled-components';

export const ShoppingBag = styled.div`
  svg {
    padding-right: 160px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ShoppingBagContainer = styled.div`
  padding-right: 160px;
  position: relative svg {
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const CartCount = styled.span`
  width: 17px;
  height: 26px;

  background-color: var(--delete-color);
  color: white;

  position: absolute;
  right: -10;
  top: 50%;
`;
