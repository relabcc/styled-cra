import styled from 'styled-components';
import { space, layout, opacity } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop'

const Image = styled.img.withConfig({ shouldForwardProp })`
  ${space}
  ${layout}
  ${opacity}
`;

Image.defaultProps = {
  width: 1,
};

Image.displayName = 'Image';

export default Image;
