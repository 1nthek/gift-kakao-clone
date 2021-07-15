import { HOME_PAGE } from 'constants/page';
import LogoImage from 'assets/images/gift_logo.png';
import Anchor from 'components/Anchor';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Anchor href={HOME_PAGE}>
      <Image src={LogoImage} alt="logo" />
    </Anchor>
  );
};

export default Logo;
