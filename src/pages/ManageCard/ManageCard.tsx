import { Header, CardList } from './ui';

import { Common } from '~/widgets/Common';

const ManageCard = () => {
  return (
    <Common.Root>
      <Common.Header>
        <Header />
      </Common.Header>
      <Common.Body>
        <CardList />
      </Common.Body>
    </Common.Root>
  );
};

export default ManageCard;
