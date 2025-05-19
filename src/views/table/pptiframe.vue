<template>
  <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        style="width: 15%;
    height: 100%;float: left;"
      >
        
        <el-menu-item v-for="(item,index) in pptList" :index="index" @click="handleClickPpt(item)">
          <el-icon><icon-menu /></el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
       
        
      </el-menu>
  <div class="pptx-container">
    <div class="pptx-toolbar">
      
      <el-button @click="prevPage" :disabled="currentPage <= 0">上一页</el-button>
      <span>{{ currentPage + 1 }} / {{ totalPage }}</span>
      <el-button @click="nextPage" :disabled="currentPage >= totalPage - 1">下一页</el-button>
      <el-button @click="toggleFullscreen">全屏</el-button>
      <el-button @click="toggleAutoPlay">{{ autoPlay ? '暂停' : '自动播放' }}</el-button>
    </div>
    <div class="pptx-viewer" ref="pptxViewerRef">
      <VueOfficePptx
        ref="pptxRef"
        :src="pptxUrl"
        v-model:page="currentPage"
        @rendered="onRendered"
        style="width: 100%; height: 540px"
        v-if="pptxUrl"
      />
      <span v-else>请选择要展示的课程。。。。</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted,onMounted } from 'vue'
import VueOfficePptx from '@vue-office/pptx'
import {
  classesLookApi,
  getClassesApi
} from "../../api/index";
import request from "../../utils/request";
import { ElMessage, ElMessageBox } from "element-plus";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
onMounted(()=>{
  getData()
})
const pptUrl = ref('http://192.168.1.150:1819/uploads/2222.pptx'); // 替换为实际的 PPT 文件 URL

const pptList = ref([])
const getData = () => {
  request
        .get(classesLookApi)
        .then((response) => {
          pptList.value = response.data
         
        })
        .catch((error) => {
          console.log("请求出错:", error);
          const { message, code } = error.response.data;
          if (code == 409) {
            ElMessage({
              message: message,
              type: "error",
            });
          } else {
            ElMessage({
              message: error.response.data,
              type: "error",
            });
          }
        });
   
};
const getppturl=(s_id:any)=>{
  request
        .get(getClassesApi+s_id)
        .then((response) => {
          console.log(response,'返回响应')
          pptxUrl.value = 'http://192.168.1.150:1819/'+response.data.file_path
        })
        .catch((error) => {
          console.log("请求出错:", error);
          const { message, code } = error.response.data;
          if (code == 409) {
            ElMessage({
              message: message,
              type: "error",
            });
          } else {
            ElMessage({
              message: error.response.data,
              type: "error",
            });
          }
        });
}
const handleClickPpt=(item:any)=>{
  getppturl(item.id)
}
const pptxUrl = ref('')
const pptxRef = ref<any>(null)
const pptxViewerRef = ref<HTMLElement | null>(null)
const totalPage = ref(1)
const currentPage = ref(0) // 0为第一页
const autoPlay = ref(false)
const interval = ref<number | null>(null)
const intervalTime = 3000

// 渲染完成后获取总页数
const onRendered = (info: any) => {
  console.log(info,'infoinfoinfoinfo')
  totalPage.value = info.slides?.length || 1
  currentPage.value = 0
}

// 上一页
const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

// 下一页
const nextPage = () => {
  if (currentPage.value < totalPage.value - 1) {
    currentPage.value++
  }
}

// 全屏
const toggleFullscreen = () => {
  const el = pptxViewerRef.value
  if (!el) return
  if (!document.fullscreenElement) {
    el.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

// 自动播放
const startAutoPlay = () => {
  stopAutoPlay()
  autoPlay.value = true
  interval.value = window.setInterval(() => {
    if (currentPage.value < totalPage.value - 1) {
      currentPage.value++
    } else {
      currentPage.value = 0
    }
  }, intervalTime)
}

const stopAutoPlay = () => {
  autoPlay.value = false
  if (interval.value) {
    clearInterval(interval.value)
    interval.value = null
  }
}

const toggleAutoPlay = () => {
  if (autoPlay.value) {
    stopAutoPlay()
  } else {
    startAutoPlay()
  }
}

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.pptx-container {
  width: 85%;
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.pptx-toolbar {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.06);
  padding: 12px 24px;
}
.pptx-toolbar span {
  font-size: 16px;
  color: #333;
  min-width: 80px;
  text-align: center;
}
.pptx-viewer {
  width: 100%;
  max-width: 1200px;
  flex: 1;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
:fullscreen .pptx-viewer {
  width: 100vw !important;
  height: 100vh !important;
  max-width: none;
  border-radius: 0;
}
</style>