<template>
  <div>
    <el-button @click="prevPage" :disabled="currentPage <= 1">上一页</el-button>
    <span>{{ currentPage }} / {{ totalPage }}</span>
    <el-button @click="nextPage" :disabled="currentPage >= totalPage">下一页</el-button>
    <VueOfficePptx
      :src="pptxUrl"
      v-model:page="currentPage"
      @rendered="onRendered"
      style="width: 100%; height: 80vh"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VueOfficePptx from '@vue-office/pptx'

const pptxUrl = '/2222.pptx'
const totalPage = ref(1)
const currentPage = ref(1)

const onRendered = (info: any) => {
  totalPage.value = info.slides?.length || 1
  currentPage.value = 1
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}
const nextPage = () => {
  if (currentPage.value < totalPage.value) currentPage.value++
}
</script>