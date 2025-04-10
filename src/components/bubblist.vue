<template>
    <div class="list" style="height: 70%">
        <BubbleList :list="list" max-height="100%" min-width="700px">
          <!-- 自定义气泡内容 -->
          <template #content="{ item }">
            <el-card id="editor-container">
              <template #header> </template>
              <pre><code class="language-typescript">{{ item.content }}</code></pre>
            </el-card>
          </template>
          <!-- 自定义底部 -->
          <template #footer="{ item }">
            <div class="footer-wrapper" v-if="item.israte">
              <div class="footer-container">
                <el-button
                  @click="handleRate(item, 'like', item.content)"
                  :class="item.rate == 'like' ? 'rateStyle' : ''"
                >
                  <i class="fa-solid fa-thumbs-up"></i> 点赞
                </el-button>

                <el-button
                  @click="handleRate(item, 'dislike', item.content)"
                  :class="item.rate == 'dislike' ? 'rateStyle' : ''"
                >
                  <i class="fa-solid fa-thumbs-down"></i> 点踩
                </el-button>
              </div>
            </div>
          </template>
        </BubbleList>

      </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
    list: {
        type: Object,
        required: true,
    },
   
});
const handleRate=(item, type, data)=>{

}



</script>