<template>
  <div>
    <header>
      <nav class="nav">
        <a class="back" href="/" v-if="$route.path !== '/'">Back</a>
        <h1 class="page-name">{{ $route.name }}</h1>
        <search-users v-if="$route.path === '/'"></search-users>
      </nav>
    </header>
    <main>
      <suspense>
        <RouterView />
      </suspense>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { getUsers } from './api';
import searchUsers from './components/search.vue'

const store = useStore();

async function loadUsers() {
    const localUserJSON = localStorage.getItem('user-list');
    if (!localUserJSON) { 
        const usersFromApi = await getUsers();
        localStorage.setItem('user-list', JSON.stringify(usersFromApi)); 
        store.commit('uploadUsers', usersFromApi);
        console.log(store.state.users);
    } else {
        const localUser = JSON.parse(localUserJSON);
        store.commit('uploadUsers', localUser);
        console.log(store.state.users);
        console.log(localUser);
    }
}

onMounted(() => {
    loadUsers().catch(error => console.error('Failed to load users:', error));
});
</script>

<style lang="scss">
@import "./css/fluid.sass";

* {
  font-family: vk;
  color: #fff;
}
a {
  text-decoration: none;
}
body {
  background-color: #0d1117;
}
main {
  display: flex;
  justify-content: center;
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #24292f;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  @include fluid("font-size", 28);
}
.back {
  position: absolute;
  left: 20px;
}
</style>

<!-- Write a SPA on Vue 2+ with a simple and functional adaptive layout.
Use vuex for the global state, and vue-router for navigation.
To work with styles, use CSS.

The application should consist of 2 screens:
1) A list of users
2) A specific user's page that contains a list of albums and a list of user posts. Each album list item is a carousel with the first 5 photos from this album.
3) Add the ability to link to a specific user's page with the parameter which page to open "album list" or "list of posts"

Optionally, you can add/edit posts.

You can use any libraries.

The API for completing the task: https://jsonplaceholder.typicode.com/ -->
