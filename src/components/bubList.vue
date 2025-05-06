<template>
  <div class="list" style="height: 82%">
    <BubbleList :list="list" max-height="100%" min-width="700px">
      <!-- 自定义气泡内容 -->
      <template #content="{ item }">
        <span
          v-if="item.role == 'user'"
          style="
            background: rgb(240, 242, 245) !important;
            /* padding: 20px 20px; */
            border-radius: 5px;
            box-sizing: border-box;
            min-height: 50px;
            line-height: 50px;
            float: left;
          "
          >{{ item.content }}</span
        >

        <pre v-else style="line-height: 1"><code class="language-typescript">
                <Typewriter typing  :content=" item.content" />

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
            <el-icon><Download /></el-icon>导出word
            </el-button>
          </div>
        </div>
      </template>
    </BubbleList>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Bubble, Sender, Typewriter } from "vue-element-plus-x";
import { BubbleList } from "vue-element-plus-x";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();

// import { defineEmits } from 'vue';

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
const handleExport = (item: any, type: string, data: string)=>{
  console.log(item.content,'word')
 // 将 item.content 中的 \n 替换为 <br>
 const contentWithBreaks = item.content.replace(/\n/g, '<br>');
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
const blob = new Blob(['\ufeff', html], {
    type: 'application/msword'
});

// 创建下载链接
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = '导出文件.doc';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);
}
</script>
<style scoped>
.rateStyle {
  color: #409eff;
  border-color: #409eff;
  background-color: rgb(235.9, 245.3, 255);
}
.rateStyle2 {
  color: #409eff;
  border-color: #ccc;
  background-color: white;
}
</style>
