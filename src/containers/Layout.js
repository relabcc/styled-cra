import React from 'react'
import PropTypes from 'prop-types'

import Box from '../components/Box';
import theme from '../components/ThemeProvider/theme';

import Header from './Header'

const Layout = ({ children, noHeader }) => (
  <div>
    {!noHeader && <Header height={theme.headerHeight} siteTitle="Styled Create React App" />}
    <Box minHeight="100vh" pt={!noHeader && theme.headerHeight}>
      {children}
    </Box>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
