import { HOME_PAGE } from 'constants/page';
import LogoImage from 'assets/images/gift_logo.png';
import Anchor from 'components/Anchor';

const Logo: React.FC = () => {
  return (
    <Anchor href={HOME_PAGE}>
      <img src={LogoImage} alt="logo" />
    </Anchor>
  );
};

export default Logo;
