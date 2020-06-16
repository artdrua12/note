import Vue from 'vue'
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        notesArray: JSON.parse(localStorage.getItem("notes")) ?? [],
        show: false,
        removeId: null
    },
    mutations: {
        clearStorage(state) {
            localStorage.clear();
            state.notesArray.splice(0);
        },
        remove(state) {
            console.log('state.removeId',state.removeId);
            
            let index = state.notesArray.findIndex(item => item.id == state.removeId)
            state.notesArray.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(state.notesArray));
        },
        create(state, obj) {
            state.notesArray.push(obj);
            localStorage.setItem("notes", JSON.stringify(state.notesArray));
        },
        update(state, obj) {
            let index = state.notesArray.findIndex(item => item.id == obj.id)
            state.notesArray.splice(index, 1, obj);
            localStorage.setItem("notes", JSON.stringify(state.notesArray));
        },
        showMessange(state, id) {
            state.removeId = id;
            state.show = !state.show;
        },
    },
})