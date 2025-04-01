<template>
  <div style="float: left; width: 100%; height: 100%">
    <!-- 对话列表 -->
    <transition name="collapse">
      <div class="openCom" v-if="sidebar.collapse">
        <div @click="handleOpenC" class="title">
          <el-icon><ChatSquare /></el-icon>
          开启新对话
        </div>
        <div>
          <ul>
            <li
              v-for="item in listData"
              :key="item.id"
              style="list-style: none; line-height: 50px; text-indent: 30px"
              @click="handleOpenConstion"
            >
              {{ item.title }}
              <el-button
                :icon="Delete"
                size="small"
                style="margin-left: 10px"
                @click="handleDelet(item.id)"
              />
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
    <!-- 对话内容 -->
    <div
      style="width: 88%; float: left; height: 100%; background-color: #ffffff"
    >
      <!-- 7种场景展示 -->
      <div
        style="
          width: 100%;
          height: 93%;
          float: left;
          display: flex;
          justify-content: center;
          align-items: center;
        "
        v-show="isShowScene"
      >
        <div style="margin-top: 10px; margin-bottom: 10px">
          <p>
            <img class="logo mr10" src="../assets/img/logo.png" alt="" />
            <span style="font-size: 24px; color: #3d3d3d"
              >Hello,我是吉斗云AI</span
            >
            <span
              style="
                color: cornflowerblue;
                font-size: 16px;
                display: block;
                text-indent: 10px;
                margin-top: 20px;
                margin-bottom: 20px;
              "
              >请选择你需要的场景</span
            >
          </p>
          <p
            style="
              float: left;
              width: 45%;
              height: 300px;
              border: 1px solid #bbbcc5;
              margin-right: 5%;
              border-radius: 10px;
            "
          >
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px"
              @click="handleTranslate"
              >翻译</el-button
            >
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px"
              >教案生成</el-button
            >
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px"
              >代码生成器</el-button
            >
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px"
              >研发问答器</el-button
            >
          </p>
          <p
            style="
              float: left;
              width: 45%;
              height: 300px;
              border: 1px solid #bbbcc5;
              border-radius: 10px;
            "
          >
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px"
              >数据表字段编辑器</el-button
            >
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px"
              >知识库问答器</el-button
            >

            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px"
              >智能客服</el-button
            >
          </p>
        </div>
      </div>
      <!-- 翻译场景选择 -->
      <div
        style="
          width: 100%;
          height: 93%;
          float: left;
          display: flex;
          justify-content: center;
          align-items: center;
         
        "
        v-show="isShowDialog"
      >
        <div style="margin-top: 10px; margin-bottom: 10px; border: 1px solid #bbbcc5;border-radius: 10px;padding: 50px 20px;">
          <el-form
            :model="translateForm"
            label-width="auto"
            style="min-width: 800px"
            :rules="rules"
            ref="ruleFormRef"
          >
            <el-form-item label="请上传文件" prop="file">
                <el-upload
                  :limit="1"
                  class="upload-demo"
                  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                >
                  <el-button type="primary">点击上传文件</el-button>
                  
                </el-upload>
            </el-form-item>
            <el-form-item label="翻译语种" prop="languages">
              <el-select
                v-model="translateForm.languages"
                placeholder="请选择您要翻译的语言"
              >
                <el-option label="英文" value="shanghai" />
                <el-option label="韩语" value="beijing" />
              </el-select>
            </el-form-item>

            <el-form-item label="输入你要翻译的文字" prop="content">
              <el-input v-model="translateForm.content" type="textarea"  :rows="5"/>
            </el-form-item>
            <el-form-item label="翻译的类型" prop="type">
              <el-select
                v-model="translateForm.type"
                placeholder="请选择您要翻译的类型"
              >
                <el-option label="口语" value="shanghai" />
                <el-option label="书面" value="beijing" />
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 对话内容列表 -->
      <div class="list" v-if="isShowList">
        <BubbleList :list="list" max-height="350px" />
      </div>
      <!-- 对话输入框 -->
      <Sender
        ref="senderRef"
        v-model:value="senderValue"
        style="position: fixed; bottom: 30px; width: 88%"
      >
        <!-- <template #header>
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
        </template> -->

        <!-- 自定义前缀 -->
        <template #prefix>
          <div class="prefix-self-wrap">
            <!-- <el-button color="#626aef" :dark="true" @click="openCloseHeader">
              打开/关闭头部
            </el-button> -->
            <ul style="margin-left: 5px">
              <li
                v-for="(item, index) in imageList"
                :key="index"
                style="
                  position: relative;
                  width: 100px;
                  height: 100px;
                  float: left;
                  border: 1px solid #bbbcc5;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-right: 5px;
                "
              >
                <el-icon
                  style="position: absolute; top: 0; right: 0"
                  @click="handleDeletimg(index)"
                  ><Close
                /></el-icon>
                <img
                  :src="item.imageUrl"
                  class="avatar"
                  style="max-width: 100%"
                  @click="handleClickImg(item.imageUrl)"
                />
              </li>
            </ul>
          </div>
        </template>

        <template #action-list>
          <div class="action-list-self-wrap">
            <el-upload
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              :on-success="handlesuccess"
              :on-error="handleError"
            >
              <el-button circle>
                <el-icon><Link /></el-icon>
              </el-button>
            </el-upload>

            <el-button
              type="primary"
              circle
              style="rotate: -45deg"
              @click="handleSubmit"
            >
              <el-icon><Position /></el-icon>
            </el-button>
          </div>
        </template>
      </Sender>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted,Ref } from "vue";
