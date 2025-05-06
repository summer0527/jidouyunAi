<template>
  <div style="float: left; width: 100%; height: 100%">
    <!--左侧对话列表 -->
    <!-- <transition name="collapse">
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
	  </transition> -->
    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
    <!-- 右侧对话内容 -->
    <div
      style="width: 100%; float: left; height: 100%; background-color: #ffffff;padding: 10px;box-sizing: border-box;"
    >
      <!-- 头部专业选择 -->
      
      <v-speciality></v-speciality>

      <!-- 专业选择结束 -->
      <!-- 7种场景展示 -->
      
      <v-scence :isShowScene="isShowScene"></v-scence>

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
      <!-- 对话内容列表 -->
      <div class="list" v-if="isShowList" style="height: 85%">
        <!-- <BubbleList :list="list" max-height="100%">
			<template #content="{ item  }">
			  <el-card v-if="item.role === 'ai'">
				<template #header>
				  <span>代码块展示</span>
				</template>
				<pre><code class="language-typescript">{{ item.content }}</code></pre>
			  </el-card>
			</template>
		  </BubbleList> -->
        <v-bubList :list="list" @handleRate="handleRate"></v-bubList>
		<el-divider />

        <!-- <Typewriter :content="contentData" /> -->
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
          submit-type="enter"
          @submit="handleSubmit"
          style="position: fixed; bottom: 30px; width: 60%"
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
              <!-- <el-tooltip content="添加图片" placement="top">
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
              </el-tooltip> -->
              <el-tooltip content="发送" placement="top">
                <el-button
                  circle
                  @click="handleSubmit"
                >
                  <!-- <el-icon><Position /></el-icon> -->
                  <el-icon>
                    <i
                      class="iconfont icon-fasong"
                      style="font-size: 14px; color: #1570C4"
                    ></i>
                  </el-icon>
                </el-button>
              </el-tooltip>
              <el-tooltip content="终止" placement="top">
                <el-button
                  circle
                  style="margin-left: 5px;font-size: 16px;"
                  @click="stopFlowFunction"
                >
                <el-icon>
                      <i
                        class="iconfont icon-zanting"
                        style="font-size: 12px;color: #1570C4;"
                      ></i>
                    </el-icon>
                  <!-- <el-icon><VideoPlay /></el-icon> -->
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
// 示例代码
const code = ref(`
  function greet(name: string) {
	return \`Hello, \${name}!\`;
  }
  
  const message = greet('World');
  console.log(message);
  `);
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
} from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";

import type {
  BubbleListItemProps,
  BubbleListProps,
} from "vue-element-plus-x/types/components/BubbleList/types";
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
  runQaApi,
  stopQaApi,
  stopQaFlowApi,
} from "../../api/index";
import request from "../../utils/request";
import type { ElForm } from "element-plus";
import axios, { AxiosResponse } from "axios";
import { useXStream } from "vue-element-plus-x";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import vBubList from "../../components/bubList.vue";
import vScence from "../../components/scence.vue";
import vSpeciality from "../../components/speciality.vue";

const activeName = ref("enter");
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const sidebar = useSidebarStore();
const imageUrl = ref("");
const router = useRouter();
const isShowScene = ref(true);
const isShowDialog = ref(false);
const sqlType = ref("ui方向");
const sqlTypeOptions = ref([
  { label: "ui方向", value: "ui方向" },
  { label: "Vue开发方向", value: "Vue开发方向" },
  { label: "React开发方向", value: "React开发方向" },
  { label: "数据库开发方向", value: "数据库开发方向" },
  { label: "python开发方向", value: "python开发方向" },
  { label: "java开发方向", value: "java开发方向" },
  { label: "golang开发方向", value: "golang开发方向" },
  { label: "大数据开发方向", value: "大数据开发方向" },
]);
interface ListData {
  id: string;
  title: string;
}
interface List {
  conversation_id?: string;
  content?: string;
  role?: string;
  placement?: string;
  avatar?: string;
  avatarSize?: string;
  israte?: boolean;
  rate?: string;
  loading?: boolean;
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
const listData = reactive<ListData[]>([]);
const translateForm = reactive<TranslateForm>({
  file: null,
  type: "",
  content: "",
  languages: "",
});
const ruleFormRef = ref<FormInstance>();
const handleRate = () => {};
const handleStop = () => {};
const stopFunction = (id:any) => {
  request
    .post(stopQaApi + id + "/stop")
    .then((response) => {
      console.log("响应数据:", response);
      const {
        code,
        data: { select_one },
      } = response.data;
      if (code == 200) {
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
    content: "💖 感谢使用 吉斗云AI ! 你的支持，是我们最强动力 ~",
    role: "ai",
    placement: "start",
    avatar: "/image/logo.png",
    avatarSize: "50px",
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

const fetchStreamData = () => {
  const contentData = ref("");
  const loadingData = ref(true);

  const rundata = {
    inputs: {
      one: senderValue.value,
      one_class: sqlType.value,
      additionalProp3: "string",
    },
    response_mode: "streaming",
    user: "string",
  };
  // 如果之前有请求正在进行，先取消它
  if (abortController) {
    abortController.abort();
  }
  // 创建新的 AbortController 实例
  abortController = new AbortController();
  const signal = abortController.signal;
  list.value.push({
    content: senderValue.value,
    role: "user",
    placement: "end",
    avatar: "https://avatars.githubusercontent.com/u/76239030?v=4",
    avatarSize: "50px",
    israte: false,
    rate: "null",
    loading: false,
  });
  list.value.push({
    content: contentData,
    // content: aidata.value,
    loading: loadingData,
    role: "ai",
    placement: "start",
    avatar: "/image/logo.png",
    avatarSize: "50px",
    israte: false,
    rate: "null",
  });
  console.log(contentData, "contentDatacontentDatacontentDatacontentData");
  fetchEventSource(runQaApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    signal,
    body: JSON.stringify(rundata),
    onmessage: (event) => {
      const jsonData = JSON.parse(event.data);
      senderValue.value = "";
      console.log(jsonData.event);
      if (jsonData.event == "workflow_started") {
        task_id.value = jsonData.task_id;
      } else if (jsonData.event == "text_chunk") {
        contentData.value += jsonData.data.text ? jsonData.data.text : "";
        loadingData.value = false;
      } else if (jsonData.event == "workflow_finished") {
        contentData.value += jsonData.data.text ? jsonData.data.text : "";
        loadingData.value = false;

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
const stopSSE = () => {
  if (abortController) {
    abortController.abort();
    abortController = null;
  }
};

const stopFlowFunction = () => {
  request
    .post(stopQaApi + task_id.value + "/stop", {
      user: "string",
    })
    .then((response) => {
      console.log("响应数据:", response);
      const { result } = response.data;
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
  showHeaderFlog.value = true;
  senderRef.value.openHeader();
});

function getUser() {
  console.log(router, "routerrouterrouterrouterrouter");
  request
    .get(loginUserApi)
    .then((response) => {
      console.log("响应数据:", response);
      const { code } = response.data;
      if (code == 200) {
        localStorage.setItem("userData", response.data);
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
</style>
