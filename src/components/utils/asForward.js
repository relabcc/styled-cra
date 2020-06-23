import React from 'react'

export default SubComp => ({ as, ...props }) => {
  return <SubComp forwardedAs={as} {...props} />
}
