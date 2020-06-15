import VueRouter from 'vue-router'
import Notes from './components/Notes'
import ItemNote from './components/ItemNote'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Notes
        },
        {
            path: '/itemNote/:order',
            component: ItemNote
        }
    ],
    mode: 'history'
})