import arrowDown from 'assets/icons/arrow-down.svg';
import { helpRoutes, petsRoutes, routeElements } from 'configs/routeElements';
import useBreakpoints from 'hooks/useBreakpoints';
import { FC, Fragment, createRef, useEffect, useState, useLayoutEffect } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { NavLink } from 'react-router-dom';
import { RouteElement } from 'types/types';

import s from './styles.module.scss';

type MobileMenuItemProps = {
  routes: RouteElement[];
  enableSubMenu?: boolean;
};

const MobileMenuItem: FC<MobileMenuItemProps> = ({ routes, enableSubMenu }) => {
  const [isOpen, setIsOPen] = useState(false);
  const [elemHeght, setElemHeight] = useState<number>();
  const wrapperRef = createRef<HTMLUListElement>();
  const toogleButtonRef = createRef<HTMLObjectElement>();

  const toogleOpen = () => setIsOPen((prev) => !prev);

  useEffect(() => {
    wrapperRef.current && setElemHeight(wrapperRef.current.scrollHeight);
  });

  if (enableSubMenu) {
    return (
      <ul style={{ maxHeight: isOpen ? elemHeght : '2.625rem' }} ref={wrapperRef}>
        {routes.map(({ id, path, name }) => (
          <li key={id}>
            <NavLink to={path} className={({ isActive }) => (isActive ? `${s.active}` : undefined)}>
              {name}
            </NavLink>
            {!id && (
              <span onClick={toogleOpen} style={{ cursor: 'pointer' }}>
                <object
                  ref={toogleButtonRef}
                  onClick={toogleOpen}
                  id="color-change-svg"
                  data={arrowDown}
                  type="image/svg+xml"
                  style={{ transform: isOpen ? 'rotateX(180deg)' : 'none' }}
                />
              </span>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Fragment>
      {routes
        .filter((route) => !!route.name)
        .map(({ id, path, name }) => (
          <NavLink key={id} to={path} className={({ isActive }) => (isActive ? `${s.active}` : undefined)}>
            {name}
          </NavLink>
        ))}
    </Fragment>
  );
};

type MobileMenuProps = {
  isOpen: boolean;
};

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen }) => {
  const { smBreakpoint, lgBreakpoint } = useBreakpoints();
  const mobileMenuHeight = smBreakpoint ? 'fit-content' : '100vh';

  return (
    <RemoveScroll
      enabled={isOpen && !smBreakpoint}
      className={s.mobile_menu__wrapper}
      style={{ position: 'absolute', left: 0 }}
    >
      <section
        className={s.mobile_menu__content}
        style={{ height: isOpen && !lgBreakpoint ? mobileMenuHeight : '0px' }}
      >
        <MobileMenuItem enableSubMenu routes={helpRoutes} />
        <MobileMenuItem enableSubMenu routes={petsRoutes} />
        <MobileMenuItem routes={routeElements.slice(2)} />
      </section>
    </RemoveScroll>
  );
};
