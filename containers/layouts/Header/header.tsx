import { FC } from 'react';
import { StyledHeader, StyledHeaderInner } from './style';

const Header: FC = ({}) => {
  return (
    <>
      <StyledHeader>
        <StyledHeaderInner>StyledHeader</StyledHeaderInner>
      </StyledHeader>
    </>
  );
};

export default Header;
