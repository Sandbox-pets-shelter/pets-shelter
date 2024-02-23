import { appRoutes } from 'configs/appRoutes';
import WithoutMainContainerLayout from 'layouts/withoutMainContainer';
import { FC } from 'react';
import { useLocation } from 'react-router';

export function withoutLayout<Props>(WrappedComponent: FC<Props>) {
  return (props: JSX.IntrinsicAttributes & Props) => {
    const location = useLocation();

    if (location.pathname !== appRoutes.auth) {
      return (
        <WithoutMainContainerLayout>
          <WrappedComponent {...props} />
        </WithoutMainContainerLayout>
      );
    }
    return <WrappedComponent {...props} />;
  };
}
