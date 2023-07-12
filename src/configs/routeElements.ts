import { withLayout } from 'HOC/withLayout';
import { About } from 'pages/About';
import { History } from 'pages/History';
import { Home } from 'pages/Home';
import { NoMatch } from 'pages/NoMatch';
import { Pets } from 'pages/Pets';
import { Cat } from 'pages/Pets/Cat';
import { RouteElement } from 'types/types';

import { appRoutes } from './appRoutes';

export const routeElements: RouteElement[] = [
  {
    id: 1,
    name: 'Помочь нам',
    path: appRoutes.home,
    component: withLayout(Home)
  },
  {
    id: 2,
    name: 'Питомцы',
    path: appRoutes.pets,
    component: withLayout(Pets)
  },
  {
    id: 3,
    name: 'История спасения',
    path: appRoutes.history,
    component: withLayout(History)
  },
  {
    id: 4,
    name: 'О проекте',
    path: appRoutes.aboutProject,
    component: withLayout(About)
  },
  {
    id: 5,
    path: appRoutes.concreteCat,
    component: withLayout(Cat)
  },
  {
    id: 6,
    path: appRoutes.notFound,
    component: withLayout(NoMatch)
  }
];

export const helpRoutes: RouteElement[] = [
  {
    id: 0,
    name: 'Помочь нам',
    path: appRoutes.home,
    component: withLayout(Home)
  },
  {
    id: 1,
    name: 'Стать волонтером',
    path: 'have-to-add',
    component: withLayout(Home)
  },
  {
    id: 2,
    name: 'Приютить на время',
    path: 'have-to-add',
    component: withLayout(Home)
  },
  {
    id: 3,
    name: 'Поддержать финансово',
    path: 'have-to-add',
    component: withLayout(Home)
  },
  {
    id: 4,
    name: 'Купить подарок приюту',
    path: 'have-to-add',
    component: withLayout(Home)
  }
];
export const petsRoutes: RouteElement[] = [
  {
    id: 0,
    name: 'Питомцы',
    path: appRoutes.pets,
    component: withLayout(Pets)
  },
  {
    id: 1,
    name: 'Приютить',
    path: 'have-to-add',
    component: withLayout(Pets)
  },
  {
    id: 2,
    name: 'Отдать',
    path: 'have-to-add',
    component: withLayout(Pets)
  }
];
