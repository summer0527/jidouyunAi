<template>
          <!--左侧对话列表 -->
    <transition name="collapse">
      <div class="openCom" v-if="sidebar.collapse">
        <div
          @click="handleOpenCZ"
          class="title"
          style="
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            margin-left: 10px;
            border-radius: 14px;
            width: fit-content;
            padding: 0 10px;
            height: 44px;
          "
        >
          <el-icon style="margin-right: 5px"><ChatSquare /></el-icon>
          开启新对话
        </div>
        <div>
          <el-divider />
          <ul>
            <li
              v-for="item in listData"
              :key="item.id"
              style="
                list-style: none;
                line-height: 50px;
                text-indent: 30px;
                margin-bottom: 10px;
                float: left;
                width: 100%;
              "
            >
              <div>
                <el-dropdown
                  split-button
                  style="width: 100%; float: left"
                  class="his"
                >
                  <span class="el-dropdown-link">
                    <input
                      type="text"
                      v-model="item.names"
                      v-if="item.isEditHist"
                      @blur="handleRestNameComZ(item)"
                      style="width: 100%"
                    />
                    <span
                      v-else
                      style="
                        display: block;
                        width: 100%;
                        text-align: left;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                      "
                      @click="handleOpenConstionZ(item.conversation_id)"
                      >{{ item.names }}</span
                    >
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item @click="handleRestNameZ(item)">
                        <el-icon><EditPen /></el-icon>
                        <span>重命名</span>
                      </el-dropdown-item>
                      <el-dropdown-item
                        @click="handleDeletZ(item.conversation_id, item.s_id)"
                      >
                        <el-icon><Delete /></el-icon>
                        <span>删除</span>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                  <!-- 自定义图标 -->
                  <template #button-content>
                    <i
                      class="fa-solid fa-angle-down"
                      style="margin-left: 5px"
                    ></i>
                  </template>
                </el-dropdown>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useSidebarStore } from "@/store/sidebar";
import { defineEmits } from 'vue';
const emit = defineEmits(['handleOpenC','handleRestNameCom','handleOpenConstion','handleRestName','handleDelet']);

const sidebar = useSidebarStore();

const props = defineProps({
    listData: {
        type: Object,
        required: true,
    },
    options: {
        type: Object,
        default: () => ({}),
        required: false,
    },
});

const handleOpenCZ=(item:object, type:string, data:string)=>{
 
  emit('handleOpenC');

}
const handleRestNameComZ=(item)=>{
 
 emit('handleRestNameCom',item);

}
const handleOpenConstionZ=(id)=>{
 
 emit('handleOpenConstion',id);

}
const handleRestNameZ=(id)=>{
 
 emit('handleRestName',id);

}
const handleDeletZ=(conversation_id,s_id)=>{
 emit('handleDelet',{conversation_id:conversation_id,s_id:s_id});

}

</script>
<style scoped lang="less">
pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}

code {
  font-family: "Courier New", Courier, monospace;
}
.action-list-self-wrap {
  display: flex;
}
.upload-demo {
  margin-right: 5px;
}
.collapse-enter-active,
.collapse-leave-active {
  transition: width 0.5s;
}

.collapse-enter,
.collapse-leave-to {
  width: 0;

  overflow: hidden;
}

.openCom {
  width: 10%;
  height: 100%;
  float: left;
  background: #f9fbff;
  padding: 10px;
}
.openCom .title {
  // line-height: 40px;
  color: #4d6bfe;
  background: #dbeafe;
  border: 1px solid #dbeafe;
  border-radius: 10px;
  width: 150px;
  text-align: center;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* 标准语法 */
}
.header-self-wrap {
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 200px;

  .header-self-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #626aef;
    font-weight: 600;
  }
}
.header-self-title {
  width: 100%;
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
}
.prefix-self-wrap {
  display: flex;
}
.ai-title {
  font-family: Source Han Sans;
  font-size: 28px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0em;

  font-variation-settings: "opsz" auto;
  font-feature-settings: "kern" on;
  color: #3d3d3d;
}
.ai-title2 {
  font-family: Source Han Sans;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0em;
  display: flex;
  justify-content: center;

  font-variation-settings: "opsz" auto;
  font-feature-settings: "kern" on;
  color: #3d3d3d;
}
.ai-title3 {
  font-family: Source Han Sans;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0em;
  display: flex;
  justify-content: center;
  font-variation-settings: "opsz" auto;
  font-feature-settings: "kern" on;
}
.welcomeMessage {
  float: left;

  width: 100%;
  // background: red;
}
.radiostyle {
  width: 500px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid blue;
  line-height: 50px;
}
.rateStyle {
  color: #409eff;
  border-color: #409eff;
  background-color: rgb(235.9, 245.3, 255);
}
.action-list-self-wrap {
  display: flex !important
;
  justify-content: center !important;
  align-items: center !important;
}
</style>