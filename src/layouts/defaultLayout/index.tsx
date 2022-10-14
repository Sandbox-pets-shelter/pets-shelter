import {Header} from '../../components/header'
import {Footer} from '../../components/footer'
// import Loader from '../../components/loader'

import s from './styles.module.scss'

interface IProps {
  children: JSX.Element[] | JSX.Element
}

const DefaultLayout = (props: IProps): JSX.Element => {
  return (
    <div className={s.primary}>
      <Header/>
      <div className={s.primary__content}>
        {props.children}
      </div>
      <Footer/>
      {/*<Loader/>*/}
    </div>
  )
}

export default DefaultLayout