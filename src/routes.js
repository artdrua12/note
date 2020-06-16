import VueRouter from 'vue-router'
import Notes from './components/Notes'
import ItemNote from './components/ItemNote'
import ErrorRoute from './components/ErrorRoute'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Notes
        },
        {
            path: '/itemNote/:id',
            component: ItemNote
        },
        {
            path: '*',
            component: ErrorRoute
        }
    ],
    mode: 'history'
})