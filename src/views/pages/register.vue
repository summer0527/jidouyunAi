<template>
  <div class="login-bg" id="login-wrap">
    <div
      style="
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 4%;
        padding-right: 4%;
        box-sizing: border-box;
      "
    >
      <v-homeStyle></v-homeStyle>
      <div class="login-container">
        <div class="login-header">
          <img class="logo mr10" src="../../assets/img/logo.png" alt="" />
          <div class="login-title">吉斗云AI-校园场景风向标</div>
        </div>

        <el-form
          :model="param"
          :rules="rules"
          ref="register"
          style="max-width: 600px"
          label-width="auto"
          size="large"
        >
          <el-form-item prop="s_name" label="用户名">
            <el-input v-model="param.s_name" placeholder="请输入用户名"  style="width: 82%;border-bottom-right-radius: 0 !important;
		  border-top-right-radius: 0 !important;" >
              <!-- <template #append>
                <el-icon><UserFilled /></el-icon>
              </template> -->
            </el-input>
            <div  class='append' style="box-shadow: 0 1px 0 0 #dcdfe6 inset, 0 -1px 0 0 #dcdfe6 inset, -1px 0 0 0 #dcdfe6 inset;width:18%;float: left;">
              
              <el-icon><UserFilled /></el-icon>
            </div>
          </el-form-item>
          <el-form-item prop="s_student_id" label="学号">
            <el-input v-model="param.s_student_id" placeholder="请输入学号" style="width: 82%;border-bottom-right-radius: 0 !important;
		  border-top-right-radius: 0 !important;">
              <!-- <template #append>
                <el-icon><Coin /></el-icon>
              </template> -->
            </el-input>
            <div  class='Coin append' style="box-shadow: 0 1px 0 0 #dcdfe6 inset, 0 -1px 0 0 #dcdfe6 inset, -1px 0 0 0 #dcdfe6 inset;width:18%;float: left;">
              
              <el-icon><Coin /></el-icon>
            </div>
          </el-form-item>

          <el-form-item prop="s_college" label="学院">
            <el-input v-model="param.s_college" placeholder="请输入学院" style="width: 82%;border-bottom-right-radius: 0 !important;
		  border-top-right-radius: 0 !important;">
              <!-- <template #append>
                <el-icon><School /></el-icon>
              </template> -->
            </el-input>
            <div  class='Coin append' style="box-shadow: 0 1px 0 0 #dcdfe6 inset, 0 -1px 0 0 #dcdfe6 inset, -1px 0 0 0 #dcdfe6 inset;width:18%;float: left;">
              
              <el-icon><School /></el-icon>
            </div>
          </el-form-item>
          <el-form-item prop="s_speciality" label="专业">
            <!-- <el-input v-model="param.s_speciality" placeholder="请输入专业"> -->
            <el-select
              v-model="param.s_speciality"
              placeholder="请选择你的专业"
              clearable
              style="width: 82%;border-bottom-right-radius: 0 !important;
		  border-top-right-radius: 0 !important;" 
              class="myselfSelect"
            >
              <el-option v-for="(item,index) in spData"  :label="item.label" :value="item.value" />
              <!-- <el-option label="外语专业" value="外语专业" />
              <el-option label="企业专业" value="企业专业" />
              <el-option label="心理专业" value="心理专业" />
              <el-option label="汽车专业" value="汽车专业" />
              <el-option label="医学专业" value="医学专业" /> -->

             
              <!-- <template>
                <el-icon><Search /></el-icon>
              </template> -->
            </el-select>
            <div  class='append' style="box-shadow: 0 1px 0 0 #dcdfe6 inset, 0 -1px 0 0 #dcdfe6 inset, -1px 0 0 0 #dcdfe6 inset;width:18%;float: left;">
              
              <el-icon><Guide /></el-icon>
            </div>
            <!-- </el-input> -->
          </el-form-item>

          <el-form-item prop="s_pass" label="密码">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="param.s_pass"
              autocomplete="new-password"
               style="width: 82%;border-bottom-right-radius: 0 !important;
		  border-top-right-radius: 0 !important;"
            >
              <!-- <template #append>
                <el-icon>
                  <View />
                </el-icon>
              </template> -->
            </el-input>
            <div  class='View append' style="box-shadow: 0 1px 0 0 #dcdfe6 inset, 0 -1px 0 0 #dcdfe6 inset, -1px 0 0 0 #dcdfe6 inset;width:18%;float: left;">
              
              <el-icon><School /></el-icon>
            </div>
            <span class="passTip">密码为6到12位的英文字符</span>
          </el-form-item>
          <el-form-item prop="password" label="确认密码">
            <el-input
              type="password"
              placeholder="请再次输入密码"
              v-model="param.password"
              @keydown.enter="submitForm(register)"
               style="width: 82%;border-bottom-right-radius: 0 !important;
		  border-top-right-radius: 0 !important;"
            >
              <!-- <template #append>
                <el-icon><SuccessFilled /></el-icon>
              </template> -->
             
            </el-input>

            <div  class='View append' style="box-shadow: 0 1px 0 0 #dcdfe6 inset, 0 -1px 0 0 #dcdfe6 inset, -1px 0 0 0 #dcdfe6 inset;width:18%;float: left;">
              
              <el-icon><SuccessFilled /></el-icon>
            </div>
          </el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            size="large"
            @click="submitForm(register)"
            >立即注册</el-button
          >
        </el-form>

        <p class="login-text">
          已有账号？<el-link type="primary" @click="$router.push('/login')"
            >去登录</el-link
          >
        </p>
      </div>
      <p style="position: fixed; bottom: 2%; z-index: 10000000; color: #ffffff">
        吉林省吉斗云科技有限公司版权所有 Copyright © JiDouYun.com, All Rights
        Reserved.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import vHomeStyle from "../../components/homeStyle.vue";

