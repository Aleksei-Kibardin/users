import { createStore } from 'vuex'


const store = createStore({
    state () {
      return {
        users: [],
        posts: [],
        photos: [],
        search: [],
        currentUser: {}
      }
    },
    mutations: {
      uploadUsers (state, newState) {
        state.users = newState
      },
      uploadPosts (state, newState) {
        state.posts = newState
      },
      uploadPhotos (state, newState) {
        state.photos = newState
      },
      uploadUser (state, newState) {
        state.currentUser = newState
      }
    }
  })

export default store;
