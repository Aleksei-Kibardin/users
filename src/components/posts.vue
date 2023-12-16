<template>
  <div class="post" v-for="t in posts" :key="t">
    <div class="post-title">
      <h2>{{ t.title }}</h2>
      <hr />
    </div>
    <p>{{ t.body }}</p>
  </div>
</template>

<script setup>
import { onMounted, watch, ref } from "vue";
import { useStore } from "vuex";
import { getPosts } from "../api";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

let posts = ref(store.state.posts);
const id = route.params.id;

// Функция для загрузки и сохранения постов
const loadAndSavePosts = async (postId) => {
  posts.value = await getPosts(postId);
  store.commit("uploadPosts", posts.value);
};


onMounted(() => {
  loadAndSavePosts(id);
});

// Отслеживаем изменения ID
watch(
  () => route.params.id,
  (newId, oldId) => {
    if (newId !== oldId) {
      loadAndSavePosts(newId);
    }
  }
);

console.log(posts.value);
</script>

<style lang="scss">
@import "../css/fluid.sass";
.post {
  @include fluid("padding", 40);
  @include fluid("width", 549);
  @include fluid("hight", 549);
  @include fluid("margin-top", 30);
  border-radius: 20px;
  background-color: rgb(22, 27, 34);
  border: 1px solid #363738;
}
</style>
