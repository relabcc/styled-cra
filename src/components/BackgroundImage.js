import React, { forwardRef } from 'react';
import { isArray } from 'lodash'
import { AspectRatio } from '@chakra-ui/react';

import Box from './Box'
import useWebpImage from './utils/useWebpImage';

const BGImage = ({ src, children, ...props }) => {
  const pic = useWebpImage(src)

  return (
    <Box
      backgroundImage={`url(${isArray(src) ? pic : src})`}
      {...props}
    >
      {children && (
        <Box.FullAbs>{children}</Box.FullAbs>
      )}
    </Box>
  )
}

BGImage.defaultProps = {
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
  backgroundRepet: 'no-repeat',
};

const BackgroundImage = forwardRef(({ src, children, ...props }, ref) => (
  <AspectRatio {...props} ref={ref}>
    <BGImage src={src}>{children}</BGImage>
  </AspectRatio>
));

BackgroundImage.displayName = 'BackgroundImage';

export default BackgroundImage
