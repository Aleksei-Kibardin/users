<template>
  <div>
    <header>
      <nav class="nav">
        <a class="back" href="/users/#/" v-if="$route.path !== '/'">Back</a>
        <h1 class="page-name">{{ $route.name }}</h1>
        <form class="search-users">
    <input
      :value="search"
      @input="search = $event.target.value; store.commit('uploadsearchValue', search);"
      type="text"
      placeholder="Search by nickname..."
    />
  </form>
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
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { getUsers } from './api';

const search = ref("")

const store = useStore();

async function loadUsers() {
    const localUserJSON = localStorage.getItem('user-list');
    if (!localUserJSON) { 
        const usersFromApi = await getUsers();
        localStorage.setItem('user-list', JSON.stringify(usersFromApi)); 
        store.commit('uploadUsers', usersFromApi);
    } else {
        const localUser = JSON.parse(localUserJSON);
        store.commit('uploadUsers', localUser);
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
.search-users {
  width: auto;
  float: right;
  margin-right: 30px;
  @media screen and (max-width: 300px) {
    margin-right: 0px;
  }

  input {
    color: #324b4e;
    @include fluid("width", 350);
    @include fluid("height", 62);
    padding-left: 15px;
    border-radius: 42px;
    border: 2px solid #324b4e;
    background: #f9f0da;
    outline: none;
    position: relative;
    transition: 0.3s linear;
  }
  input:focus {
    @include fluid("width", 400);
  }
}
</style>
