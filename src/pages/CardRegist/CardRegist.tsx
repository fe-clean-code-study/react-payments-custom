import { Header, CardRegistForm } from './ui';

import { Common } from '~/widgets/Common';

const CardRegist = () => {
  return (
    <Common.Root>
      <Common.Header>
        <Header />
      </Common.Header>
      <Common.Body>
        <CardRegistForm />
      </Common.Body>
    </Common.Root>
  );
};

export default CardRegist;
