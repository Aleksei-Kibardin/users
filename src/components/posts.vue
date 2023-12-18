<template>
  <div>
    <div
    class="add"
    @click="
            stateEdit.active = true;
            stateEdit.status = 'Add';
            editPost(stateEdit.id, title, body);
          "
    >Add post</div>
    <div
      v-show="stateEdit.active === false"
      class="post"
      v-for="t in posts"
      :key="t"
    >
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="edit-post"
        @click="
          stateEdit.active = true;
          stateEdit.status = 'Edit';
          stateEdit.id = t.id;
        "
      >
        <path
          d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"
          style="fill: #fff"
        ></path>
      </svg>
      <div class="post-title">
        <h2>{{ t.title }}</h2>
        <hr />
      </div>
      <p>{{ t.body }}</p>
    </div>
    <div>
      <!-- Форма для добавления/редактирования постов -->
    </div>
    <form v-show="stateEdit.active === true" class="edit-posts">
      <h3>{{ stateEdit.status }}: post</h3>
      <label>Title:</label>
      <input class="edit-post-titile" v-model="title" required />

      <label>Text:</label>
      <textarea class="edit-post-body" v-model="body" required></textarea>
      <div class="edit-post-btn">
        <div
          @click="
            stateEdit.active = false;
            stateEdit.status = '';
          "
        >
          back
        </div>
        <div v-if="stateEdit.status === 'Add' "
          class="edit-post-save"
          @click="
            stateEdit.active = false;
            stateEdit.status = '';
            addPost(title, body);
            title = null;
            body = null;
          "
        > add
        </div>
        <div v-if="stateEdit.status === 'Edit' "
          class="edit-post-save"
          @click="
            stateEdit.active = false;
            stateEdit.status = '';
            editPost(stateEdit.id, title, body);
            title = null;
            body = null;
          "
        >
          save
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import {  ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const id = route.params.id;
const posts = computed(() => store.state.posts);
const title = ref();
const body = ref();
const stateEdit = ref({
  id: null,
  active: false,
  status: "",
});


const addPost = async (t, b) => {
  const newPost = {
    userId: +route.params.id,
    id: posts.value.length ,
    title: `${t}`,
    body: `${b}`,
  };
  store.state.oldId = id
  await store.dispatch("addPost", newPost);
  posts.value = store.state.posts;
  console.log(store.state.posts);
};

const editPost = async (postId, t, b) => {
  const updatedPost = {
    userId: route.params.id,
    id: postId,
    title: `${t}`,
    body: `${b}`,
  };
  store.state.oldId = id
  await store.dispatch("editPost", updatedPost);
  posts.value = store.state.posts;
  console.log(store.state.posts);
};

console.log(posts.value);
</script>

<style lang="scss">
@import "../css/fluid.sass";
.post {
  display: flex;
  flex-direction: column;
  @include fluid("padding", 40);
  @include fluid("width", 549);
  @include fluid("hight", 549);
  @include fluid("margin-top", 30);
  border-radius: 20px;
  background-color: rgb(22, 27, 34);
  border: 1px solid #363738;
}
.edit-post {
  align-self: flex-end;
}
.edit-posts {
  display: flex;
  flex-direction: column;
  @include fluid("padding", 40);
  @include fluid("width", 549);
  @include fluid("hight", 549);
  @include fluid("margin-top", 30);
  gap: 10px;
  border-radius: 20px;
  background-color: rgb(22, 27, 34);
  border: 1px solid #363738;
}
.edit-post-body,
.edit-post-titile {
  background-color: rgb(22, 27, 34);
  border: 1px solid #363738;
}
.edit-post-body {
  resize: none;
  @include fluid("width", 469);
  @include fluid("hight", 249);
}
.edit-post-btn {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.add{
  text-align: center;
}
</style>
