import { themeGet } from '@styled-system/theme-get';
import { theme } from './theme';
import { GlobalStyle } from './global.style';

const breakpoints = ['576px', '768px', '992px', '1200px'];

export const device = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`,
  xlarge: `@media screen and (min-width: ${breakpoints[3]})`,
};

export { themeGet, theme, GlobalStyle };
export * from 'styled-system';
