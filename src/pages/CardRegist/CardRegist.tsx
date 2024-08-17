import { Header, Form } from './ui';

import { Common } from '~/widgets/Common';

const CardRegist = () => {
  return (
    <Common.Root>
      <Common.Header>
        <Header />
      </Common.Header>
      <Common.Body>
        <Form />
      </Common.Body>
    </Common.Root>
  );
};

export default CardRegist;
