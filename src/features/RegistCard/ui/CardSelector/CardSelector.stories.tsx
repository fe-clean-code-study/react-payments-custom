import { CardSelector, CardSelectorProps } from '.';

export default {
  title: 'features/CardSelector',
  component: CardSelector,
};

export const Root = (args: CardSelectorProps) => {
  return <CardSelector {...args} />;
};
