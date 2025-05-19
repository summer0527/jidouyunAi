<template>
  <!--左侧对话列表 -->
  <transition name="collapse">
    <div
      :class="sidebar.collapse?'openCom zhan':'shou'"
      style="
        z-index: 10;
        position: relative;
        height: 100%;
        overflow: auto;
        width: 240px;
        background: #ffffff;
      "
    >
      <div style="display: flex; justify-content: center;margin-top: 20px;margin-bottom: 20px;">
        <div
          @click="handleOpenCZ"
          class="title"
          style="
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            /* margin-left: 10px; */
            border-radius: 25px;
            width: 180px;
            height: 50px;
            background: linear-gradient(0deg, #c2221d 0%, #e30011 99%);
            color: #ffffff;
            font-size: 16px;
            font-family: PingFangSC;
            font-weight: normal;
            line-height: 16px;
            letter-spacing: normal;
            cursor: pointer;
          "
        >
          <img
            class="logo mr10"
            src="/image/openicon.png"
            alt=""
            style="height: 14px; width: 27px"
          />
          开启新对话
        </div>
      </div>

      <div class="demo-collapse">
        <!-- <ul style="">
          <li
            text
            bg
            style="width: 100%; font-size: 16px;cursor: pointer;margin-bottom: 10px;"
            @click="handleTran('generic')"
            class="teachhoverstyle"
            :class="isslect=='dify-generic'?'mounterstyle teachhoverstyle':'teachhoverstyle'"
          >
            <img
              class="logo mr10"
              src="/image/tongicon.png"
              alt=""
              style="height: 16px; width: 16px"
            />
            通用对话
          </li>
        </ul> -->
        <el-collapse v-model="activeNames" @change="handleChange" style="padding-left: 10px;background: #ffffff;" accordion>
          <el-collapse-item name="1">
            <template #title>
             
              <img
              class="logo mr10"
              src="/image/teicon.png"
              alt=""
              style="height: 16px; width: 16px"
            />
              <span style="color: #000;font-size: 16px;">教师场景</span>
            </template>
            <ul>
              <li
                text
                bg
                style="width: 100%"
                @click="handleTran('teacher')"
                :class="isslect=='dify-teacher'?'mounterstyle teachh2overstyle':'teachh2overstyle'"
              >
               
                教案生成助手
              </li>
              <li
                text
                bg
                style="width: 100%"
                @click="handleTran('man')"
                :class="isslect=='dify-man'?'mounterstyle teachh2overstyle':'teachh2overstyle'"
              >
                
                辩论主持人助手
              </li>
              <li
                text
                bg
                style="width: 100%"
                @click="handleTran('subject')"
                :class="isslect=='dify-subject'?'mounterstyle teachh2overstyle':'teachh2overstyle'"
              >
               
                分层练习题助手
              </li>
              <li
                text
                bg
                style="width: 100%"
                @click="handleTran('gang')"
                 :class="isslect=='dify-gang'?'mounterstyle teachh2overstyle':'teachh2overstyle'"
              >
               
                教学大纲生成助手
              </li>

              <li
                text
                bg
                style="width: 100%"
                @click="handleTran('class')"
                 :class="isslect=='dify-class'?'mounterstyle teachh2overstyle':'teachh2overstyle'"
              >
                
                课堂互动问答助手
              </li>

              <li
                text
                bg
                style="width: 100%"
                @click="handleTran('virtuallearning')"
                :class="isslect=='dify-virtuallearning'?'mounterstyle teachh2overstyle':'teachh2overstyle'"
              >
               
                虚拟合作伙伴助手
              </li>
            </ul>
          </el-collapse-item>
          <el-collapse-item  name="2">
            <template #title>
             
             <img
             class="logo mr10"
             src="/image/stuicon.png"
             alt=""
             style="height: 16px;
    width: 16px;"
           />
             <span style="color: #000;font-size: 16px;">学生场景</span>
           </template>
            <ul>
              <li text bg  :class="isslect=='dify-translate'?'mounterstyle teachh2overstyle':'teachh2overstyle'" @click="handleTran('tran')">
               翻译助手
              </li>
              <li text bg  :class="isslect=='difycode'?'mounterstyle teachh2overstyle':'teachh2overstyle'" @click="handleTran('code')">
               代码生成助手
              </li>
              <li text bg  :class="isslect=='dify-qa'?'mounterstyle teachh2overstyle':'teachh2overstyle'" @click="handleTran('qa')">
               研发问答助手
              </li>

              <li text bg  :class="isslect=='dify-memory'?'mounterstyle teachh2overstyle':'teachh2overstyle'" @click="handleTran('memory')">
               对话记忆助手
              </li>
              <li text bg  :class="isslect=='dify-lean'?'mounterstyle teachh2overstyle':'teachh2overstyle'" @click="handleTran('lean')">
                个性化学习助手
              </li>
              <li text bg  :class="isslect=='difysql'?'mounterstyle teachh2overstyle':'teachh2overstyle'" @click="handleTran('sql')">
                数据表字段生成助手
              </li>
            </ul>
          </el-collapse-item>
          <el-collapse-item  name="3">
            <template #title>
             
             <img
             class="logo mr10"
             src="/image/instricon.png"
             alt=""
             style="height: 16px;
    width: 16px;"
           />
             <span style="color: #000;font-size: 16px;">行业场景</span>
           </template>
            <ul>
              <li
                text
                bg
                :class="isslect=='dify-physical'?'mounterstyle teachh2overstyle':'teachh2overstyle'"
                @click="handleTran('physical')"
              >
              体检助手
              </li>
              <li
                text
                bg
                :class="isslect=='dify-customer'?'mounterstyle teachh2overstyle':'teachh2overstyle'"
                @click="handleTran('customer')"
              >
               智能客服助手
              </li>

              <li text bg  :class="isslect=='dify-knowledge'?'mounterstyle teachh2overstyle':'teachh2overstyle'" @click="handleTran('know')">
              行业知识库助手
              </li>

              <!-- <li text bg  :class="isslect=='dify-health'?'mounterstyle teachh2overstyle':'teachh2overstyle'" @click="handleTran('health')">
               心理健康支持助手
              </li> -->
              <li text bg  :class="isslect=='dify-car'?'mounterstyle teachh2overstyle':'teachh2overstyle'" @click="handleTran('car')">
               汽车故障检修助手
              </li>
              <li
                text
                bg
                 :class="isslect=='dify-treatment'?'mounterstyle teachh2overstyle':'teachh2overstyle'"
                @click="handleTran('treatment')"
              >
               治疗虚拟教学培训助手
              </li>
              <!-- <li
              text
              bg
              style="width: 90%; margin-left: 5%; " :class="currentRoute=='dify-excel'?'selectStyle':''" @click="handleTran('excel')"
              >数据统计助手</li
            > -->
              <li
                text
                bg
                :class="isslect=='dify-guidance'?'mounterstyle teachh2overstyle':'teachh2overstyle'"
                @click="handleTran('guidance')"
              >
               智能导诊与患者服务助手
              </li>

              <!-- <li
              text
              bg
              style="width: 90%; margin-left: 5%; " :class="currentRoute=='dify-ppt'?'selectStyle':''" @click="handleTran('ppt')"
              >ppt</li
            >  
             -->
            </ul>
          </el-collapse-item>
          <el-collapse-item  name="4">
            <template #title>
             
             <img
             class="logo mr10"
             src="/image/historyIcon.png"
             alt=""
             style="height: 16px;
    width: 16px;"
           />
             <span style="color: #000;font-size: 16px;">历史记录</span>
           </template>
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
                  overflow: hidden;
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
                          width: 120px;
                          text-align: left;
                          overflow: hidden;
                          white-space: nowrap;
                        "
                        class="spanclass"
                        @click="handleOpenConstionZ(item.conversation_id)"
                      >
                        <el-tooltip
                          class="box-item"
                          effect="dark"
                          :content="item.names"
                          placement="top-start"
                        >
                          {{ item.names }}
                        </el-tooltip>
                      </span>
                    </span>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item @click="handleRestNameZ(item)" >
                          <p class="rehover">
                            <el-icon ><EditPen/></el-icon>
                            <span >重命名</span>
                          </p>
                          
                        </el-dropdown-item>
                        <el-dropdown-item
                          @click="handleDeletZ(item.conversation_id, item.s_id)"
                        >
                        <p class="rehover">
                          <el-icon><Delete /></el-icon>
                          <span>删除</span>
                        </p>
                         
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
          </el-collapse-item>
        </el-collapse>
      </div>
      <div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useSidebarStore } from "@/store/sidebar";
