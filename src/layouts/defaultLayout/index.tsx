import { Header } from 'components/index';
import { Footer } from 'components/index';

import s from './styles.module.scss';
// import Loader from 'components/loader'

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

const DefaultLayout = (props: IProps): JSX.Element => {
  return (
    <div className={s.primary}>
      <Header />
      <main className={s.primary__content}>{props.children}</main>
      <Footer />
      {/*<Loader/>*/}
    </div>
  );
};

export default DefaultLayout;
