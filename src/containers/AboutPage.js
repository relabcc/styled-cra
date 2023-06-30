import React from 'react';
import { FaHandPeace } from 'react-icons/fa';
import { Box, Container, Text } from '@chakra-ui/react';

import BackgroundImage from 'components/BackgroundImage';
import Button from 'components/Button';

const AboutPage = () => {
  return (
    <Container py={{ base: 4, md: 8 }} maxW="container.lg">
      <Text fontSize={{ base: '1em', md: '1.5em' }}>About</Text>
      <BackgroundImage
        my="2em"
        src="https://loremflickr.com/1920/1080?random=1"
        ratio={16 / 9}
      />
      <Box>
        <Button rightIcon={<FaHandPeace />} href="/">
          Home
        </Button>
      </Box>
    </Container>
  );
};

export default AboutPage;
