import { MenuWrapper, MenuItemWrapper, MenuItem } from './style';

import Anchor from 'components/Anchor';

type MenuItem = {
  title: string;
  href: string;
};

type MenuProps = {
  menus: readonly MenuItem[];
};

const Menu: React.FC<MenuProps> = ({ menus }) => {
  return (
    <MenuWrapper>
      {menus.map(({ title, href }) => (
        <Anchor href={href} key={title}>
          <MenuItemWrapper>
            <MenuItem>{title}</MenuItem>
          </MenuItemWrapper>
        </Anchor>
      ))}
    </MenuWrapper>
  );
};

export default Menu;
