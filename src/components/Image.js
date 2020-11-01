import React, { useMemo, forwardRef } from 'react'
import isArray from 'lodash/isArray'
import last from 'lodash/last'
import { Image } from "@chakra-ui/core";

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

const ReImage = forwardRef(({ src, alt, ...props }, ref) => {
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
      <Image as="picture"{...props}  ref={ref}>
        {pic.sources.map((s, i) => <source key={i} {...s} />)}
        <img src={pic.fallback} alt={alt} />
      </Image>
    )
  }

  return <Image src={src} alt={alt} {...props} ref={ref} />
})

ReImage.defaultProps = {
  width: '100%',
};

ReImage.displayName = 'ReImage';

export default ReImage;
