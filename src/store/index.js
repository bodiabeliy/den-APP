import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {
        name: 'Franky Line',
        id: 1,
        avatar: 'Franky Line.jpg',
        phone: '+38(067)-153-47-86'
      },
      {
        name: 'Sara Kolin',
        id: 2,
        avatar: 'Sara_Kolin.jpg',
        phone: '+38(068)-737-47-16'
      },
      {
        name: 'Roberta Kiosaki',
        id: 3,
        avatar: 'Roberta Kiosaki.jpg',
        phone: '+38(096)-668-11-89'
      },
      {
        name: 'Alex Winter',
        id: 4,
        avatar: 'Alex Winter.jpg',
        phone: '+38(067)-103-17-55'
      },
      {
        name: 'Elina Zilly',
        id: 5,
        avatar: 'Elina_Zilly.jpg',
        phone: '+38(050)-253-90-18'
      },
      {
        name: 'Alis Wood',
        id: 6,
        avatar: 'Alis Wood.jpg',
        phone: '+38(067)-153-41-86'
      },
      {
        name: 'Filimon Crazhevsky',
        id: 7,
        avatar: 'Filimon Crazhevsky.jpg',
        phone: '+38(063)-186-47-22'
      },
      {
        name: 'Maria Om',
        id: 8,
        avatar: 'Maria Om.jpg',
        phone: '+38(066)-153-00-86'
      },
      {
        name: 'Bob Karten',
        id: 9,
        avatar: 'Bob Karten.jpg',
        phone: '+38(067)-163-06-42'
      }
    ],
    news: []
  },
  mutations: {
    PERSON_DEL: (state, index) => {
      state.list.splice(index, 1)
    },
    FROM_FAVORITE: (state, index) => {
      state.news.splice(index, 1)
    },
    ADDING_NEW_CONTACT: (state, person) => {
      state.news.push(person)
    }
  },
  actions: {
    DEL ({ commit }, index) {
      commit('PERSON_DEL', index)
    },
    ADD ({ commit }, person) {
      commit('ADDING_NEW_CONTACT', person)
    },
    FROM_FAVORITE ({ commit }, index) {
      commit('FROM_FAVORITE', index)
    }
  },
  getters: {
    CONTACT_LIST (state) {
      return state.list
    },
    FAVORITE (state) {
      return state.news
    }
  },
  modules: {
  }
})
