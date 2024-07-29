import { ThemeProvider } from '@emotion/react';

import { DeemBackground, Card } from '~/components';
import { CardBody, CardFooter, CardHeader, CardProps } from '~/components/Card';
import theme from '~/styles/theme';

export default {
  title: 'components/Card',
  component: Card,
};

export const Default = (args: CardProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Card {...args}>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </ThemeProvider>
  );
};

export const WithDeemBackground = (args: CardProps) => {
  return (
    <ThemeProvider theme={theme}>
      <DeemBackground>
        <Card {...args}>
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </DeemBackground>
    </ThemeProvider>
  );
};
