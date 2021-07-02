import { StyledHeaderWrapper, StyledHeader, StyledLogoWrapper } from './style';
import Logo from '~/components/Logo';

const Header: React.FC = ({}) => {
  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <StyledLogoWrapper>
          <Logo />
        </StyledLogoWrapper>
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

export default Header;
