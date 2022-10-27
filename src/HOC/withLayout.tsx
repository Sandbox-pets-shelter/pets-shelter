import { ComponentType } from 'react'
import { useLocation } from 'react-router'
import { appRoutes } from '../configs/appRoutes'
import DefaultLayout from '../layouts/defaultLayout'

export function withLayout (WrappedComponent: ComponentType<any>): ComponentType<any> {
  return (props: any): JSX.Element => {
    const location = useLocation()

    if (location.pathname !== appRoutes.auth) {
      return (
        <DefaultLayout>
          <WrappedComponent {...props}/>
        </DefaultLayout>
      )
    }
    return <WrappedComponent {...props}/>
  }
}