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