import { useRouter } from "vue-router";
import {
  ElMessage,
  ElMessageBox,
  type FormInstance,
  type FormRules,
} from "element-plus";
// import { AbstractShapeBg } from "../../../build/jsm/AbstractShapeBg.module.js";
// import meesage2 from "../../assets/img/mesage2.png";
import axios from "axios";
import { registerApi,specialitiesApi } from "../../api/index";
import request from "../../utils/request";

import { Search } from "@element-plus/icons-vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import Atropos from "atropos";
const router = useRouter();
interface Register {
  s_name: string;
  s_pass: string;
  s_college: string;
  s_speciality: string;
  s_student_id: string;
  password: string;
  selectValue: string;
}
const param = reactive<Register>({
  s_name: "",
  s_pass: "",
  s_college: "",
  s_speciality: "",
  s_student_id: "",
  password: "",
  selectValue: "",
});
const spData=ref([])
onMounted(()=>{
  getSelectData()
})
function getSelectData(){
  request
      .get(specialitiesApi)
      .then((response) => {
        console.log("响应数据:", response);
        const { status,data } = response;
        if (status == 200) {
          // spData.value=data
          data.forEach((element:any) => {
            spData.value.push({value:element,label:element})
          });
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
// onMounted(() => {
//   let colorbg = new AbstractShapeBg({
//     dom: "login-wrap",
//     colors: ["#0F52BB", "#27C6E6", "#D2F6F7", "#B0EEF4", "#439AE6", "#0F52BB"],
//     seed: 1000,
//     loop: true,
//   });
//   console.log("Component has been mounted!");
//   const myAtropos = Atropos({
//     el: ".my-atropos",
//     activeOffset: 10,
//     shadowScale: 0.9,
//   });
//   const myAtropos2 = Atropos({
//     el: ".my-atropos2",
//     activeOffset: 10,
//     shadowScale: 0.9,
//   });
//   const myAtropos3 = Atropos({
//     el: ".my-atropos3",
//     activeOffset: 10,
//     shadowScale: 0.9,
//   });
//   const myAtropos4 = Atropos({
//     el: ".my-atropos4",
//     activeOffset: 10,
//     shadowScale: 0.9,
//   });
//   const myAtropos5 = Atropos({
//     el: ".my-atropos5",
//     activeOffset: 10,
//     shadowScale: 0.9,
//   });
//   const myAtropos6 = Atropos({
//     el: ".my-atropos6",
//     activeOffset: 10,
//     shadowScale: 0.9,
//   });
// });
// 校验函数
const reg2 = /^[a-zA-Z]{6,12}$/;
const userPassValidate = (rule, value, callback) => {
  console.log("lllll");
  if (!value) {
    return callback(new Error("密码不能为空"));
  }
  setTimeout(() => {
    if (value.toString().length < 6 || value.toString().length > 12) {
      callback(new Error("密码长度要在6到12位之间"));
    } else if (!reg2.test(value)) {
      callback(new Error("请输入英文"));
    } else {
      callback();
    }
  }, 0);
};
const reg = /^[\u4e00-\u9fff]+$/;
const userUserValidate = (rule, value, callback) => {
  console.log("lllll");
  if (!value) {
    return callback(new Error("用户名不能为空"));
  }
  setTimeout(() => {
    if (value.toString().length > 12) {
      callback(new Error("用户名最长12位"));
    } else if (!reg.test(value)) {
      callback(new Error("请输入中文"));
    } else {
      callback();
    }
  }, 0);
};
const regNumbei = /^\d+$/;
const userNumberValidate = (rule, value, callback) => {
  console.log("lllll");
  if (!value) {
    return callback(new Error("学号不能为空"));
  }
  setTimeout(() => {
    if (!regNumbei.test(value)) {
      callback(new Error("请输入数字"));
    } else {
      callback();
    }
  }, 0);
};
const userPassConfirm = (rule, value, callback) => {
  console.log("lllll");
  if (!value) {
    return callback(new Error("再次输入密码不能为空"));
  }
  setTimeout(() => {
    if (value != param.s_pass) {
      callback(new Error("两次输入密码不一致"));
    } else {
      callback();
    }
  }, 0);
};
const rules: FormRules = {
  // 只能是中文，最长12个字符
  s_name: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },

    { validator: userUserValidate, trigger: "blur" },
  ],
  s_pass: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { validator: userPassValidate, trigger: "blur" },
  ],
  s_college: [
    { required: true, message: "请输入院校", trigger: "blur" },
    { validator: userUserValidate, trigger: "blur" },
  ],
  s_speciality: [
    { required: true, message: "请选择专业", trigger: "change" },
    // { validator: userUserValidate, trigger: "change" },
  ],
  s_student_id: [
    { required: true, message: "请输入学号", trigger: "blur" },
    { validator: userNumberValidate, trigger: "blur" },
  ],
  password: [
    { required: true, message: "请再次输入密码", trigger: "blur" },
    { validator: userPassConfirm, trigger: "blur" },
  ],
};
const config = {
  headers: {
    "Content-Type": "application/json", // 设置请求头为 JSON 格式
    "Access-Control-Allow-Origin": "*",
  },
};
const register = ref<FormInstance>();
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid: boolean) => {
    if (valid) {
      request
        .post(registerApi, param, config)
        .then((response) => {
          // 请求成功，处理响应数据
          console.log("响应数据:", response);
          const { message, s_name, code } = response.data;
          if (code == 201) {
            ElMessageBox.confirm(s_name + "您已注册成功,是否去登陆?", "提示", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "success",
            })
              .then(() => {
                router.push("/login");
              })
              .catch(() => {
                ElMessage({
                  message: "取消操作成功",
                  type: "success",
                });
              });
          }
        })
        .catch((error) => {
          // 请求失败，处理错误
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
    } else {
      return false;
    }
  });
};
</script>

