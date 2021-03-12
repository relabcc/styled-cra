import styled from '@emotion/styled';

import Box from './Box';
import { containerWidth, containerPadding } from './ThemeProvider/theme';

const Container = styled(Box)``

Container.defaultProps = {
  mx: 'auto',
  px: containerPadding,
  maxWidth: containerWidth,
};

Container.displayName = 'Container';

export default Container;
