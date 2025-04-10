<template>
  <div style="float: left; width: 100%; height: 100%">
    <!--左侧对话列表 -->
    <transition name="collapse">
      <div class="openCom" v-if="sidebar.collapse">
        <div
          @click="handleOpenC"
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
                      @blur="handleRestNameCom(item)"
                      style="width: 100%"
                    />
                    <span
                      v-else
                      style="width: 80%; text-align: left"
                      @click="handleOpenConstion(item.conversation_id)"
                      >{{ item.names }}</span
                    >
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item @click="handleRestName(item)">
                        <el-icon><EditPen /></el-icon>
                        <span>重命名</span>
                      </el-dropdown-item>
                      <el-dropdown-item
                        @click="handleDelet(item.conversation_id, item.s_id)"
                      >
                        <el-icon><Delete /></el-icon>
                        <span>删除</span>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                   <!-- 自定义图标 -->
      <template #button-content>
        <i class="fa-solid fa-angle-down" style="margin-left: 5px;"></i>
      </template>
                </el-dropdown>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
    <!-- 右侧对话内容 -->
    <div
      style="width: 88%; float: left; height: 100%; background-color: #ffffff"
    >
      <!-- 头部专业选择 -->
      <div>
        <el-dropdown v-for="(item, index) in specialityList" :key="index">
          <el-button
            style="margin-right: 10px; margin-left: 10px; margin-top: 10px"
          >
            {{ item }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <!-- 专业选择结束 -->
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
            <img class="logo mr10" src="/public/image/logo.png" alt="" />

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
        <div
          style="
            margin-top: 10px;
            margin-bottom: 10px;
            border: 1px solid #bbbcc5;
            border-radius: 10px;
            padding: 50px 20px;
          "
        >
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
              <el-input
                v-model="translateForm.content"
                type="textarea"
                :rows="5"
              />
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
<!-- <v-Bubblist></v-bubblist> -->

      <!-- 对话内容列表 -->
      <div class="list" v-if="isShowList" style="height: 70%">
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
      <!-- 选择数据库类型 -->
      <div
        style="
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <div style="position: fixed; bottom: 110px; width: 60%">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="类型" class="is-required">
              <el-select
                v-model="sqlType"
                placeholder="请选择"
                clearable
                style="width: 200px"
              >
                <el-option
                  v-for="item in sqlTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 对话输入框 -->

      <div
        style="
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <Sender
          ref="senderRef"
          v-model="senderValue"
          style="position: fixed; bottom: 30px; width: 60%"
          submit-type="enter"
          @submit="handleSubmit"
        >
          <template #prefix>
            <div class="prefix-self-wrap">
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
              <el-tooltip content="添加图片" placement="top">
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
              </el-tooltip>
              <el-tooltip content="发送" placement="top">
                <el-button
                  type="primary"
                  circle
                  style="rotate: -45deg"
                  @click="handleSubmit"
                >
                  <el-icon><Position /></el-icon>
                </el-button>
              </el-tooltip>
              <el-tooltip content="终止" placement="top">
                <el-button
                  circle
                  style="rotate: -45deg"
                  @click="stopFlowFunction"
                >
                  <el-icon><VideoPlay /></el-icon>
                </el-button>
              </el-tooltip>
            </div>
          </template>
        </Sender>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 示例代码

const contentT = ref(JSON.stringify({ message: "Hello Ace" }));
import { ref, reactive, onMounted, Ref, watch } from "vue";
import { Bubble, Sender, Typewriter } from "vue-element-plus-x";
import { BubbleList } from "vue-element-plus-x";
import { useRouter } from "vue-router";
import {
  CircleClose,
  Link,
  Delete,
  Download,
  Plus,
  ZoomIn,
  ArrowDown,
  EditPen,
} from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
import type {
  BubbleListItemProps,
  BubbleListProps,
} from "element-plus-x/bubbleList/types";
import { useSidebarStore } from "@/store/sidebar";
import type {
  UploadProps,
  FormInstance,
  FormRules,
  UploadFile,
} from "element-plus";
import {
  loginUserApi,
  difyApi,
  runMemoryApi,
  stopMemoryApi,
  rateMemoryApi,
  historyMemoryApi,
  deleMemoryApi,
  getHisMemoryApi,
  resetNameMemoryApi,
  addMemoryApi,
} from "../../api/index";
import request from "../../utils/request";
import type { ElForm } from "element-plus";
import axios, { AxiosResponse } from "axios";
import { useXStream } from "vue-element-plus-x";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import { b } from "vite/dist/node/moduleRunnerTransport.d-CXw_Ws6P";
// import vBubblist from '../../components/bubblist.vue';

const mode = ref("javascript");
const theme = ref("monokai");
const activeName = ref("enter");
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const sidebar = useSidebarStore();
const imageUrl = ref("");
const router = useRouter();
const isShowScene = ref(true);
const isShowDialog = ref(false);
const sqlType = ref("测绘专业AI助手");
const sqlTypeOptions = ref([
  { label: "测绘专业AI助手", value: "测绘专业AI助手" },
  { label: "计算机专业AI助手", value: "计算机专业AI助手" },
  { label: "汽车专业AI助手", value: "汽车专业AI助手" },
  { label: "医疗专业AI助手", value: "医疗专业AI助手" },
  { label: "外语专业AI助手", value: "外语专业AI助手" },
]);

interface ListData {
  id: string;
  title: string;
  names: string;
  introduction: string;
  inputs: object;
  status: string;
  isEditHist?: boolean;
  conversation_id: string;
}
interface List {
  conversation_id: string;
  content: string;
  role: string;
  placement: string;
  avatar: string;
  avatarSize: string;
  israte: boolean;
  rate: string;
}
interface TranslateForm {
  file: File | null;
  type: string;
  content: string;
  languages: string;
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
const listData = ref<ListData[]>([]);
const translateForm = reactive<TranslateForm>({
  file: null,
  type: "",
  content: "",
  languages: "",
});

// 重命名接口
const handleRestName = (item) => {
  item.isEditHist = true;
};
// 编辑完毕
const handleRestNameCom = (item) => {
  item.isEditHist = false;

  request
    .put(resetNameMemoryApi + item.conversation_id + "/name/", {
      names: item.names,
      conversation_id: item.conversation_id,
      users: localStorage.getItem("s_name"),
    })
    .then((response) => {
      console.log("响应数据:", response);
      historyListFunction();
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
};
// 会话历史列表
const historyListFunction = async () => {
  const historyData = {
    users: localStorage.getItem("s_name"),
    limit: 100,
  };
  listData.value = [];
  await request
    .get(historyMemoryApi, {
      params: historyData,
    })
    .then((response) => {
      console.log("响应数据:", response);
      // listData.push({ id: length, title: titleC });
      const { data } = response;
      listData.value = [...listData.value, ...data];
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
};
// 点赞
const message_id = ref("");
const rate = ref(false);
const disrate = ref(false);
const handleRate = (item, type, data) => {
  console.log(item, "itemitemitem");
  if (type == item.rate) {
    type = "null";
  }
  request
    .post(rateMemoryApi + message_id.value + "/feedbacks", {
      user: localStorage.getItem("s_name"),
      rating: type,
      content: data,
    })
    .then((response) => {
      console.log("响应数据:", response);

      if (response.result == "success") {
        if (type == "like") {
          item.rate = "like";
        } else if (type == "dislike") {
          item.rate = "dislike";
        } else {
          item.rate = "null";
        }
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
};
const ruleFormRef = ref<FormInstance>();
const handleStop = () => {};
const stopFunction = (id) => {
  request
    .post(stopMemoryApi + id + "/stop?user=" + localStorage.getItem("s_name"), {
      user: localStorage.getItem("s_name"),
      task_id: task_id.value,
    })
    .then((response) => {
      console.log("响应数据:", response);
      const {
        code,
        data: { select_one },
      } = response;
      if (code == 200) {
        specialityList.value = select_one;
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
};
console.log(ruleFormRef, "09909090909090909090909090");
const rules = reactive<FormRules<TranslateForm>>({
  file: [
    {
      required: true,
      message: "请上传文件",
      trigger: "blur",
    },
  ],
  type: [{ required: true, message: "请选择要翻译的类型", trigger: "blur" }],
  content: [{ required: true, message: "请输入要翻译的内容", trigger: "blur" }],
  languages: [
    { required: true, message: "请选择要翻译的语种", trigger: "blur" },
  ],
});

const list = ref<List[]>([
  {
    conversation_id: "",
    content: "💖 感谢使用 吉斗云AI ! 你的支持，是我们最强动力 ~",
    role: "ai",
    placement: "start",
    avatar: "/public/image/logo.png",
    avatarSize: "24px",
    israte: false,
    rate: "null",
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
  isShowList.value = false;
  isShowScene.value = true;
  list.value = [];
};
// 删除对话
const handleDelet = (id: string, s_id: number) => {
  ElMessageBox.confirm("是否确定删除此条对话?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "success",
  })
    .then(() => {
      // listData.value.forEach((item, index) => {
      //   if (item.id == id) {
      //     listData.value.splice(index, 1);
      //   }
      // });

      // ElMessage({
      //   message: "删除成功",
      //   type: "success",
      // });
      const dy = {
        conversation_id: id,
      };
      request
        .delete(deleMemoryApi + id + "/" + s_id, {
          data: { user: localStorage.getItem("s_name") },
        })
        .then((response) => {
          console.log("响应数据:", response);
          ElMessage({
            message: "删除成功",
            type: "success",
            onClose: function () {
              historyListFunction();
            },
          });
        })
        .catch((error) => {
          console.log("请求出错:", error);
          const { message, code } = error.response.data;
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
    })
    .catch(() => {
      ElMessage({
        message: "取消操作成功",
        type: "success",
      });
    });
};
// 开启老的对话
const handleOpenConstion = (id) => {
  const hisOpParams = {
    conversation_id: id,
    user: localStorage.getItem("s_name"),
  };
  request
    .get(getHisMemoryApi, {
      params: hisOpParams,
    })
    .then((response) => {
      console.log("响应数据:", response);
      const { data } = response;
      isShowList.value = true;
      isShowScene.value = false;
      list.value = [];
      data.forEach((ele) => {
        list.value.push({
          conversation_id: ele.conversation_id,
          content: ele.query,
          role: "user",
          placement: "end",
          avatar: "https://avatars.githubusercontent.com/u/76239030?v=4",
          avatarSize: "24px",
          israte: false,
          rate: "null",
        });
        list.value.push({
          conversation_id: ele.conversation_id,
          content: ele.answer,
          loading: false,
          role: "ai",
          placement: "start",
          avatar: "/public/image/logo.png",
          avatarSize: "24px",
          israte: true,
          rate: "null",
        });
      });
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
};
// 输入内容提交
const handleSubmit = (formEl: FormInstance | undefined) => {
  console.log(senderValue.value, "=-=-=-=-=-=-=-=-=");
  isShowScene.value = false;
  isShowList.value = true;
  if (!sqlType.value) {
    ElMessage({
      message: "请选择数据库类型",
      type: "error",
    });
    return;
  }
  if (!senderValue.value) {
    ElMessage({
      message: "请输入要查询的数据",
      type: "error",
    });
    return;
  }
  fetchStreamData();
};
let abortController: AbortController | null = null;
// 存储流式响应的文本
const task_id = ref("");
const conversation_id = ref("");

// 提取代码块
const extractCode = (content) => {
  const codeRegex = /```(\w+)\s*([\s\S]*?)```/;
  const match = content.match(codeRegex);
  if (match) {
    return {
      mode: match[1],
      code: match[2].trim(),
    };
  }
  return null;
};

const fetchStreamData = () => {
  const rateData = ref(false);
  const loadingData = ref(true);

  const contentData = ref("");
  const codeContent = ref("");
  const codemode = ref("");
  const s_name = localStorage.getItem("s_name");

  const rundata = {
    query: senderValue.value,
    inputs: {
      type: sqlType.value,
    },
    conversation_id: list.value[0].conversation_id
      ? list.value[0].conversation_id
      : "",
    response_mode: "streaming",
    user: s_name,
    auto_generate_name: true,
  };
  // 如果之前有请求正在进行，先取消它
  if (abortController) {
    abortController.abort();
  }
  // 创建新的 AbortController 实例
  abortController = new AbortController();
  const signal = abortController.signal;
  list.value.push({
    conversation_id: "",
    content: senderValue.value,
    role: "user",
    placement: "end",
    avatar: "https://avatars.githubusercontent.com/u/76239030?v=4",
    avatarSize: "24px",
    israte: false,
    rate: "null",
  });
  list.value.push({
    conversation_id: "",
    content: contentData,
    code: codeContent,
    mode: codemode,
    // content: aidata.value,
    loading: loadingData,
    role: "ai",
    placement: "start",
    avatar: "/public/image/logo.png",
    avatarSize: "24px",
    israte: rateData,
    rate: "null",
  });
  console.log(contentData, "contentDatacontentDatacontentDatacontentData");
  const name = senderValue.value;
  senderValue.value = "";

  fetchEventSource(runMemoryApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    signal,
    body: JSON.stringify(rundata),
    onmessage: (event) => {
      const jsonData = JSON.parse(event.data);
      console.log(jsonData.event);
      if (jsonData.event == "workflow_started") {
        task_id.value = jsonData.task_id;
        message_id.value = jsonData.message_id;
        conversation_id.value = jsonData.conversation_id;
        list.value[0].conversation_id = jsonData.conversation_id;
        list.value[1].conversation_id = jsonData.conversation_id;
      } else if (jsonData.event == "message") {
        console.log(jsonData.answer, "jsonData.data.text");
        const n = 0;

        contentData.value += jsonData.answer ? jsonData.answer : "";

        const result = extractCode(contentData.value);
        if (result) {
          codeContent.value = result.code;
          codemode.value = result.mode;
        }
        loadingData.value = false;
        rateData.value = true;
      } else if (jsonData.event == "workflow_finished") {
        contentData.value += jsonData.answer ? jsonData.answer : "";

        const result = extractCode(contentData.value);
        if (result) {
          codeContent.value = result.code;
          codemode.value = result.mode;
        }
        loadingData.value = false;
        addMessageFunction(
          rundata,

          contentData.value,
          name,
          sqlType.value,
          conversation_id.value
        );

        stopFlowFunction();
        stopSSE();
      }
      // receivedMessages.value.push(event.data);
    },
    onerror: (err) => {
      console.error("流式请求错误:", err);
    },
  });
};
const addMessageFunction = async (
  rundata,
  contentData,
  name,
  inputs,
  conversation_id
) => {
  await request
    .post(addMemoryApi, {
      users: localStorage.getItem("s_name"),
      names: name,
      inputs: {
        type: inputs,
      },
      introduction: contentData,
      conversation_id: conversation_id,
    })
    .then((response) => {
      console.log("响应数据:", response);
      // 如果没有conversation_id就是新的对话放到历史列表当中
      if (!rundata.conversation_id) {
        historyListFunction();
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
};
const stopSSE = () => {
  if (abortController) {
    abortController.abort();
    abortController = null;
  }
};

const stopFlowFunction = () => {
  request
    .post(
      stopMemoryApi +
        task_id.value +
        "/stop?user=" +
        localStorage.getItem("s_name"),
      {
        user: localStorage.getItem("s_name"),
        task_id: task_id.value,
      }
    )
    .then((response) => {
      console.log("响应数据:", response);
      const { result } = response;
      if (result == "success") {
        stopSSE();
      }
    })
    .catch((error) => {
      console.log("请求出错:", error);
    });
};
onMounted(() => {
  getUser();
  searchSpecialityFunction();
  historyListFunction();
  showHeaderFlog.value = true;
  senderRef.value.openHeader();
});
const specialityList = ref([]);
const searchSpecialityFunction = () => {
  request
    .get(difyApi)
    .then((response) => {
      console.log("响应数据:", response);
      const {
        code,
        data: { select_one },
      } = response;
      if (code == 200) {
        specialityList.value = select_one;
      }
    })
    .catch((error) => {
      console.log("请求出错:", error);
      if (error == "未登录，请先登录") {
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
};
function getUser() {
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
</style>