<style scoped>

.append{
  align-items: center;
    background-color:#f5f7fa;
    border-radius: 4px;
    color: #909399;
    display: flex;
    justify-content: center;
    height: 40px;
    border-bottom-left-radius: 0 !important;
		  border-top-left-radius: 0 !important;
    /* min-height: 100%; */
    /* padding: 0 20px; */
}
.el-select--large .el-select__prefix,
.el-select--large .el-select__suffix {
  display: none !important;
}
.el-message--error {
  min-width: 400px;
  min-height: 50px;
}
.my-atropost {
  z-index: 1999 !important;
  width: 354px;
  height: 207px;
  box-sizing: border-box;
  float: left;
}
.my-atropos2 {
  z-index: 1999 !important;
  width: 354px;
  height: 207px;
  box-sizing: border-box;
  float: left;
}
.login-wrap {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 100%;
  height: 100%;
  /* background-image: url(../assets/img/loginbg.png); */
  /* background-size: 100%; */
  font-family: HarmonyOS Sans SC;
}
.message-left {
  width: 520px;
  float: left;
  height: 100%;
}
.login-message-box {
  display: flex;
  position: relative;
  /* left: 41px;
  top: 120px; */
  width: 1293px;
  height: 794px;
  border-radius: 10px;
  opacity: 1;

  background: rgba(0, 0, 0, 0.2);

  backdrop-filter: blur(25px);
  box-shadow: inset 0px 0px 23px 0px rgba(255, 255, 255, 0.8);
}
.message-1 {
  position: absolute;
  left: 44px;
  top: 43px;
  width: 499px;
  height: 232px;
  opacity: 1;
  font-family: HarmonyOS Sans SC;
  font-size: 18px;
  font-weight: normal;
  line-height: 29px;
  letter-spacing: 0px;

  font-variation-settings: "opsz" auto;
  font-feature-settings: "kern" on;
  color: #ffffff;
}
.message2 {
  position: absolute;
  left: 35px;
  top: 300px;
  width: 480px;
  height: 300px;
  opacity: 1;
}
.message-right {
  flex: 1;
  margin-left: 30px;
  float: left;
  height: 100%;
  margin-top: 50px;
}

