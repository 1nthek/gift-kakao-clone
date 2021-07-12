import React from 'react';
import Header from './Header/header';
// import Footer from './footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* {!hideFooter && <Footer />} */}
    </>
  );
};

Layout.defaultProps = {
  hideFooter: false,
};

export default Layout;
