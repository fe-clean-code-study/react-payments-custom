import { Header, InputAlias } from './ui';

import { Common } from '~/widgets/Common';

const CardAlias = () => {
  return (
    <Common.Root>
      <Common.Header>
        <Header />
      </Common.Header>
      <Common.Body>
        <InputAlias />
      </Common.Body>
    </Common.Root>
  );
};

export default CardAlias;
