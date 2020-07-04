import React, { forwardRef } from 'react'

export default SubComp => forwardRef(({ is, ...props }, ref) => {
  if (is) {
    console.error('"is" is no longer supported, us "as" instead')
  }
  return <SubComp as={is} ref={ref} {...props} />
})
