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

interface IProps {
  hideHeaderMenu?: boolean;
  hideHeaderLogo?: boolean;
}

const Header: React.FC<IProps> = ({ hideHeaderMenu, hideHeaderLogo }) => {
  return (
    <>
      <HeaderWrapper>
        {!hideHeaderLogo && (
          <MainHeader>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          </MainHeader>
        )}
        {!hideHeaderMenu && <Menu menus={menus} />}
      </HeaderWrapper>
    </>
  );
};

export default Header;
