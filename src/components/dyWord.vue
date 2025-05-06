<template>
  <div ref="wordCloudRef"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from 'vue';
import * as d3 from 'd3';
import cloud from 'd3-cloud';

const wordCloudRef = ref<HTMLDivElement | null>(null);
let timer: ReturnType<typeof setInterval> | null = null;
  let updateCount = 0; // 记录更新次数
const initialWords = [
  { text: '数据科学', size: 20 },
  { text: '机器学习', size: 30 },
  { text: '深度学习', size: 25 },
  { text: '人工智能', size: 35 },
  { text: '大数据', size: 22 },
  { text: '云计算', size: 28 },
  { text: '区块链', size: 26 },
  { text: '物联网', size: 23 }
];

const width = 480;
const height = 350;
const updateWords = (words: any[]) => {
  return words.map(word => ({
    ...word,
    size: Math.floor(Math.random() * 30 + 10)
  }));
};

const draw = (wordsData: any[]) => {
  if (wordCloudRef.value) {
    const svg = d3
     .select(wordCloudRef.value)
     .selectAll('svg')
     .data([null])
     .join('svg')
     .attr('width', width)
     .attr('height', height)
     .append('g')
     .attr('transform', `translate(${width / 2},${height / 2})`);

    const texts = svg
     .selectAll('text')
     .data(wordsData, (d: any) => d.text);

    texts.exit().remove();

    texts
     .enter()
     .append('text')
     .merge(texts)
     .style('font-size', (d: any) => `${d.size}px`)
     .style('font-family', 'Impact')
     .style('fill', () => d3.schemeCategory10[Math.floor(Math.random() * 10)])
     .attr('text-anchor', 'middle')
     .transition()
     .duration(1000)
     .attr('transform', (d: any) => `translate(${d.x},${d.y})rotate(${d.rotate})`)
     .text((d: any) => d.text);
  }
};

const generateWordCloud = (words: any[]) => {
  const layout = cloud()
   .size([width, height])
   .words(words.map((d) => ({ text: d.text, size: d.size })))
   .padding(20)
   .rotate(() => ~~(Math.random() * 2) * 90)
   .font('Impact')
   .fontSize((d) => d.size)
   .spiral('archimedean') // 选择布局螺旋方式，可尝试不同方式
   .on('end', draw);

  layout.start();
};

onMounted(() => {
  if (wordCloudRef.value) {
    generateWordCloud(initialWords);
    timer = setInterval(() => {
      if (updateCount < 5) {
        const newWords = updateWords(initialWords);
      generateWordCloud(newWords);
      updateCount++;
      }else{
        clearInterval(timer);

      }
      
    }, 2000);
  }
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background: white;
}

svg {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>    