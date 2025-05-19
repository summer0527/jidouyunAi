<template>
  <div class="list" style="height: 82%;padding: 20px;">
    <BubbleList :list="list" max-height="100%" min-width="700px" @handleEd='handleEd'>
      <!-- 自定义气泡内容 -->
      <template #content="{ item }">
        <span
          v-if="item.role == 'user'"
          style="
           
            /* padding: 20px 20px; */
            border-radius: 5px;
            box-sizing: border-box;
            min-height: 50px;
            line-height: 50px;
            float: left;
            font-size: 16px;
          "
          >{{ item.content }}</span
        >

        <pre
          v-else-if="item.role != 'user' && item.isHistory"
          style="
            line-height: 1;
            white-space: pre-line;
          width: 900px !important;
            font-size: 16px;
          "
        ><code class="language-typescript">
          <Typewriter    :content=" item.content"  :is-markdown="true"/>

                </code></pre>

        <pre
          v-else
          style="
            line-height: 1;
            white-space: pre-line;
          width: 900px !important;
           
            font-size: 16px;
          "
        ><code class="language-typescript">
<Typewriter  ref="typerRef" typing  :content=" item.content"  :is-markdown="true"/>

                </code></pre>
      </template>
      <!-- 自定义底部 -->
      <template #footer="{ item }">
        <div class="footer-wrapper" v-if="item.israte">
          <div class="footer-container">
            <el-button
              @click="handleRateCom(item, 'like', item.content)"
              :class="item.rate == 'like' ? 'rateStyle' : 'rateStyle2'"
            >
              <i class="fa-solid fa-thumbs-up"></i> 点赞
            </el-button>

            <el-button
              @click="handleRateCom(item, 'dislike', item.content)"
              :class="item.rate == 'dislike' ? 'rateStyle' : 'rateStyle2'"
            >
              <i class="fa-solid fa-thumbs-down"></i> 点踩
            </el-button>
            <el-button
              @click="handleExport(item, 'export', item.content)"
              :class="item.rate == 'export' ? 'rateStyle' : 'rateStyle2'"
            >
            <img
              class="logo mr10"
              src="/image/word.png"
              alt=""
              style="height: 16px; width: 16px"
            />
              <!-- <el-icon><Download /></el-icon> -->
              导出word
            </el-button>
          </div>
        </div>
      </template>
    </BubbleList>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Bubble, Sender,Typewriter} from "vue-element-plus-x";
import { BubbleList } from "vue-element-plus-x";
// import Typewriter from 'vue-element-plus-x/dist/es/Typewriter/index.js'
// import { usePrism } from 'vue-element-plus-x/src/hooks/usePrism.js'
// import AppConfig from 'vue-element-plus-x/src/components/AppConfig/index.vue'
// 这里可以引入 Prism 的核心样式，也可以自己引入其他第三方主题样式
// import 'vue-element-plus-x/dist/styles/prism.min.css'
import 'vue-element-plus-x/styles/prism.min.css'
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const typerRef = ref()
// import { defineEmits } from 'vue';
const handleEd=()=>{
  typerRef.value.interrupt()
}
const emit = defineEmits(["handleRate"]);
const props = defineProps({
  list: {
    type: Object,
    required: true,
  },
});
const handleRateCom = (item: object, type: string, data: string) => {
  const dataS: object = {
    item: item,
    type: type,
    data: data,
  };
  emit("handleRate", dataS);
};
const handleExport = (item: any, type: string, data: string) => {
  console.log(item.content, "word");
  // 将 item.content 中的 \n 替换为 <br>
  const contentWithBreaks = item.content.replace(/\n/g, "<br>");
  // 创建Word文档的HTML内容
  const html = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office'
          xmlns:w='urn:schemas-microsoft-com:office:word'
          xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
        <meta charset='UTF-8'>
        <title>Document</title>
       
    </head>
    <body>
        <p>${contentWithBreaks}</p>
    </body>
    </html>
`;

  // 创建Blob对象
  const blob = new Blob(["\ufeff", html], {
    type: "application/msword",
  });

  // 创建下载链接
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "导出文件.doc";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
</script>
<style scoped>
.rateStyle {
  color: #BF1F1A;
  border-color: #E20112;
  background-color: #FFF6F6;
}
.rateStyle2 {
  color: #BF1F1A;
  border-color: #E20112;
  background-color: white;
}
</style>
