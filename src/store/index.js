import Vue from 'vue'
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        notesArray: JSON.parse(localStorage.getItem("notes")) ?? [],
    },

    mutations: {
        clearStorage(state) {
            localStorage.clear();
            state.notesArray.splice(0);
        },
        remove(state, payload) {
            let index = state.notesArray.findIndex(item => item.id == payload)
            state.notesArray.splice(index, 1);
        },
        create(state, payload) {
            state.notesArray.push(payload);
            localStorage.setItem("notes", JSON.stringify(state.notesArray));
        },
        update(state, payload) {
            let index = state.notesArray.findIndex(item => item.id == payload)
            state.notesArray.splice(index, 1, payload.obj);

        }
    }
})