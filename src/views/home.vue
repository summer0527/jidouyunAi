<template>
    <div class="wrapper">
        <v-header @handleScense2="handleScense2"/>
        <!-- <v-sidebar /> -->

        <div class="content-box" >
            <!-- <v-tabs></v-tabs> -->
            <!-- <el-watermark content="吉斗云教育AI业态大模型" fill-style="hsla(240, 100%, 50%, 0.3)" style="width:100%;height: 100%;float: left;" :gap="[300, 300]" zIndex="5"> -->

            <div class="content" >
                <router-view v-slot="{ Component }">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="tabs.nameList">
        <component :is="Component"></component>

                        </keep-alive>
                    </transition>
                </router-view>
            </div>
            <el-dialog title="场景模型市场" width="1600" v-model="isShow" fit  >
              <img src="/public/image/table.png" alt="" style="width:100%;padding: 30px 30px 50px 30px;">
    <!-- <el-table :data="gridData"  :span-method="objectSpanMethod" border>
      <el-table-column property="type" label="模型类别" align="center" width="200px"/>

      <el-table-column property="date" label="场景名称" align="center" />
      <el-table-column property="name" label="模型名称" align="center" />
    </el-table> -->
  </el-dialog>
        <!-- </el-watermark> -->

        </div>
       
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useSidebarStore } from '@/store/sidebar';
import { useTabsStore } from '@/store/tabs';
import vHeader from '@/components/header.vue';
import type { TableColumnCtx } from 'element-plus'
// import vSidebar from '@/components/sidebar.vue';
// import vTabs from '@/components/tabs.vue';
interface User {
    type: string
    date: string
    name: string
 
}
interface SpanMethodProps {
  row: User
  column: TableColumnCtx<User>
  rowIndex: number
  columnIndex: number
}

const objectSpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex,
}: SpanMethodProps) => {
    if (columnIndex === 0) {
    if (rowIndex === 0) {
      return { rowspan: 6, colspan: 1 }
    } else if (rowIndex === 1||rowIndex === 2||rowIndex === 3||rowIndex === 4||rowIndex === 5) {
      return { rowspan: 0, colspan: 0 }
    } else if (rowIndex === 6){
      return { rowspan: 6, colspan: 1 }
    } else if (rowIndex === 7||rowIndex === 8||rowIndex === 9||rowIndex === 10||rowIndex === 11) {
      return { rowspan: 0, colspan: 0 }

    } else if (rowIndex === 12) {
      return { rowspan: 7, colspan: 1 }
    } else if (rowIndex === 13||rowIndex === 14||rowIndex === 15||rowIndex === 16||rowIndex === 17||rowIndex === 18) {
      return { rowspan: 0, colspan: 0 }

    }
  }
  return { rowspan: 1, colspan: 1 }
}
const gridData = ref([
  {
    type:'教师场景',
    date: '教案生成助手',
    name: 'JDY-智慧教案模型（JDY-Wisdom Teaching Plan Model）',
  },
  {
    type:'教师场景',
    date: '辩论主持人助手',
    name: 'JDY-教师智慧辩论主持模型（JDY - Teacher Wisdom Debate Moderation Model）',
  },
  {
    type:'教师场景',
    date: '分层练习题助手',
    name: 'JDY-学生题库模型（JDY - Teacher Wisdom Debate Moderation Model）',
  },
  {
    type:'教师场景',
    date: '教学大纲生成助手',
    name: 'JDY-教师智慧大纲速成助手模型（Teacher Wisdom Rapid Growth Assistant Model）',
  },
  {
    type:'教师场景',
    date: '课堂互助问答助手',
    name: 'JDY-教师教纲智囊模型（Teacher Curriculum Cognitive Intelligence Model）',
  },
  {
    type:'教师场景',
    date: '虚拟合作伙伴助手',
    name: 'JDY-虚拟学习伙伴模型（Virtual Learning Companion Model）',
  },
  {
    type:'学生场景',
    date: '翻译助手',
    name: 'JDY-智慧翻译模型（Wisdom Translation Model）',
  },
  {
    type:'学生场景',
    date: '代码生成助手',
    name: 'JDY-智慧编程模型（Wisdom Programming Model ）',
  },
  {
    type:'学生场景',
    date: '研发问答助手',
    name: 'JDY-智慧编程模型（Wisdom Programming Model ）',
  },
  {
    type:'学生场景',
    date: '对话记忆助手',
    name: 'JDY-智慧对话模型（Wisdom Dialogue Model）',
  },
  {
    type:'学生场景',
    date: '个性化学习助手',
    name: 'JDY-学生个性化学习模型（Student Personalized Learning Model）',
  },
  {
    type:'学生场景',
    date: '数据表字段生成助手',
    name: 'JDY-智慧编程模型（Wisdom Programming Model ）',
  },
  {
    type:'行业场景',
    date: '体检助手',
    name: 'JDY-线上体检模型（Online Physical Examination Model）',
  },
  {
    type:'行业场景',
    date: '智能客服助手',
    name: 'JDY-智能服务模型（AI Service Model）',
  },
  {
    type:'行业场景',
    date: '行业知识库助手',
    name: 'JDY-',
  },
  {
    type:'行业场景',
    date: '心里健康支持助手',
    name: 'JDY-心理健康支持模型（Mental Health Support Model）',
  },
  {
    type:'行业场景',
    date: '汽车故障检修助手',
    name: 'JDY-汽车故障检修模型（Vehicle Fault Inspection and Repair Model）',
  },
  {
    type:'行业场景',
    date: '治疗虚拟教学培训助手',
    name: 'JDY-医疗虚拟教学培训模型（Medical Virtual Training Model）',
  },
  {
    type:'行业场景',
    date: '智能导诊与患者服务助手',
    name: 'JDY-医疗服务模型（Medical Service Model）',
  },
])
const sidebar = useSidebarStore();
const tabs = useTabsStore();
const isShow = ref(false)
const handleScense2=(()=>{
    console.log('=-=-=-=-=-=-=-=-=-=')
    isShow.value=true
})
</script>

<style>
.wrapper {
    height: 100vh;
    overflow: hidden;
}
.content-box {
    position: absolute;
    left: 0;
    right: 0;
    top: 60px;
    bottom: 0;
    /* padding-bottom: 30px; */
    -webkit-transition: left 0.3s ease-in-out;
    transition: left 0.3s ease-in-out;
    background: #FFFFFF;
    overflow: hidden;
    box-sizing: border-box;
    background-image:url('/image/bgw.jpg');
    background-size: cover;
}

.content {
    width: auto;
    height: 100%;
    /* padding: 20px; */
    /* overflow-y: scroll; */
    box-sizing: border-box;
}

.content::-webkit-scrollbar {
    width: 0;
}

.content-collapse {
    left: 65px;
}
</style>
