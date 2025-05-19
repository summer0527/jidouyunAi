<template>
  <div class="ppt-viewer">
    <!-- 顶部导航栏 -->
    <header class="viewer-header">
      <div class="header-left">
        <h1 class="title">PPTX 演示文稿</h1>
      </div>
      <div
        class="header-right"
        style="display: flex; justify-content: center; align-items: center"
      >
      <el-tooltip
        class="box-item"
        effect="dark"
        content="返回"
        placement="top"
      >
      <button
          class="action-btn"
          @click="handleback"
          style="display: flex; justify-content: center; align-items: center"
        >
          <el-icon class="fa"><ArrowLeftBold /></el-icon>
        </button>
      </el-tooltip>
       
      <el-tooltip
        class="box-item"
        effect="dark"
        content="全屏"
        placement="top"
      >
        <button class="action-btn" @click="toggleFullscreen">
          <i class="fa fa-expand"></i>
        </button>
      </el-tooltip>

        <!-- <button class="action-btn" v-if="!isAutoPlaying" @click="startAutoPlay">
          自动播放
        </button>
        <button class="action-btn" v-else @click="stopAutoPlay">
          停止自动播放
        </button> -->
      </div>
    </header>

    <!-- 主要内容区 -->
    <main class="viewer-main">
      <!-- 幻灯片预览区 -->
      <div class="slide-container">
        <div v-if="loading" class="loading-overlay">
          <div class="spinner"></div>
          <p>{{ loadingMessage }}</p>
        </div>

        <div v-else-if="error" class="error-message">
          <i class="fa fa-exclamation-triangle"></i>
          <p>{{ error }}</p>
        </div>

        <div v-else class="ppt-render-area">
          <VueOfficePptx
            :src="pptxSrc"
            @ready="onPptxReady"
            @slide-change="onSlideChange"
            @error="onPptxError"
          />
        </div>
      </div>

      <!-- 幻灯片缩略图导航 -->
      <div class="thumbnails-container" style="display: none">
        <div class="thumbnails-scroll">
          <div
            v-for="(thumb, index) in slideCount"
            :key="index"
            class="thumbnail"
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)"
          >
            <div class="thumbnail-number">{{ index + 1 }}</div>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部控制栏 -->
    <footer class="viewer-footer">
      <div class="footer-left">
        <button class="control-btn" @click="goToFirstSlide">
          <i class="fa fa-step-backward"></i>
        </button>
        <button
          class="control-btn"
          @click="prevSlide"
          :disabled="currentSlide === 0"
        >
          <i class="fa fa-backward"></i>
        </button>
      </div>

      <div class="footer-middle">
        <div class="slide-progress">
          <span class="current-slide">{{ currentSlide + 1 }}</span>
          <span class="total-slides">/{{ slideCount }}</span>
        </div>
      </div>

      <div class="footer-right">
        <button
          class="control-btn"
          @click="nextSlide"
          :disabled="currentSlide === slideCount - 1"
        >
          <i class="fa fa-forward"></i>
        </button>
        <button class="control-btn" @click="goToLastSlide">
          <i class="fa fa-step-forward"></i>
        </button>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, onUnmounted } from "vue";
import VueOfficePptx from "@vue-office/pptx";

// 导入类型定义
interface PptxReadyEvent {
  totalSlides: number;
  currentSlide: number;
}

// 组件属性
const props = defineProps<{
  pptxUrl?: string; // 直接提供PPTX文件URL
  apiEndpoint?: string; // 提供API端点
  requestParams?: any; // 请求参数
  autoPlayInterval?: number; // 自动播放间隔，默认值为3000（3秒）
}>();

