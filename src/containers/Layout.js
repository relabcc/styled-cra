import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import theme from '../components/ThemeProvider/theme';
import headerContext from '../contexts/header/context';

import Header from './Header';

const Layout = () => {
  const { hideHeader } = useContext(headerContext);
  return (
    <>
      {!hideHeader && (
        <Header
          height={theme.headerHeight}
          siteTitle="Styled Create React App"
        />
      )}
      <Box as="main" minHeight="100vh" pt={!hideHeader && theme.headerHeight}>
        <Outlet />
      </Box>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
