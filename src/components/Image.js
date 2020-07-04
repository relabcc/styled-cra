import React, { useMemo } from 'react'
import styled from 'styled-components';
import { space, layout, opacity } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop'
import isArray from 'lodash/isArray'
import last from 'lodash/last'

const mimeTypes = {
  gif: 'image/gif',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  png: 'image/png',
  tiff: 'image/tiff',
  tif: 'image/tiff',
  webp: 'image/webp',
}

const base64Mime = /data:(\w+\/\w+);base64/

const Img = styled.img.withConfig({ shouldForwardProp })`
  ${space}
  ${layout}
  ${opacity}
  img {
    ${layout}
    ${space}
  }
`;

const Image = ({ src, alt, ...props }) => {
  const pic = useMemo(() => {
    if (!isArray(src)) return null
    const sources = src.map((srcset) => {
      const mime = base64Mime.exec(srcset)
      const type = mime ? mime[1] : mimeTypes[last(srcset.split('.'))]
      return {
        srcset,
        type,
      }
    })
    return {
      sources,
      fallback: last(src),
    }
  }, [src])
  if (isArray(src)) {
    return (
      <Img as="picture" {...props}>
        {pic.sources.map((s, i) => <source key={i} {...s} />)}
        <img src={pic.fallback} alt={alt} />
      </Img>
    )
  }

  return <Img src={src} alt={alt} {...props} />
}

Image.defaultProps = {
  width: 1,
};

Image.displayName = 'Image';

Image.Block = props => <Image display="block" {...props} />

export default Image;
