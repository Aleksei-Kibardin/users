import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      searchValue: '',
      users: [],
      posts: [],
      photos: [],
      currentUser: {},
      oldId: null
    };
  },
  mutations: {
    uploadUsers(state, newState) {
      state.users = newState;
    },
    uploadPosts(state, newState) {
      state.posts = newState;
    },
    uploadPhotos(state, newState) {
      state.photos = newState;
    },
    uploadUser(state, newState) {
      state.currentUser = newState;
    },
    uploadsearchValue(state, newState) {
      state.searchValue = newState;
    },
  },
  actions: {
    async addPost({ commit, state }, newPost) {
      const updatedPosts = [...state.posts, newPost];
      commit("uploadPosts", updatedPosts);
    },
    async editPost({ commit, state }, updatedPost) {
      const updatedPosts = state.posts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      );
      commit("uploadPosts", updatedPosts);
    },
  },
});

export default store;
