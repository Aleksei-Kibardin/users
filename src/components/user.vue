<template>
  <div class="user">
    <div class="user-head">
      <div class="avatar">
        <img :src="`${$route.params.sex}`" alt="avatar" />
      </div>
      <div class="user-info_wrap">
        <div class="user-name">
          <div class="nickname">{{ userId.username }}</div>
          <div class="full-name">Name: {{ userId .name }}</div>
        </div>
        <div class="user-city">From: {{ userId.address.city }}</div>
        <div class="user-company">Company: {{ userId.company.name }}</div>
      </div>
      <div class="user-info_wrap contact">
        <div class="user-website">Website: {{ userId.website }}</div>
        <div class="user-phone">Phone: {{ userId.phone }}</div>
        <div class="user-email">Email: {{ userId.email }}</div>
      </div>
    </div>
    <nav class="page-content">
      <div :class="{ active: $route.name === 'Albums' }" @click="$router.push({ name: 'Albums', params: { } })">Albums</div>
      <div :class="{ active: $route.name === 'Posts' }" @click="$router.push({ name: 'Posts', params: { } })">Posts</div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute  } from "vue-router";

const store = useStore();
const route = useRoute();

const userId = computed(() => {
  const id = route.params.id;
  return store.state.users.find(item => item.id === +id);
});

store.commit("uploadUser", userId);


</script>

<style lang="scss" scoped>
@import "../css/fluid.sass";
.user {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  height: auto;
  margin-top: 60px;
  width: 100%;
  max-width: 1400px;
  flex-direction: column;
  align-items: center;
  border: none;
  @media screen and (max-width: 1189px) {
    justify-content: center;
  }
}
.user-head {
  @include fluid("padding", 40);
  @include fluid("gap", 10);
  display: flex;
  background-color: rgb(22, 27, 34);
  border-radius: 20px 20px 65px 65px;
  border: 1px solid #363738;
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
}
.avatar {
  @include fluid("width", 300);
  @include fluid("height", 300);
  @media screen and (max-width: 400px) {
    margin: auto;
  }
}

.nickname {
  @include fluid("font-size", 50);
  @include fluid("margin-bottom", 20);
  @media screen and (max-width: 406px) {
    @include fluid("font-size", 50);
  }
}
.full-name {
  @include fluid("font-size", 23);
}

.user-email,
.user-city,
.user-company,
.user-website,
.user-phone {
  margin-top: 10px;
  @include fluid("font-size", 25);
}

.contact{
  @include fluid("margin-top", 80);
}
.page-content{
  display: flex;
  justify-content: center;
  align-items: center;
  @include fluid("gap", 50);
  @include fluid("width", 300);
  @include fluid("height", 50);
  background-color: #24292f;
  border-radius: 20px;
  color: #97999b;
  @include fluid("font-size", 20);
}
.active{
  color: #97999b;
}
</style>
