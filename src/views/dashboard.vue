<template>
  <div style="float: left;width: 100%;height: 100%;">
    <!-- 对话列表 -->
    <div class="openCom">
      <div  @click="handleOpenC" class="title">
        <el-icon><ChatSquare /></el-icon>
        开启新对话
      </div>
      <div>
        <ul>
          <li v-for="item in listData" :key="item.id" style=" list-style: none;line-height: 50px;text-indent: 30px;" @click="handleOpenConstion">
            {{ item.title }}</li>
        </ul>
      </div>
    </div>
    <!-- 对话内容 -->
    <div style="width: 90%; float: left; height: 100%">
      <!-- 对话内容列表 -->
      <div class="list" v-if="isShowList">
        <BubbleList :list="list" max-height="350px" />
      </div>
      <!-- 对话输入框 -->
      <Sender ref="senderRef" v-model:value="senderValue" @submit="handleSubmit">
        <template #header>
          <div class="header-self-wrap">
            <div class="header-self-title">
              <div
                class="header-left"
                style="display: flex; align-items: center"
              >
                <img class="logo" src="../assets/img/logo.png" alt="" />
                <span> 欢迎使用 吉斗云AI！</span>
              </div>
              <div class="header-right">
                <el-button @click.stop="closeHeader">
                  <el-icon><CircleClose /></el-icon>
                  <span>关闭头部</span>
                </el-button>
              </div>
            </div>
            <div class="header-self-content">
              <div class="welcomeMessage">
                <div
                  style="
                    display: flex;
                    justify-content: center;
                    margin-bottom: 10px;
                  "
                >
                  <img class="logo" src="../assets/img/logo.png" alt="" />
                  <p class="ai-title">我是吉斗云AI，很高兴见到你！</p>
                </div>

                <p class="ai-title2" style="margin-bottom: 10px">
                  我可以帮你写代码、读文件、写作各种创意内容，请把你的任务交给我吧
                  ~
                </p>
                <div class="ai-title3">
                  <p class="radiostyle">
                    <span style="color: #4d6bfe">吉斗云AI</span>
                    <span style="color: #3d3d3d">大模型累计解决</span>
                    <span style="color: #4d6bfe">xxx个问题</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- 自定义前缀 -->
        <template #prefix>
          <div class="prefix-self-wrap">
            <el-button dark>
              <el-icon><Link /></el-icon>
              <span>自定义前缀</span>
            </el-button>

            <el-button color="#626aef" :dark="true" @click="openCloseHeader">
              打开/关闭头部
            </el-button>
          </div>
        </template>
      </Sender>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { Bubble, Sender } from "vue-element-plus-x";
import { BubbleList } from "vue-element-plus-x";
import { CircleClose, Link } from "@element-plus/icons-vue";
import type {
  BubbleListItemProps,
  BubbleListProps,
} from "element-plus-x/bubbleList/types";
interface ListData{
  id:string,
  title:string
}
interface List {
  content:string,
  role:string,
  placement:string,
  avatar:string,
  avatarSize:string
}
type listType = BubbleListItemProps & {
  key: number;
  role: "user" | "ai";
};
const content = ref("hello world !");
const senderRef = ref();
const senderValue = ref("");
const showHeaderFlog = ref(false);
const listData = reactive<ListData[]>([])
  const list = reactive<List[]>([
    
    {content:'💖 感谢使用 Element Plus X ! 你的支持，是我们开源的最强动力 ~',role:'ai',placement:'start',avatar:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',avatarSize:'24px'}])

const isShowList = ref(false)
// 新加对话
const handleOpenC=()=>{
  console.log('开启新对话')
  const length=eval(listData.length+1);
  const titleC = '新对话'+length
  listData.push({id:length,title:titleC})
}
// 开启老的对话
const handleOpenConstion=()=>{

}
// 输入内容提交
const handleSubmit=()=>{
  console.log(senderValue.value)
  isShowList.value = true;
  list.push({content:senderValue.value,role:'user',placement:'end',avatar:'https://avatars.githubusercontent.com/u/76239030?v=4',avatarSize:'24px'})
  list.push({content:'💖 感谢使用 Element Plus X ! 你的支持，是我们开源的最强动力 ~',role:'ai',placement:'start',avatar:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',avatarSize:'24px'})
  senderValue.value = ''
}
onMounted(() => {
  showHeaderFlog.value = true;
  senderRef.value.openHeader();
});

function openCloseHeader() {
  if (!showHeaderFlog.value) {
    senderRef.value.openHeader();
  } else {
    senderRef.value.closeHeader();
  }
  showHeaderFlog.value = !showHeaderFlog.value;
}

function closeHeader() {
  showHeaderFlog.value = false;
  senderRef.value.closeHeader();
}


// 示例调用

// const list: BubbleListProps<listType>['list'] = generateFakeItems(5)
 
// console.log(list,'list')
// function generateFakeItems(count: number): listType[] {
//   const messages: listType[] = [];
//   for (let i = 0; i < count; i++) {
//     const role = i % 2 === 0 ? "ai" : "user";
//     const placement = role === "ai" ? "start" : "end";
//     const key = i + 1;
//     const content =
//       role === "ai"
//         ? "💖 感谢使用 Element Plus X ! 你的支持，是我们开源的最强动力 ~"
//         : `哈哈哈，让我试试`;
//     const loading = false;
//     const shape = "corner";
//     const variant = role === "ai" ? "filled" : "outlined";
//     const isMarkdown = false;
//     const typing = role === "ai" ? i === count - 1 : false;
//     const avatar =
//       role === "ai"
//         ? "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
//         : "https://avatars.githubusercontent.com/u/76239030?v=4";

//     messages.push({
//       key,
//       role,
//       placement,
//       content,
//       loading,
//       shape,
//       variant,
//       isMarkdown,
//       typing,
//       avatar,
//       avatarSize: "24px",
//     });
//     console.log(messages);
//   }
//   return messages;
// }
</script>

<style scoped lang="less">
.openCom {
  width: 10%;
  height: 100%;
  float: left;
  background: #F9FBFF;
 
}
.openCom .title{
  line-height: 50px;
    color: #4D6BFE;
    background: #DBEAFE;
    border: 1px solid #DBEAFE;
    border-radius: 10px;
    width: 150px;
    text-align: center;
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
</style>
