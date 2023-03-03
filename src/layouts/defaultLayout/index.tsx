import s from './styles.module.scss';

import { Header } from '../../components/index';
import { Footer } from '../../components/index';
// import Loader from '../../components/loader'

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

const DefaultLayout = (props: IProps): JSX.Element => {
  return (
    <div className={s.primary}>
      <Header />
      <div className={s.primary__content}>{props.children}</div>
      <Footer />
      {/*<Loader/>*/}
    </div>
  );
};

export default DefaultLayout;
