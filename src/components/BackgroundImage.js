import React from 'react';
import styled from 'styled-components';
import { Box } from "@chakra-ui/core";

const BackgroundImage = styled(Box)`
  ${(props) => props.height ? '' : `padding-top: ${props.ratio * 100}%;`}
`;

BackgroundImage.defaultProps = {
  position: 'relative',
  ratio: 1,
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
};

BackgroundImage.displayName = 'BackgroundImage';

export default ({ src, ...props }) => (
  <BackgroundImage backgroundImage={`url(${src})`} {...props} />
);
