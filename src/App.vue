<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';

const isAvailableView = ref(false);

const detectDevice = () => {
  const userAgent = window.navigator.userAgent;
  const mobile = /Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  return mobile ? 'mobile' : 'desktop';
};

onMounted(() => {
  const device = detectDevice();

  if (device === 'mobile') {
    isAvailableView.value = true;
  }
  console.log(device);
});
</script>

<template>
  <div v-if="isAvailableView">
    <RouterView />
  </div>

  <div v-else
    class="flex items-center justify-center h-screen"
  >
    <span
      class="text-center text-xl font-bold text-gray-800"
    >
      Esta vista solo está disponible para dispositivos móviles
    </span>
  </div>

</template>

<style scoped>

</style>
