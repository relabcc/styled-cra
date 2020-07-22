/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Styled Components + Styled System 超方便！',
  },
  good: {
    id: `${scope}.buttons.good`,
    defaultMessage: '範例Button',
  },
  bad: {
    id: `${scope}.buttons.bad`,
    defaultMessage: '不可點',
  },
});
