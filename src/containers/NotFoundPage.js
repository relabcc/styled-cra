import { Container, Text } from '@chakra-ui/react';
import React from 'react';
import Link from 'components/Link';

const NotFoundPage = () => {
  return (
    <Container>
      <Text> Not found</Text>
      <Link to="/">Go home</Link>
    </Container>
  );
};

export default NotFoundPage;
