import { Header } from 'components/index';
import { Footer } from 'components/index';

import s from './styles.module.scss';

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

const WithoutMainContainerLayout = (props: IProps): JSX.Element => {
  return (
    <div>
      <div className={s.primary}>
        <Header />
      </div>
      {props.children}
      <div className={s.primary}>
      </div>
    </div>
  );
};

export default WithoutMainContainerLayout;
