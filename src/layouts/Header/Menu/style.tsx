import styled from '@emotion/styled';

export const MenuWrapper = styled.ul`
  display: flex;
`;

export const MenuItemWrapper = styled.li`
  flex-grow: 1;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const MenuItem = styled.span`
  font-weight: 600;
  font-size: 15px;

  &.on {
    border-bottom: 3px solid #fcde11;
  }
`;
