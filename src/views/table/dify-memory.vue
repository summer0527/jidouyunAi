<template>
  <div style="float: left; width: 100%; height: 100%">
    <!--左侧对话列表 -->
    <v-talkList :listData="listData" @handleOpenC="handleOpenC" @handleRestNameCom="handleRestNameCom" @handleOpenConstion="handleOpenConstion" @handleRestName="handleRestName" @handleDelet="handleDelet"></v-talkList>
   
    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
    <!-- 右侧对话内容 -->
     
    <div
      style="width: 89%; float: left; height: 100%; background-color: #ffffff;padding: 10px 0;box-sizing: border-box;"
    >
      <!-- 头部专业选择 -->
      
      <!-- <v-speciality></v-speciality> -->

      <!-- 专业选择结束 -->
      <!-- 7种场景展示 -->
     

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
      <div class="list" v-if="isShowList" style="height: 85%">
       
        <v-bubList :list="list" @handleRate="handleRate"></v-bubList>
		<el-divider />

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
        <div style="position: fixed; bottom: 60px; width: 60%">
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
          style="position: fixed; bottom: 10px; width: 60%"
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
                <!-- style="rotate: -45deg" -->
                
                <el-icon>
                    <i
                      class="iconfont icon-fasong"
                      style="font-size: 14px; color: #1570C4"
                    ></i>
                  </el-icon>
                  <!-- <el-icon><Position /></el-icon> -->
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
// import type {
//   BubbleListItemProps,
//   BubbleListProps,
// } from "element-plus-x/bubbleList/types";
import type {
  BubbleListItemProps,
  BubbleListProps,
} from "vue-element-plus-x/types/components/BubbleList/types";
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
import vBubList from "../../components/bubList.vue";
import vTalkList from "../../components/talkList.vue";
import vScence from "../../components/scence.vue";
import vSpeciality from "../../components/speciality.vue";

