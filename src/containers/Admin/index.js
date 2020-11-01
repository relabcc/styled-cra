import React from 'react';

import Container from '../../components/Container';
import Box from '../../components/Box';
import Text from '../../components/Text';
import Link from '../../components/Link';

const AdminPage = () => (
  <Container>
    <Text.H1>
      Admin Page
    </Text.H1>
    <Box my="1em">
      <Link to="/admin/logout/">
        Logout
      </Link>
    </Box>
    <Box my="1em">
      <Link to="/">
        Home
      </Link>
    </Box>
  </Container>
);

export default AdminPage;
