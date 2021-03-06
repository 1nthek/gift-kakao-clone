import styled from '@emotion/styled';

export const MenuContainer = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #e0e1e2;
`;

export const MenuWrapper = styled.ul`
  display: flex;
  max-width: ${(props) => props.theme.maxWidth.main};
  width: 100%;

  > a {
    flex: 1;
  }
`;

export const MenuItemWrapper = styled.li`
  flex-grow: 1;
  height: 41px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MenuItem = styled.span<any>`
  font-weight: 600;
  font-size: 15px;
  height: 100%;
  align-items: center;
  display: flex;
  padding: 0 6px;
  border-bottom: ${(props) =>
    props.active ? '3px solid #fcde11' : '3px solid transparent'};
`;
