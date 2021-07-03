import { HeaderWrapper, MainHeader, LogoWrapper } from './style';
import Logo from 'components/Logo';
import Menu from './Menu/menu';
import {
  HOME_PAGE,
  RECOMMEND_PAGE,
  BEST_PAGE,
  BRAND_PAGE,
  GIFTBOX_PAGE,
} from 'constants/page';

const menus = [
  {
    title: '홈',
    href: HOME_PAGE,
  },
  {
    title: '추천',
    href: RECOMMEND_PAGE,
  },
  {
    title: '베스트',
    href: BEST_PAGE,
  },
  {
    title: '브랜드',
    href: BRAND_PAGE,
  },
  {
    title: '선물함',
    href: GIFTBOX_PAGE,
  },
];

const Header: React.FC = () => {
  return (
    <>
      <HeaderWrapper>
        <MainHeader>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </MainHeader>
        <Menu menus={menus}></Menu>
      </HeaderWrapper>
    </>
  );
};

export default Header;
