import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    lists: savedLists
      ? JSON.parse(savedLists)
      : [
          {
            title: 'Backlog',
            cards: [{ body: 'English' }, { body: 'Mathematics' }],
          },
          {
            title: 'Todo',
            cards: [{ body: 'Science' }],
          },
          {
            title: 'Doing',
            cards: [],
          },
        ],
  },
  getters: {},
  mutations: {
    addList(state, payload) {
      state.lists.push({ title: payload.title, cards: [] })
    },
  },
  actions: {
    addList(context, payload) {
      context.commit('addList', payload)
    },
  },
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
})

store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store
