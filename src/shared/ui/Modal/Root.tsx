import { PropsWithChildren } from 'react';

import { ModalProvider } from './context';

import { DisclosureContextProps } from '~/shared/types/ui';

export interface RootProps extends DisclosureContextProps {}

const Root = ({
  children,
  ...disclosureProps
}: PropsWithChildren<RootProps>) => {
  return <ModalProvider {...disclosureProps}>{children}</ModalProvider>;
};

export default Root;
