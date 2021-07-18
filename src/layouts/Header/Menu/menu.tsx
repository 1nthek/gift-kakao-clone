import { MenuContainer, MenuWrapper, MenuItemWrapper, MenuItem } from './style';
import { useRouter } from 'next/router';

import Anchor from 'components/Anchor';

type MenuItem = {
  title: string;
  href: string;
  active?: boolean;
};

type MenuProps = {
  menus: readonly MenuItem[];
};

const Menu: React.FC<MenuProps> = ({ menus }) => {
  const router = useRouter();

  const { pathname } = router;
  return (
    <MenuContainer>
      <MenuWrapper>
        {menus.map(({ title, href }) => (
          <Anchor href={href} key={title} passHref>
            <MenuItemWrapper>
              <MenuItem active={pathname === href}>{title}</MenuItem>
            </MenuItemWrapper>
          </Anchor>
        ))}
      </MenuWrapper>
    </MenuContainer>
  );
};

export default Menu;
