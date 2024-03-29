import React, { forwardRef } from 'react';
import isArray from 'lodash/isArray';
import { AspectRatio, Box, useMergeRefs } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

import useWebpImage from './utils/useWebpImage';

const BGImage = ({ src, children, ...props }) => {
  const pic = useWebpImage(src);

  return (
    <Box backgroundImage={`url(${isArray(src) ? pic : src})`} {...props}>
      {children && (
        <Box pos="absolute" top="0" right="0" bottom="0" left="0">
          {children}
        </Box>
      )}
    </Box>
  );
};

BGImage.defaultProps = {
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'gray.100',
};

const BackgroundImage = forwardRef(
  (
    {
      src,
      children,
      backgroundSize,
      backgroundPosition,
      backgroundColor,
      ...props
    },
    outerRef
  ) => {
    const { ref, inView } = useInView();

    return (
      <AspectRatio {...props} ref={useMergeRefs(ref, outerRef)}>
        <BGImage
          src={inView && src}
          backgroundColor={backgroundColor}
          backgroundSize={backgroundSize}
          backgroundPosition={backgroundPosition}
        >
          {children}
        </BGImage>
      </AspectRatio>
    );
  }
);

BackgroundImage.displayName = 'BackgroundImage';

export default BackgroundImage;
