import Image from 'next/image';

import { HOME_PAGE } from 'constants/page';
import LogoImage from 'assets/images/pc_bi.png';
import Anchor from 'components/Anchor';

const Logo: React.FC = () => {
  return (
    <Anchor href={HOME_PAGE}>
      <Image src={LogoImage} alt="logo" />
    </Anchor>
  );
};

export default Logo;
