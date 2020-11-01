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
  admin: {
    id: `${scope}.buttons.admin`,
    defaultMessage: '後台',
  },
  bad: {
    id: `${scope}.buttons.bad`,
    defaultMessage: '不可點',
  },
});
