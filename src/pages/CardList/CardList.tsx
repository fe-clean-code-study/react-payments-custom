import { RegistedCards, AddCard, Header } from './ui';

import { Common } from '~/widgets/Common';

const CardList = () => {
  return (
    <Common.Root>
      <Common.Header>
        <Header />
      </Common.Header>
      <Common.Body>
        <RegistedCards />
        <AddCard />
      </Common.Body>
    </Common.Root>
  );
};

export default CardList;
