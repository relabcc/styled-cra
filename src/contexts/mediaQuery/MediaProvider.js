import React, { createElement } from 'react';
import { MediaSensor } from 'libreact/lib/MediaSensor';

import MediaContext from './mediaContext'

import { breakpoints } from '../../components/ThemeProvider/theme';

const enhancer = breakpoints.reduce((composed, bp) => SubComp => ({ responsive, ...props }) => (
  <MediaSensor query={`(min-width: ${bp})`}>
    {({ matches }) => createElement(composed(SubComp), { ...props, responsive: [matches, ...(responsive || [])] })}
  </MediaSensor>
), SubComp => SubComp)

const MediaQuery = ({ children, responsive }) => (
  <MediaContext.Provider value={responsive}>
    {children}
  </MediaContext.Provider>
)

export default enhancer(MediaQuery);
