import { appRoutes } from './appRoutes'
import { withLayout } from '../HOC/withLayout'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { History } from '../pages/History'
import { Pets } from '../pages/Pets'

export const routeElements = [
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
    }
]