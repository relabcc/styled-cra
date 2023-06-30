import styled from '@emotion/styled';

import Box from './Box';
import { containerWidth } from './ThemeProvider/theme';

const Container = styled(Box)``

Container.defaultProps = {
  mx: 'auto',
  maxWidth: containerWidth,
};

Container.displayName = 'Container';

export default Container;
