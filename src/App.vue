<script setup>
import HelloWorld from './components/HelloWorld.vue'
import srcData from '@/data.json'
import { ref, defineProps, onMounted } from 'vue';

const refSrcData = ref(srcData);

onMounted(() => {
  console.log(refSrcData.value);
  console.log(refSrcData.value.viteSvg);
})
</script>

<template>
  <div>
    deploye-v4
  </div>
  <div>
    <!-- vite svg -->
     <!-- working -->
    <a href="https://vitejs.dev" target="_blank">
      <img src="./assets/vite.svg" class="logo" alt="Vite logo" />
    </a>
     <!-- working -->
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="@/assets/vite.svg" class="logo" alt="Vite logo" />
    </a> -->
     <!-- not working -->
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img :src=refSrcData.viteSvg class="logo" alt="Vite logo" />
    </a> -->
    <!-- vue svg -->
     <!-- working -->
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
     <!-- not working -->
    <!-- <a href="https://vuejs.org/" target="_blank">
      <img :src=refSrcData.assetsVueSvg class="logo vue" alt="Vue logo" />
    </a> -->
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