import { Bubble, Sender } from "vue-element-plus-x";
import { BubbleList } from "vue-element-plus-x";
import { useRouter } from "vue-router";

import {
  CircleClose,
  Link,
  Delete,
  Download,
  Plus,
  ZoomIn,
} from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
import type {
  BubbleListItemProps,
  BubbleListProps,
} from "element-plus-x/bubbleList/types";
import { useSidebarStore } from "@/store/sidebar";
import type { UploadProps, FormInstance, FormRules,UploadFile } from "element-plus";
import { loginUserApi } from "../api/index";
import request from "../utils/request";
import type { ElForm } from 'element-plus';
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const sidebar = useSidebarStore();
const imageUrl = ref("");
const router = useRouter();
const isShowScene = ref(true);
const isShowDialog = ref(false);
interface ListData {
  id: string;
  title: string;
}
interface List {
  content: string;
  role: string;
  placement: string;
  avatar: string;
  avatarSize: string;
}
interface TranslateForm {
  file: File | null;
  type: string;
  content: string;
  languages:string
}
interface imgList {
  imageUrl: string;
}
type listType = BubbleListItemProps & {
  key: number;
  role: "user" | "ai";
};
const content = ref("hello world !");
const senderRef = ref();
const senderValue = ref("");
const showHeaderFlog = ref(false);
const listData = reactive<ListData[]>([]);
const translateForm = reactive<TranslateForm>({
  file:null,
  type: "",
  content: "",
  languages:''
});
const ruleFormRef = ref<FormInstance>()
console.log(ruleFormRef,'09909090909090909090909090')
const rules = reactive<FormRules<TranslateForm>>({
 file: [
    {
      required: true,
      message: "请上传文件",
      trigger: "blur",
    },

  ],
  type: [
    { required: true, message: "请选择要翻译的类型", trigger: "blur" },
  ],
  content: [
    { required: true, message: "请输入要翻译的内容", trigger: "blur" },
  ],
  languages: [
    { required: true, message: "请选择要翻译的语种", trigger: "blur" },
  ],
})

const list = reactive<List[]>([
  {
    content: "💖 感谢使用 Element Plus X ! 你的支持，是我们开源的最强动力 ~",
    role: "ai",
    placement: "start",
    avatar:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    avatarSize: "24px",
  },
]);
const imageList = reactive<imgList[]>([]);
const isShowList = ref(false);
// 点击翻译场景
const handleTranslate = () => {
  isShowScene.value = false;
  isShowDialog.value = true;
};
// 点击放大
const handleClickImg = (url: string) => {
  dialogImageUrl.value = url;
  dialogVisible.value = true;
};
const handleDeletimg = (index: number) => {
  imageList.splice(index, 1);
};
const handlesuccess: UploadProps["onSuccess"] = (response, uploadFile) => {
  console.log("ssjsjsjsj");
  console.log(response);
  console.log(uploadFile);
};
const handleError: UploadProps["onError"] = (response, uploadFile) => {
  console.log("ssjsjsjsj");
  console.log(response);
  console.log(uploadFile);
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
  imageList.push({ imageUrl: imageUrl.value });
};
// 新加对话
const handleOpenC = () => {
  console.log("开启新对话");
  const length = eval(listData.length + 1);
  const titleC = "新对话" + length;
  listData.push({ id: length, title: titleC });
};
// 删除对话
const handleDelet = (id: string) => {
  ElMessageBox.confirm("是否确定删除此条对话?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "success",
  })
    .then(() => {
      listData.forEach((item, index) => {
        if (item.id == id) {
          listData.splice(index, 1);
        }
      });

      ElMessage({
        message: "删除成功",
        type: "success",
      });
    })
    .catch(() => {
      ElMessage({
        message: "取消操作成功",
        type: "success",
      });
    });
};
// 开启老的对话
const handleOpenConstion = () => {};
// 输入内容提交
const handleSubmit = async (formEl: FormInstance | undefined) => {
  if (isShowDialog.value == true) {
    if (!ruleFormRef.value) return;
    await ruleFormRef.value.validate((valid: boolean) => {
      if (valid) {}else{
        return false;
      }
    })
  }
  console.log(senderValue.value);
  isShowList.value = true;
  list.push({
    content: senderValue.value,
    role: "user",
    placement: "end",
    avatar: "https://avatars.githubusercontent.com/u/76239030?v=4",
    avatarSize: "24px",
  });
  list.push({
    content: "💖 感谢使用 Element Plus X ! 你的支持，是我们开源的最强动力 ~",
    role: "ai",
    placement: "start",
    avatar:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    avatarSize: "24px",
  });
  senderValue.value = "";
};
onMounted(() => {
  getUser();
  showHeaderFlog.value = true;
  senderRef.value.openHeader();
});
function getUser() {
  console.log(router, "routerrouterrouterrouterrouter");
  request
    .get(loginUserApi)
    .then((response) => {
      console.log("响应数据:", response);
      const { code } = response;
      if (code == 200) {
        localStorage.setItem("userData", response);
      }
    })
    .catch((error) => {
      console.log("请求出错:", error);
      if (error == "未登录，请先登录") {
        console.log(router, "routerrouterrouterrouterrouter");
        router.push("/login");
      }
      const { code, message } = error.response.data;
      if (code == 409) {
        ElMessage({
          message: message,
          type: "error",
        });
      } else {
        ElMessage({
          message: error.response.data,
          type: "error",
        });
      }
    });
}
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
  background: #fafafa;
  padding: 10px;
}
.openCom .title {
  line-height: 50px;
  color: #4d6bfe;
  background: #dbeafe;
  border: 1px solid #dbeafe;
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
