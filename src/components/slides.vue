<template>
  <div class="user-slider">
    <div class="carousel_wrap">
      <div class="carousel">
        <div class="slider" :style="styleObject">
          <div
            class="slide"
            v-for="(t, index) in filteredItems(albumId).slice(0, 5)"
            :key="index"
          >
            <img :src="t.url" alt="Slide" />
          </div>
        </div>
      </div>
      <div class="slider-nav">
        <div @click="deIncrement()" class="arrow">
          <svg
            width="38"
            height="5"
            viewBox="0 0 38 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="37.3206"
              y1="3.25"
              x2="7.32056"
              y2="3.25"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M17.3205 -3.02842e-06L17.3205 4.25L7.43094e-07 4.25L8.32056 1.75L17.3205 -3.02842e-06Z"
              fill="white"
            />
          </svg>
        </div>

        <span
          class="dot"
          v-for="(t, index) in store.state.photos.slice(0, 5)"
          :key="index"
          :class="{ active: index === activeIndex }"
          @click="activeIndex = index"
        ></span>
        <div @click="increment()" class="arrow">
          <svg
            width="38"
            height="5"
            viewBox="0 0 38 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1" x2="30" y2="1" stroke="white" stroke-width="2" />
            <path
              d="M20 4.25L20 1.51421e-06L37.3206 0L29 2.5L20 4.25Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps(['albumId'])

const activeIndex = ref(0);
const albumId = props.albumId

const styleObject = computed(() => {
  return {
    "--multiplier": activeIndex.value,
  };
});

const increment = () => {
  activeIndex.value++;
  if (activeIndex.value === 5) {
    activeIndex.value = 0;
  }
};
const deIncrement = () => {
  activeIndex.value--;
  if (activeIndex.value === -1) {
    activeIndex.value = 4;
  }
};

const filteredItems = (id) => {
  return store.state.photos.filter((item) => item.albumId === id);
};
</script>

<style lang="scss">
@import "../css/fluid.sass";
:root {
  --multiplier: 0;
}
.user-slider {
  @include fluid("padding", 40);
  @include fluid("width", 1049);
  @include fluid("margin-top", 30);
  @include fluid("margin-bottom", 60);
  border-radius: 20px;
  background-color: rgb(22, 27, 34);
  border: 1px solid #363738;
  @media screen and (max-width: 799px) and (min-width: 501px) {
    @include fluid("width", 849);
    @include fluid("height", 800);
  }
  @media screen and (max-width: 500px) {
    width: auto;
    height: auto;
  }
}
.carousel_wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.carousel {
  width: 600px;
  height: 600px;
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 1300px) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 800px) {
    @include fluid("width", 400);
    @include fluid("height", 400);
  }
}
.slider {
  width: 600px * 5;
  display: flex;
  transform: translate(calc(-600px * var(--multiplier)));
  transition: all 0.5s ease 0s;
  @media screen and (max-width: 1300px) {
    width: 400px * 5;
    transform: translate(calc(-400px * var(--multiplier)));
  }
  @media screen and (max-width: 800px) {
    width: 180px * 5;
    transform: translate(calc(-180px * var(--multiplier)));
  }
}
.slide {
  transition: transform 0.5s;
  @media screen and (max-width: 1300px) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 800px) {
    width: 180px;
    height: 180px;
  }
}

.slider-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.arrow {
  margin: 0px 10px 0 10px;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.dot.active {
  background-color: #494949;
}
</style>
