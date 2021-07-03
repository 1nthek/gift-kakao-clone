import { MenuWrapper, MenuItemWrapper, MenuItem } from './style';

import Anchor from 'components/Anchor';

type MenuProps = {
  menus: { title: string; href: string }[];
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
