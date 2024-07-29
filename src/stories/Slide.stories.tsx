import { ThemeProvider } from '@emotion/react';

import { Slide } from '~/components';
import { SlideProps } from '~/components/Slide';
import theme from '~/styles/theme';

export default {
  title: 'components/Slide',
  component: Slide,
};

export const Default = (args: SlideProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Slide {...args}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Slide>
    </ThemeProvider>
  );
};
