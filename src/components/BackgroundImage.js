import React, { forwardRef, useMemo } from 'react';
import styled from '@emotion/styled';
import { get, isArray } from 'lodash'

import Box from './Box'

const BackgroundImg = styled(Box)`
  ${(props) => props.height ? '' : `padding-top: ${props.ratio * 100}%;`}
  background-repeat: no-repeat;
`;

const BackgroundImage = forwardRef(({ src, ...props }, ref) => {
  const canUseWebp = get(window, 'Modernizr.webp')

  const pic = useMemo(() => {
    if (!isArray(src)) return null
    return canUseWebp ? src[0] : src[1];
  }, [canUseWebp, src])

  return <BackgroundImg src={isArray(src) ? pic : src} {...props} ref={ref} />
})

BackgroundImage.defaultProps = {
  position: 'relative',
  ratio: 1,
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
};

BackgroundImage.displayName = 'BackgroundImage';

const ReBackgroundImage = forwardRef(({ src, children, ...props }, ref) => (
  <BackgroundImage backgroundImage={`url(${src})`} {...props} ref={ref}>
    <Box.FullAbs>{children}</Box.FullAbs>
  </BackgroundImage>
));

export default ReBackgroundImage
