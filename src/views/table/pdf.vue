<template>
    <div class="pdfppt-container">
      <div class="pdfppt-toolbar">
        <el-button @click="prevPage" :disabled="currentPage <= 1">上一页</el-button>
        <span>{{ currentPage }} / {{ totalPage }}</span>
        <el-button @click="nextPage" :disabled="currentPage >= totalPage">下一页</el-button>
        <el-button @click="toggleFullscreen">全屏</el-button>
        <el-button @click="toggleAutoPlay">{{ autoPlay ? '暂停' : '自动播放' }}</el-button>
      </div>
      <div class="pdfppt-viewer" ref="viewerRef">
        <canvas ref="canvasRef" style="background:#fff;max-width:100%;max-height:80vh;"></canvas>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted, nextTick } from 'vue'
  import { getDocument, PDFDocumentProxy } from 'pdfjs-dist'
  
  const pdfUrl = '/2222.pdf' // public目录下的pdf文件
  const pdfDoc = ref<PDFDocumentProxy | null>(null)
  const totalPage = ref(1)
  const currentPage = ref(1)
  const autoPlay = ref(false)
  const interval = ref<number | null>(null)
  const intervalTime = 3000
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  const viewerRef = ref<HTMLElement | null>(null)
  
  const renderPage = async (num: number) => {
    if (!pdfDoc.value) return
    const page = await pdfDoc.value.getPage(num)
    const viewport = page.getViewport({ scale: 1.5 })
    const canvas = canvasRef.value
    if (!canvas) return
    const context = canvas.getContext('2d')
    canvas.height = viewport.height
    canvas.width = viewport.width
    context?.clearRect(0, 0, canvas.width, canvas.height)
    await page.render({ canvasContext: context!, viewport }).promise
  }
  
  const loadPdf = async () => {
    pdfDoc.value = await getDocument(pdfUrl).promise
    totalPage.value = pdfDoc.value.numPages
    currentPage.value = 1
    await nextTick()
    renderPage(currentPage.value)
  }
  
  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
      renderPage(currentPage.value)
    }
  }
  const nextPage = () => {
    if (currentPage.value < totalPage.value) {
      currentPage.value++
      renderPage(currentPage.value)
    }
  }
  const toggleFullscreen = () => {
    const el = viewerRef.value
    if (!el) return
    if (!document.fullscreenElement) el.requestFullscreen()
    else document.exitFullscreen()
  }
  const startAutoPlay = () => {
    stopAutoPlay()
    autoPlay.value = true
    interval.value = window.setInterval(() => {
      if (currentPage.value < totalPage.value) {
        currentPage.value++
      } else {
        currentPage.value = 1
      }
      renderPage(currentPage.value)
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
    if (autoPlay.value) stopAutoPlay()
    else startAutoPlay()
  }
  
  onMounted(() => {
    loadPdf()
  })
  onUnmounted(() => {
    stopAutoPlay()
  })
  </script>
  
  <style scoped>
  .pdfppt-container {
    width: 100%;
    min-height: 100vh;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .pdfppt-toolbar {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 16px 0;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.06);
    padding: 12px 24px;
  }
  .pdfppt-toolbar span {
    font-size: 16px;
    color: #333;
    min-width: 80px;
    text-align: center;
  }
  .pdfppt-viewer {
    width: 100%;
    max-width: 1200px;
    flex: 1;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :fullscreen .pdfppt-viewer {
    width: 100vw !important;
    height: 100vh !important;
    max-width: none;
    border-radius: 0;
  }
  </style>