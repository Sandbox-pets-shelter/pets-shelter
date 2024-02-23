import { appRoutes } from 'configs/appRoutes';
import DefaultLayout from 'layouts/defaultLayout';
import { FC } from 'react';
import { useLocation } from 'react-router';

export function withLayout<Props>(WrappedComponent: FC<Props>) {
  return (props: JSX.IntrinsicAttributes & Props) => {
    const location = useLocation();

    if (location.pathname !== appRoutes.auth) {
      return (
        <DefaultLayout>
          <WrappedComponent {...props} />
        </DefaultLayout>
      );
    }
    return <WrappedComponent {...props} />;
  };
}
