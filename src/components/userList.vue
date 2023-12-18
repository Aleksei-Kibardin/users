<template>
  <div class="users">
    <div
      class="user"
      v-for="t in users"
      :key="t"
      @click="handleProfileClick($event, t.id, t)"
    >
      <div class="user-avatar">
        <img class="avatar" :src="`https://github.com/Aleksei-Kibardin/users/blob/master/src/assets/${sex()}.png?raw=true`" alt="avatar" />
      </div>
      <div class="user-info_wrap">
        <div class="user-name">
          <span class="nickname">{{ t.username }}</span>
          <span class="full-name">Name: {{ t.name }}</span>
        </div>
        <div class="user-city">From: {{ t.address.city }}</div>
        <div class="user-company">Company: {{ t.company.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router"

const router = useRouter();
const store = useStore();

const users = computed(() => store.state.search);

store.commit('uploadSearch', store.state.users);

// тк пол не указывается в юзере, просто присваиваем рандомный
const sex = () => Math.floor(Math.random() * (1 - 3) + 3);

const handleProfileClick = (event, id) => {
  // чтобы не тратить время, и не обновлять обьекты, я просто передаю аватар в урле
    const currentSrc = event.currentTarget.querySelector('.avatar').currentSrc;

    router.push({ name: 'Profile', params: { id: id, sex: currentSrc} });
  };
  
console.log(store.state.search);
</script>

<style lang="scss" scoped>
@import "../css/fluid.sass";

.users {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  margin: 30px;
  @include fluid("max-width", 1250);
  @media screen and (max-width: 1189px) {
    justify-content: center;
  }
}
.user {
  padding-top: 20px;
  display: flex;
  @include fluid("width", 380);
  @include fluid("height", 230);
  border: solid 1px #30363d;
  border-radius: 20%;
}
.user-avatar {
  margin-left: 15px;
  width: 70px;
  height: 70px;
}
.user-info_wrap {
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 10px;
}
.user-name {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.nickname {
  @include fluid("font-size", 20);
}
.full-name {
  @include fluid("font-size", 13);
}
.user-city,
.user-company {
  @include fluid("margin-top", 10);
  @include fluid("font-size", 18);
}
</style>
