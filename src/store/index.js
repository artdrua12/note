import Vue from 'vue'
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        notesArray: JSON.parse(localStorage.getItem("notes")) ?? [],
    },

    mutations: {
        clearStorage(state){
            localStorage.clear();
            state.notesArray.splice(0);
        },
        remove(state, payload) {
            state.notesArray.splice(payload, 1);
        },
        create(state, payload) {
            let obj = {
                title: payload.title,
                list: payload.list,
                angle: Math.floor(Math.random() * (10 + 10)) - 10,
                color: payload.color,

            }
            state.notesArray.push(obj);
            localStorage.setItem("notes", JSON.stringify(state.notesArray));
        },
        update(state, payload) {
            state.notesArray.splice(payload.order, 1, payload.obj);

        }
    }
})