const mode = ref("javascript");
const theme = ref("monokai");
const activeName = ref("enter");
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
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
  conversation_id?: string;
  content?: string;
  role?: string;
  placement?: string;
  avatar: string;
  avatarSize?: string;
  israte?: boolean;
  rate?: string;
  message_id?:string;
  loading?:boolean
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
const handleRestName = (item:any) => {
  item.isEditHist = true;
};
// 重命名-编辑完毕
const handleRestNameCom = (item:any) => {
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
      // const { conversations } = response.data;
      listData.value = [...listData.value, ... response.data];
      // console.log()
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
interface MyAxiosResponse {
  result: any; // 根据实际情况确定具体类型
  // 其他可能存在的属性
}
const handleRate = (dataS: any) => {
  console.log(dataS.item, "itemitemitem");
  if (dataS.type == dataS.item.rate) {
    dataS.type = "null";
  }
  request
    .post(rateMemoryApi + dataS.message_id + "/feedbacks", {
      user: localStorage.getItem("s_name"),
      rating: dataS.type,
      content: dataS.data,
    })
    .then((response) => {
      console.log("响应数据:", response);
      const {result} = response.data
      if (result == "success") {
        if (dataS.type == "like") {
          dataS.item.rate = "like";
        } else if (dataS.type == "dislike") {
          dataS.item.rate = "dislike";
        } else {
          dataS.item.rate = "null";
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

const stopFunction = (id:any) => {
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
const handleDelet = (pa:any) => {
  ElMessageBox.confirm("是否确定删除此条对话?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "success",
  })
    .then(() => {
      const dy = {
        conversation_id: pa.conversation_id,
      };
      request
        .get(deleMemoryApi  + pa.s_id)
        .then((response) => {
          console.log("响应数据:", response);
          ElMessage({
            message: "删除成功",
            type: "success",
            onClose: function () {
              historyListFunction();
              if (list.value.length>0){
                if (pa.conversation_id == list.value[0].conversation_id) {
                handleOpenC()

              }
              }
              
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
// 开启历史的对话
const handleOpenConstion = (id:any) => {
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
      const { data } = response.data;
      isShowList.value = true;
      isShowScene.value = false;
      list.value = [];
      sqlType.value = data[0].inputs.type;
      data.forEach((ele:any) => {
        list.value.push({
          conversation_id: ele.conversation_id,
          content: ele.names,
          role: "user",
          placement: "end",
          avatar: "/image/avtor.jpg",
          avatarSize: "50px",
          israte: false,
          rate: "null",
        });
        list.value.push({
          conversation_id: ele.conversation_id,
          content: ele.answer,
          loading: false,
          role: "ai",
          placement: "start",
          avatar: "/image/logono.png",
          avatarSize: "50px",
          israte: true,
          rate: "null",
          message_id:ele.message_id
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
const extractCode = (content:any) => {
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
    query: senderValue.value,

    },
    conversation_id: list.value.length>0?list.value[0].conversation_id
      ? list.value[0].conversation_id
      : "":'',
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
    avatar: "/image/avtor.jpg",
    avatarSize: "50px",
    israte: false,
    rate: "null",
  });
  list.value.push({
    conversation_id: "",
    content: contentData.value,
    // code: codeContent,
    // mode: codemode,
    // content: aidata.value,
    loading: loadingData.value,
    role: "ai",
    placement: "start",
    avatar: "/image/logo.png",
    avatarSize: "50px",
    israte: rateData.value,
    rate: "null",
    message_id:''
  });
  console.log(contentData, "contentDatacontentDatacontentDatacontentData");
  const name = senderValue.value;
  senderValue.value = "";
let flag = true
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
        list.value[list.value.length-1].message_id = jsonData.message_id;
        list.value[list.value.length-1].conversation_id = jsonData.conversation_id;
        list.value[list.value.length-2].conversation_id = jsonData.conversation_id;


        list.value[0].conversation_id = jsonData.conversation_id;
        list.value[1].conversation_id = jsonData.conversation_id;
      } else if (jsonData.event == "message") {
        console.log(jsonData.answer, "jsonData.data.text");
        const n = 0;
        if (jsonData.answer=='<think>') {
          flag=false
        } else if (jsonData.answer=='</think>') {
          flag=true

        }
        if (flag&&jsonData.answer!='</think>') {
          contentData.value += jsonData.answer ? jsonData.answer : "";
        list.value[list.value.length-1].content = contentData.value.replace(/&/g, '&amp;')
     .replace(/</g, '&lt;')
     .replace(/>/g, '&gt;');

        // list.value[list.value.length-1].content += jsonData.answer ? jsonData.answer : "";
        // console.log(list.value[list.value.length-1].content,'22222')
        // const result = extractCode(contentData.value);
        // if (result) {
        //   codeContent.value = result.code;
        //   codemode.value = result.mode;
        // }
        loadingData.value = false;

        list.value[list.value.length-1].loading=false;
        list.value[list.value.length-1].israte=true;


        // rateData.value = true;
        }
      
        
      } else if (jsonData.event == "workflow_finished") {
        contentData.value += jsonData.answer ? jsonData.answer : "";
        list.value[list.value.length-1].content = contentData.value.replace(/&/g, '&amp;')
     .replace(/</g, '&lt;')
     .replace(/>/g, '&gt;');
        // list.value[list.value.length-1].content += jsonData.answer ? jsonData.answer : "";

        // const result = extractCode(contentData.value);
        // if (result) {
        //   codeContent.value = result.code;
        //   codemode.value = result.mode;
        // }
        // loadingData.value = false;
        addMessageFunction(
          rundata,

          contentData.value,
          name,
          sqlType.value,
          conversation_id.value,
          message_id.value
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
  rundata:any,
  contentData:any,
  name:string,
  inputs:any,
  conversation_id:string,
  message_id:string
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
      message_id:message_id
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
  historyListFunction();
  showHeaderFlog.value = true;
  senderRef.value.openHeader();
});

function getUser() {
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
.action-list-self-wrap {
  display: flex !important
;
  justify-content: center !important;
  align-items: center !important;
}
</style>
