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
  border-radius: 100%;
  padding: 0px 5px;
  font-size: 10px;

  background-color: var(--delete-color);
  color: white;

  margin-left: -10px;
`;
