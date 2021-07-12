import Image from 'next/image';

import { HOME_PAGE } from 'constants/page';
import LogoImage from 'assets/images/gift_logo.png';
import Anchor from 'components/Anchor';

const Logo: React.FC = () => {
  return (
    <Anchor href={HOME_PAGE}>
      <Image src={LogoImage} alt="logo" key="logo" height="24" width="66" />
    </Anchor>
  );
};

export default Logo;
