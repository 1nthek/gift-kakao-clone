import styled from '@emotion/styled';

export const MenuWrapper = styled.ul`
  display: flex;
  border-bottom: 1px solid #e0e1e2;

  > a {
    flex: 1;
  }
`;

export const MenuItemWrapper = styled.li`
  flex-grow: 1;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MenuItem = styled.span`
  font-weight: 600;
  font-size: 15px;

  &.on {
    border-bottom: 3px solid #fcde11;
  }
`;
