<template>
  <div class="ppt-container">
    <button 
      @click="prevPage" 
      :disabled="currentPage === 1 || isAutoPlaying"
      class="nav-btn prev-btn"
    >←</button>

    <!-- 使用模板引用绑定组件实例 -->
    <vue-office-pptx
      ref="pptxPlayerRef"
      :src="pptxBuffer"
      @rendered="handleRendered"
      :options="{ autoplay: autoplayConfig }"
      class="ppt-viewer"
    />

    <button 
      @click="nextPage" 
      :disabled="currentPage === totalPages || isAutoPlaying"
      class="nav-btn next-btn"
    >→</button>

    <div class="control-panel">
      <button @click="toggleAutoPlay" class="ctrl-btn">
        {{ isAutoPlaying ? '暂停' : '自动播放' }}
      </button>
      <span>当前页: {{ currentPage }}/{{ totalPages }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import VueOfficePptx from '@vue-office/pptx';

// 声明模板引用
const pptxPlayerRef = ref(null);
const pptxBuffer = ref<ArrayBuffer | null>(null);
const currentPage = ref(1);
const totalPages = ref(0);
const isAutoPlaying = ref(false);
const autoplayConfig = ref({ interval: 3000, loop: true });

let autoPlayTimer: NodeJS.Timeout | null = null;

const loadPPT = async () => {
  try {
    const response = await fetch('http://192.168.1.150:1819/uploads/2222.pptx');
    pptxBuffer.value = await response.arrayBuffer();
  } catch (error) {
    console.error('PPT加载失败:', error);
  }
};

const handleRendered = (ctx: any) => {
  totalPages.value = ctx.slides?.length || 0;
  currentPage.value = 1;
};

const toggleAutoPlay = () => {
  isAutoPlaying.value = !isAutoPlaying.value;
  if (isAutoPlaying.value) {
    autoPlayTimer = setInterval(nextPage, autoplayConfig.value.interval);
  } else {
    autoPlayTimer && clearInterval(autoPlayTimer);
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    pptxPlayerRef.value?.goToPage(currentPage.value);
  } else if (autoplayConfig.value.loop) {
    currentPage.value = 1;
    pptxPlayerRef.value?.goToPage(currentPage.value);
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    pptxPlayerRef.value?.goToPage(currentPage.value);
  }
};

onMounted(loadPPT);
onUnmounted(() => autoPlayTimer && clearInterval(autoPlayTimer));
</script>

<style scoped>
.ppt-container {
  position: relative;
  width: 100%;
  height: 600px;
}

.ppt-viewer {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 12px;
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  cursor: pointer;
}

.prev-btn { left: 10px; }
.next-btn { right: 10px; }

.control-panel {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