// 状态管理
const pptxSrc = ref<string | ArrayBuffer | null>(null);
const loading = ref(true);
const loadingMessage = ref("正在加载PPTX...");
const error = ref<string | null>(null);
const slideCount = ref(0);
const currentSlide = ref(0);
const isFullscreen = ref(false);
const isAutoPlaying = ref(false);
let autoPlayTimer: ReturnType<typeof setInterval> | null = null;
// 返回操作
const handleback = () => {
  window.history.back();
};
// 获取PPTX文件
const fetchPptxFile = async () => {
  loading.value = true;
  error.value = null;

  try {
    // 直接通过URL加载
    if (props.pptxUrl) {
      pptxSrc.value = props.pptxUrl;
      return;
    }

    // 通过API获取
    if (props.apiEndpoint) {
      loadingMessage.value = "正在从服务器获取PPTX...";

      const response = await fetch(props.apiEndpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...props.requestParams?.headers,
        },
        body: props.requestParams?.body
          ? JSON.stringify(props.requestParams.body)
          : undefined,
      });

      if (!response.ok) {
        throw new Error(`服务器返回错误: ${response.status}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      pptxSrc.value = arrayBuffer;
    }

    if (!props.pptxUrl && !props.apiEndpoint) {
      throw new Error("必须提供pptxUrl或apiEndpoint");
    }
  } catch (err: any) {
    console.error("获取PPTX失败:", err);
    error.value = err.message || "获取PPTX文件时出错";
  } finally {
    loading.value = false;
  }
};

// PPTX准备就绪回调
const onPptxReady = (event: PptxReadyEvent) => {
  slideCount.value = event.totalSlides;
  currentSlide.value = event.currentSlide;
  loading.value = false;
  // 如果设置了自动播放间隔，且未开启自动播放，开启自动播放
  if (props.autoPlayInterval && !isAutoPlaying.value) {
    startAutoPlay();
  }
};

// 幻灯片切换回调
const onSlideChange = (slideIndex: number) => {
  currentSlide.value = slideIndex;
};

// PPTX渲染错误回调
const onPptxError = (err: any) => {
  error.value = `PPTX渲染错误: ${err.message || "未知错误"}`;
  loading.value = false;
};

// 导航控制
const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

const nextSlide = () => {
  if (currentSlide.value < slideCount.value - 1) {
    currentSlide.value++;
  }
};

const goToFirstSlide = () => {
  currentSlide.value = 0;
};

const goToLastSlide = () => {
  currentSlide.value = slideCount.value - 1;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

// 全屏控制
const toggleFullscreen = () => {
  const element = document.documentElement;

  if (!document.fullscreenElement) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if ((element as any).mozRequestFullScreen) {
      // Firefox
      (element as any).mozRequestFullScreen();
    } else if ((element as any).webkitRequestFullscreen) {
      // Chrome, Safari
      (element as any).webkitRequestFullscreen();
    } else if ((element as any).msRequestFullscreen) {
      // IE/Edge
      (element as any).msRequestFullscreen();
    }
    isFullscreen.value = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
      (document as any).mozCancelFullScreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
    isFullscreen.value = false;
  }
};

// 自动播放控制
const startAutoPlay = () => {
  isAutoPlaying.value = true;
  const interval = props.autoPlayInterval || 3000;
  autoPlayTimer = setInterval(() => {
    if (currentSlide.value < slideCount.value - 1) {
      nextSlide();
    } else {
      // 循环播放
      goToSlide(0);
    }
  }, interval);
};

const stopAutoPlay = () => {
  isAutoPlaying.value = false;
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

// 监听属性变化
watch(
  [() => props.pptxUrl, () => props.apiEndpoint, () => props.requestParams],
  () => {
    fetchPptxFile();
  }
);

onMounted(() => {
  fetchPptxFile();

  // 监听全屏状态变化
  document.addEventListener("fullscreenchange", () => {
    isFullscreen.value = !!document.fullscreenElement;
  });

  document.addEventListener("webkitfullscreenchange", () => {
    isFullscreen.value = !!(document as any).webkitFullscreenElement;
  });

  document.addEventListener("mozfullscreenchange", () => {
    isFullscreen.value = !!(document as any).mozFullScreenElement;
  });

  document.addEventListener("MSFullscreenChange", () => {
    isFullscreen.value = !!(document as any).msFullscreenElement;
  });
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<style scoped>
/* 基础样式变量 */
.pptx-preview-wrapper {
  height: 100% !important;
}
:root {
  --primary-color: #2563eb;
  --secondary-color: #4f46e5;
  --accent-color: #6366f1;
  --text-color: #334155;
  --background-color: #f8fafc;
  --border-color: #e2e8f0;
  --hover-color: #e0f2fe;
  --active-color: #bae6fd;
  --error-color: #ef4444;
  --loading-color: #2563eb;
}

.ppt-viewer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: "Inter", sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  overflow: hidden;
}

/* 头部样式 */
.viewer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: white;
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.header-left .title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-color);
}

.header-right .action-btn {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
}

.header-right .action-btn:hover {
  background-color: var(--hover-color);
}

/* 主要内容区 */
.viewer-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.slide-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #f1f5f9;
  position: relative;
}

.ppt-render-area {
  width: 100%;
  height: 100%;
  /* max-width: 1280px;
  max-height: 720px; */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
}

/* 加载状态 */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.spinner {
  width: 3rem;
  height: 3rem;
  border: 4px solid rgba(37, 99, 235, 0.1);
  border-radius: 50%;
  border-top-color: var(--loading-color);
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* 错误信息 */
.error-message {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  color: var(--error-color);
}

.error-message i {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.error-message p {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
}

/* 缩略图导航 */
.thumbnails-container {
  padding: 0.75rem 1rem;
  background-color: white;
  border-top: 1px solid var(--border-color);
  overflow: hidden;
}

.thumbnails-scroll {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scrollbar-width: thin;
  scrollbar-color: var(--primary-color) var(--border-color);
}

.thumbnails-scroll::-webkit-scrollbar {
  height: 0.5rem;
}

.thumbnails-scroll::-webkit-scrollbar-track {
  background: var(--border-color);
  border-radius: 0.25rem;
}

.thumbnails-scroll::-webkit-scrollbar-thumb {
  background-color: var(--primary-color);
  border-radius: 0.25rem;
}

.thumbnail {
  width: 6rem;
  height: 4rem;
  background-color: #e2e8f0;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
  border: 2px solid transparent;
}

.thumbnail:hover {
  background-color: #cbd5e1;
}

.thumbnail.active {
  background-color: var(--active-color);
  border-color: var(--primary-color);
}

.thumbnail-number {
  font-weight: 500;
  color: var(--text-color);
}

/* 底部控制栏 */
.viewer-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: white;
  border-top: 1px solid var(--border-color);
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.05);
}

.control-btn {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
}

.control-btn:hover:not(:disabled) {
  background-color: var(--hover-color);
}

.control-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slide-progress {
  font-weight: 500;
  font-size: 1.1rem;
}

.current-slide {
  color: var(--primary-color);
}

.total-slides {
  color: #64748b;
}
</style>
