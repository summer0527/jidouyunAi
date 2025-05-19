<template>
    <div style="float: left; width: 100%; height: 100%;display: flex
;
    justify-content: center;" class='bgstyle'>
     
      <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" />
      </el-dialog>
       
      <div
        style="width: 100%; float: left; height: 100%;padding: 10px;box-sizing: border-box;"
      >
       
        <!-- <v-speciality></v-speciality> -->
  
      
       
        <v-scence :isShowScene="isShowScene"></v-scence>
  
     
   
      
  
       
      </div>
      <p style="position: fixed; bottom: 2%; z-index: 10000000; color: #000">
        吉林省吉斗云科技有限公司版权所有 Copyright © JiDouYun.com, All Rights
        Reserved.
      </p>
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
  // import type {
  //   BubbleListItemProps,
  //   BubbleListProps,
  // } from "element-plus-x/bubbleList/types";
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
  } from "../api/index";
  import request from "../utils/request";
  import type { ElForm } from "element-plus";
  import axios, { AxiosResponse } from "axios";
  import { useXStream } from "vue-element-plus-x";
  import { fetchEventSource } from "@microsoft/fetch-event-source";
  import vBubList from "../components/bubList.vue";
  import vScence from "../components/scence.vue";
  import vSpeciality from "../components/speciality.vue";
  
  const dialogImageUrl = ref("");
  const dialogVisible = ref(false);
  const sidebar = useSidebarStore();
  const imageUrl = ref("");
  const router = useRouter();
  const isShowScene = ref(true);
  const isShowDialog = ref(false);
  const sqlType = ref("mysql");
  const sqlTypeOptions = ref([
    { label: "mysql", value: "mysql" },
    { label: "mongodb", value: "mongodb" },
    { label: "redis", value: "redis" },
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
  const handleRate = () => {};
  
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
  const handleStop = () => {};
  
 
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
    // console.log("开启新对话");
    // let lengtht = listData.length.toString()
    // const length = eval(lengtht + 1);
    // const titleC = "新对话" + length;
    // listData.push({ id: length, title: titleC });
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
  };
  let abortController: AbortController | null = null;
  // 存储流式响应的文本
  const task_id = ref("");
  
 
  const stopSSE = () => {
    if (abortController) {
      abortController.abort();
      abortController = null;
    }
  };
  
 
  onMounted(() => {
    
    getUser();

   
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
  </script>
  
  <style scoped lang="less">
  .bgstyle{
   background-image:url('/image/bgw.jpg');
   background-size: cover;
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
  