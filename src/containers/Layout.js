import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Box from '../components/Box';
import theme from '../components/ThemeProvider/theme';
import headerContext from '../contexts/header/context'

import Header from './Header'

const Layout = ({ children }) => {
  const { hideHeader } = useContext(headerContext)
  return (
    <>
      {!hideHeader && <Header height={theme.headerHeight} siteTitle="Styled Create React App" />}
      <Box minHeight="100vh" pt={!hideHeader && theme.headerHeight}>
        {children}
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
