<template>
  <!-- 
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
       
        
      </el-menu> -->
<div style="display: flex;">
  <div
    class="openCom"
    style="
      z-index: 10;
      position: relative;
      height: 100%;
      overflow: auto;
      width: 240px;
      background: #ffffff;
      scrollbar-width: none; /* Firefox隐藏滚动条但保持功能 */
      -ms-overflow-style: none; /* IE/Edge隐藏滚动条 */
      min-width: 240px;
    "
  >


    <el-collapse
      v-model="activeNames"
      style="padding-left: 10px; background: #ffffff;border-top: none;"
      accordion
    >
      <el-collapse-item name="1">
        <template #title>
          <img
            class="logo mr10"
            src="/image/teicon.png"
            alt=""
            style="height: 16px; width: 16px"
          />
          <span style="color: #000; font-size: 16px;white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;">通识课ppt</span>
        </template>
        <ul class="overflowul">
          <li
            text
            bg
            style="width: 100%"
            v-for="(item, index) in pptList"
            :index="index"
            :class="selectLi==index?'teachh2overstyle selectstyle':'teachh2overstyle'"
            
            @click="handleClickPpt(item,index)"
          >
            {{ item.name }}
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>

  <div style="flex: 1;max-width: 90%;">
    <div class="" style="width: 100%; float: left">
      <PptxViewer :pptxUrl="pptxUrl2" :autoPlayInterval="5000"  v-if="isloading"/>
      <div v-else style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        请选择要展示的课程。。。。
      </div>
    </div>
    
  </div>
</div>
 
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
import { ref, onUnmounted, onMounted } from "vue";
import VueOffice from "vue-office";
import { classesLookApi, getClassesApi,getuploadstr } from "../../api/index";
import request from "../../utils/request";
import { ElMessage, ElMessageBox } from "element-plus";
import PptxViewer from "../../components/PptxViewer.vue";
const activeNames = ref(["1"]);
const pptxUrl2 = ref("http://192.168.1.150:1819/uploads/2222.pptx");
const isloading = ref(false);
onMounted(() => {
  getData();
});

const pptList = ref([]);
const getData = () => {
  request
    .get(classesLookApi)
    .then((response) => {
      pptList.value = response.data;
  selectLi.value = 0;
  getppturl( pptList.value[0].id)

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
const getppturl = (s_id: any) => {
  isloading.value = false;

  request
    .get(getClassesApi + s_id)
    .then((response) => {
      isloading.value = true;
      console.log(response, "返回响应");
      pptxUrl2.value = "http://192.168.1.150:1819/" + response.data.file_path;
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
// 模拟后台返回的 PPT（PDF）路径，需替换为实际路径
const pptPath = "http://192.168.1.150:81/uploads/2222.pptx";
const pptUrl = ref("http://192.168.1.150:81/uploads/2222.pptx"); // 替换为实际的 PPT 文件 URL
const currentPage = ref(1);
const pdfSrc = ref(`${pptPath}#page=${currentPage.value}`);
const isAutoPlaying = ref(false);
let autoPlayInterval: ReturnType<typeof setInterval> | null = null;
  const selectLi = ref()
const handleClickPpt = (item: any,index:any) => {
  selectLi.value = index;
  console.log( selectLi.value, "item");
  getppturl(item.id);
};
const handleOpenCZ = () => {
  
}
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
::v-deep .el-collapse-item__header.is-active{
  height: 74px;
}
body {
  font-family: "Inter", sans-serif;
}
.openCom {
  width: 240px;
  height: 95%;
  float: left;
  background: #ffffff;
  padding: 10px;
}
.teachh2overstyle{
          color: #000000;
          width: 100%;
    /* height: 30px; */
    line-height: 40px;
    padding: 0 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    text-overflow: ellipsis;
        }
        
.teachh2overstyle:hover{
   /* border-radius: 18px;
   background: #FFF6F6; */
  color:#BF1F1A
}
.selectstyle{
   border-radius: 18px;
   background: #FFF6F6;
  color:#BF1F1A;
  white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.openCom::-webkit-scrollbar {
  display: none; /* 隐藏WebKit浏览器的滚动条 */
}
.overflowul {
  overflow-y: auto; /* 允许垂直滚动 */
  max-height: 800px; /* 设置最大高度 */
  scrollbar-width: none; /* Firefox隐藏滚动条但保持功能 */ 
}
.overflowul::-webkit-scrollbar {
  display: none; /* 隐藏WebKit浏览器的滚动条 */ 
}
</style>
