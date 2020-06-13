import React from 'react'

export default SubComp => ({ is, ...props }) => {
  if (is) {
    console.error('"is" is no longer supported, us "as" instead')
  }
  return <SubComp as={is} {...props} />
}