.ms-title {
  display: flex;
  align-items: center;
  justify-items: center;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #333;
  font-weight: bold;
  padding-top: 10px;
}
.ms-login {
  float: left;
  width: 350px;
  border-radius: 5px;
  /* background: #fff; */
  /* margin-left: 1300px; */
}
.ms-content {
  padding: 10px 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #333;
}
:deep .el-form-item__label {
  color: black;
}
:deep(.el-input__wrapper) {
  background-color: rgba(0, 0, 0, 0) !important;
}

:deep(.el-input__inner) {
  background-color: rgba(0, 0, 0, 0) !important;
  color: black !important;
}
.login-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  /* background: url(../../assets/img/login-bg.jpg) center/cover no-repeat; */
}

.login-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.logo {
  width: 50px;
}

.login-title {
  font-size: 24px;
  color: #333;
  font-weight: bold;
}

.login-container {
  width: 500px;
  border-radius: 5px;
  background: #fff;
  padding: 40px 50px 50px;
  box-sizing: border-box;
  z-index: 2000;
  float: left;
  /* margin-left: 72%; */
  /* margin-top: 12px; */
  height: 694px;
  /* position: absolute;
  left: 41px;
  top: 120px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pwd-tips {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin: -10px 0 10px;
  color: #787878;
  margin-bottom: 20px;
  margin-top: 20px;
}

.pwd-checkbox {
  height: auto;
}

.login-btn {
  display: block;
  width: 100%;
}

.login-tips {
  font-size: 12px;
  color: #999;
}

.login-text {
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
  color: #787878;
  justify-content: center;
}
.passTip {
  margin-top: 10px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0px;
  color: #a9a6a6;
}
.el-form-item--large {
  margin-bottom: 30px !important;
}
.sub-title {
  font-family: HarmonyOS Sans SC;
  font-size: 23px;
  font-weight: normal;
  line-height: 36px;
  letter-spacing: 0px;
  font-variation-settings: "opsz" auto;
  font-feature-settings: "kern" on;
  color: #333;
  margin-bottom: 20px;
}
</style>
