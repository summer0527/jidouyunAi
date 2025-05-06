<template>
   <vue-office :file-url="pptUrl" :file-type="'ppt'"></vue-office>
  <div class="bg-gray-100 p-8">
    <div class="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">PPT 播放器</h1>
      <div id="pdf-container" class="w-full h-80vh border border-gray-300 rounded-md overflow-hidden" style="height:700px">
        <iframe :src="pdfSrc" width="100%" height="100%" frameborder="0"></iframe>
      </div>
      <div class="flex justify-between mt-4">
        <button
          id="prev-slide"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all duration-200 hover:scale-105"
          @click="prevSlide"
        >
          <i class="fa-solid fa-arrow-left"></i> 上一页
        </button>
        <button
          id="toggle-auto-play"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-all duration-200 hover:scale-105"
          @click="toggleAutoPlay"
        >
          {{ isAutoPlaying ? '停止自动播放' : '开始自动播放' }}
        </button>
        <button
          id="next-slide"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all duration-200 hover:scale-105"
          @click="nextSlide"
        >
          下一页 <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted } from 'vue';
import VueOffice from 'vue-office';

// 模拟后台返回的 PPT（PDF）路径，需替换为实际路径
const pptPath = 'https://kdocs.cn/l/cosPhhS23qZ3';
const pptUrl = ref('https://kdocs.cn/l/cosPhhS23qZ3'); // 替换为实际的 PPT 文件 URL
const currentPage = ref(1);
const pdfSrc = ref(`${pptPath}#page=${currentPage.value}`);
const isAutoPlaying = ref(false);
let autoPlayInterval: ReturnType<typeof setInterval> | null = null;

const prevSlide = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    pdfSrc.value = `${pptPath}#page=${currentPage.value}`;
  }
};

const nextSlide = () => {
  currentPage.value++;
  pdfSrc.value = `${pptPath}#page=${currentPage.value}`;
};

const toggleAutoPlay = () => {
  if (isAutoPlaying.value) {
    // 停止自动播放
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  } else {
    // 开始自动播放
    autoPlayInterval = setInterval(() => {
      nextSlide();
    }, 5000); // 每 5 秒切换一页，可根据需求调整
  }
  isAutoPlaying.value = !isAutoPlaying.value;
};

// 组件卸载时清除定时器
onUnmounted(() => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
  }
});
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>    