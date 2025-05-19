<template>
  <div class="ppt-upload">
    <el-upload
      :show-file-list="false"
      :auto-upload="false"
      accept=".pptx"
      :before-upload="handleFile"
    >
      <el-button type="primary">选择PPTX文件</el-button>
    </el-upload>
  </div>
  <div id="reveal-root" class="reveal-root"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import JSZip from 'jszip'
import pptx2json from 'pptx2json'

const revealInstance = ref<any>(null)

const handleFile = async (file: File) => {
  // 1. 读取pptx文件为ArrayBuffer
  const arrayBuffer = await file.arrayBuffer()
  // 2. 用pptx2json解析
  const zip = await JSZip.loadAsync(arrayBuffer)
  const pptJson = await pptx2json(zip)
  // 3. 生成reveal.js的HTML结构
  const slidesHtml = pptJson.slides.map((slide: any) => {
    let content = ''
    // 只处理文本和图片（可扩展）
    slide.content.forEach((item: any) => {
      if (item.type === 'text') {
        content += `<p>${item.text}</p>`
      }
      if (item.type === 'image') {
        content += `<img src="data:image/png;base64,${item.data}" style="max-width:80%;max-height:400px;"/><br/>`
      }
    })
    return `<section>${content}</section>`
  }).join('\n')

  // 4. 渲染到reveal-root
  const root = document.getElementById('reveal-root')
  if (root) {
    root.innerHTML = `
      <div class="reveal">
        <div class="slides">
          ${slidesHtml}
        </div>
      </div>
    `
    // 5. 初始化reveal.js
    if (revealInstance.value) {
      revealInstance.value.destroy()
    }
    revealInstance.value = new Reveal(root.querySelector('.reveal') as HTMLElement)
    revealInstance.value.initialize()
  }
  return false // 阻止el-upload自动上传
}
</script>

<style scoped>
.ppt-upload {
  margin-bottom: 20px;
}
.reveal-root {
  width: 100%;
  height: 80vh;
  background: #222;
  border-radius: 8px;
  overflow: hidden;
}
</style>