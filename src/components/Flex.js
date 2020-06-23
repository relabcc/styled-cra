import { flexbox } from 'styled-system';
import styled from 'styled-components';

import Box from './Box';

import asForward from './utils/asForward'

const Flex = styled(Box)`
  ${flexbox}
`;

Flex.defaultProps = {
  display: 'flex',
};

Flex.displayName = 'Flex';

export default asForward(Flex);
