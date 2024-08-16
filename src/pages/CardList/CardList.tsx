import { RegistedCards, AddCard, Header } from './ui';

import { Common } from '~/widgets/Common';

const CardList = () => {
  return (
    <Common.Root>
      <Common.Header>
        <Header />
      </Common.Header>
      <Common.Content>
        <RegistedCards />
        <AddCard />
      </Common.Content>
    </Common.Root>
  );
};

export default CardList;
