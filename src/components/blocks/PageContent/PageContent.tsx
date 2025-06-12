import { PageContentProps } from '@components/blocks/PageContent/types/types';

export const PageContent = ({ children }: PageContentProps) => {
  return <div className="page-content__section">{children}</div>;
};
