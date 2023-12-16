<template>
  <user-slider
    v-for="albumId in uniqueAlbumIds"
    :key="albumId"
    :albumId="albumId"
  />
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import userSlider from "./slides.vue";
import { getPhotos } from "../api";

const store = useStore();
const photos = ref([]);

async function loadPhotos() {
  try {
    const photosFromApi = await getPhotos();
    store.commit('uploadPhotos', photosFromApi);
    localStorage.setItem('photo-list', JSON.stringify(photosFromApi));
    photos.value = photosFromApi;
  } catch (error) {
    console.error('Failed to load photos:', error);
  }
}

onMounted(async () => {
  const storedPhotos = localStorage.getItem('photo-list');
  if (storedPhotos) {
    const photosArray = storedPhotos;

    const freshPhotos = await getPhotos();

    // Проверяем, нужно ли обновить фото 
    if (JSON.stringify(photosArray) !== JSON.stringify(freshPhotos)) {
      loadPhotos();
    } else {
      photos.value = photosArray;
      store.commit('uploadPhotos', photosArray);
    }
  } else {
    loadPhotos();
  }
});

const uniqueAlbumIds = computed(() => {
  return Array.from(new Set(photos.value.map((item) => item.albumId)));
});
</script>

<style></style>
