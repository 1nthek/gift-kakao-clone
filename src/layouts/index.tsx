import React from 'react';
import Header from './Header/header';
// import Footer from './footer';

interface IProps {
  hideHeader?: boolean;
  hideHeaderMenu?: boolean;
  hideHeaderLogo?: boolean;
  hideFooter?: boolean;
}

const Layout: React.FC<IProps> = ({
  hideHeader,
  hideHeaderMenu,
  hideHeaderLogo,
  hideFooter,
  children,
}) => {
  return (
    <>
      {!hideHeader && (
        <Header
          hideHeaderMenu={hideHeaderMenu}
          hideHeaderLogo={hideHeaderLogo}
        />
      )}
      {children}
      {/* {!hideFooter && <Footer />} */}
    </>
  );
};

Layout.defaultProps = {
  hideHeader: false,
  hideHeaderMenu: false,
  hideHeaderLogo: false,
  hideFooter: false,
};

export default Layout;