import { useRouter, useRoute } from "vue-router";
import { ArrowRight } from "@element-plus/icons-vue";
const router = useRouter();
const currentRoute = ref(null);
const route = useRoute();

// import { defineEmits } from 'vue';
const emit = defineEmits([
  "handleOpenC",
  "handleRestNameCom",
  "handleOpenConstion",
  "handleRestName",
  "handleDelet",
]);

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
const handleTran = (type: any) => {
  // emit('handleScence',type)
  if (type == "tran") {
    router.push("/dify-translate");
  } else if (type == "teacher") {
    router.push("/dify-teacher");
  } else if (type == "code") {
    router.push("/dify-code");
  } else if (type == "qa") {
    router.push("/dify-qa");
  } else if (type == "sql") {
    router.push("/dify-sql");
  } else if (type == "know") {
    router.push("/dify-knowledge");
  } else if (type == "customer") {
    router.push("/dify-customer");
  } else if (type == "memory") {
    router.push("/dify-memory");
  } else if (type == "class") {
    router.push("/dify-class");
  } else if (type == "lean") {
    router.push("/dify-lean");
  } else if (type == "gang") {
    router.push("/dify-gang");
  } else if (type === "man") {
    router.push("/dify-man");
  } else if (type === "subject") {
    router.push("/dify-subject");
  } else if (type === "excel") {
    router.push("/dify-excel");
  } else if (type === "guidance") {
    router.push("/dify-guidance");
  } else if (type === "physical") {
    router.push("/dify-physical");
  } else if (type === "text") {
    router.push("/dify-text");
  } else if (type === "health") {
    router.push("/dify-health");
  } else if (type === "treatment") {
    router.push("/dify-treatment");
  } else if (type === "car") {
    router.push("/dify-car");
  } else if (type === "virtuallearning") {
    router.push("/dify-virtuallearning");
  } else if (type === "ppt") {
    router.push("/dify-ppt");
  } else if (type === "generic") {
    router.push("/dify-generic");
  }
};
const activeNames = ref([]);
const activeNames2 = ref(["1"]);
const isslect=ref(null)
onMounted(() => {
  
  currentRoute.value = route.name;
  isslect.value = route.name
  console.log(
    currentRoute.value,
    "currentRoute.valuecurrentRoute.valuecurrentRoute.valuecurrentRoute.value"
  );
  if (route.name=='dify-translate'||route.name=='difycode'||route.name=='dify-qa'||route.name=='dify-memory'||route.name=='dify-lean'||route.name=='difysql') {
    activeNames.value.push('2')
    console.log(
    currentRoute.value,
    "currentRoute.valuecurrentRoute.valuecurrentRoute.valuecurrentRoute.value"
  );
  } else if (route.name=='dify-teacher'||route.name=='dify-man'||route.name=='dify-subject'||route.name=='dify-gang'||route.name=='dify-class'||route.name=='dify-virtuallearning') {
    activeNames.value.push('1')
    console.log(
    currentRoute.value,
    "currentRoute.valuecurrentRoute.valuecurrentRoute.valuecurrentRoute.value"
  );
  } else if (route.name=='dify-physical'||route.name=='dify-customer'||route.name=='dify-knowledge'||route.name=='dify-health'||route.name=='dify-car'||route.name=='dify-treatment'||route.name=='dify-guidance') {
    activeNames.value.push('3')
    console.log(
    currentRoute.value,
    "currentRoute.valuecurrentRoute.valuecurrentRoute.valuecurrentRoute.value"
  );
  }
  
});
const handleChange = (val: string[]) => {
  console.log(val);
};
const handleOpenCZ = () => {
  emit("handleOpenC");
};
const handleRestNameComZ = (item: any) => {
  emit("handleRestNameCom", item);
};
const handleOpenConstionZ = (id: any) => {
  emit("handleOpenConstion", id);
};
const handleRestNameZ = (id: any) => {
  emit("handleRestName", id);
};
const handleDeletZ = (conversation_id: any, s_id: any) => {
  emit("handleDelet", { conversation_id: conversation_id, s_id: s_id });
};
</script>
<style scoped lang="less">

 /* 修改折叠面板标题背景颜色 */
 ::v-deep .el-collapse-item__header {
            background-color: #FFFFFF;
            // color: #67c23a;
        }

        /* 修改折叠面板内容背景颜色 */
        ::v-deep .el-collapse-item__content {
            background-color: #FFFFFF;
            // color: #409eff;
        }

        /* 修改激活状态下折叠面板标题的背景颜色 */
        ::v-deep .el-collapse-item.is-active .el-collapse-item__header {
            background-color: #FFFFFF;
            // color: #e6a23c;
        }
        ::v-deep .el-collapse-item__wrap{
          background-color: #FFFFFF;

        }
        .teachhoverstyle{
          color: #000000;
          width: 100%;
    /* height: 30px; */
    line-height: 40px;
    padding: 0 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
        }
        .iconstyle{
          font-size: 16px;
        }
.teachhoverstyle:hover{
 
  color:#BF1F1A
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
    cursor: pointer;
        }
        .iconstyle{
          font-size: 16px;
        }
.teachh2overstyle:hover{
  // border-radius: 18px;
  // background: #FFF6F6;
  color:#BF1F1A
}
.mounterstyle{
         
  // color:#BF1F1A
  border-radius: 18px;
  background: #FFF6F6;
  color:#BF1F1A
}
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
  width: 240px;
  height: 100%;
  float: left;
  background: #FFFFFF;
  padding: 10px;
}
.zhan{
  max-width: 240px;
  height: 100%;
  float: left;
  background: #FFFFFF;
  padding: 10px;
  opacity: 1;
  transition: max-width 0.5s ease, opacity 0.3s ease, transform 0.3s ease;
}
.shou{
  max-width: 0;
            opacity: 0;
            transition: max-width 0.5s ease, opacity 0.3s ease, transform 0.3s ease;
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
.spanclass{
  color:#000000
}
.spanclass:hover{
  color:#BF1F1A
}
.rehover{
  color:#000000

}
.rehover:hover{
  color:#BF1F1A

}
</style>
