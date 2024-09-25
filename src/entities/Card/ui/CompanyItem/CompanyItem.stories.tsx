import { CARD_COMPANY } from '../../constants';

import { CompanyItem, CompanyItemProps } from './index';

export default {
  title: 'components/CompanyItem',
  component: CompanyItem,
  argTypes: {
    company: {
      control: 'inline-radio',
      options: [...Object.keys(CARD_COMPANY)],
    },
  },
  args: {
    company: 'SUYEON',
  },
};

export const Default = (args: CompanyItemProps) => {
  return <CompanyItem {...args} />;
};
