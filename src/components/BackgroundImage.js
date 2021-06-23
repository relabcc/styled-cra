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
  backgroundRepeat: 'no-repeat',
};

const BackgroundImage = forwardRef(({
  src,
  children,
  backgroundSize,
  backgroundPosition,
  ...props
}, ref) => (
  <AspectRatio {...props} ref={ref}>
    <BGImage
      src={src}
      backgroundSize={backgroundSize}
      backgroundPosition={backgroundPosition}
    >{children}</BGImage>
  </AspectRatio>
));

BackgroundImage.displayName = 'BackgroundImage';

export default BackgroundImage
