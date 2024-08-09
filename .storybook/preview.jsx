import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/app/styles';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: theme,
    },
    defaultTheme: 'default',
    Provider: ThemeProvider,
  }),
];
