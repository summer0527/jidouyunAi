<template>
  <div class="login-bg" id="login-wrap">
    <div style="width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;">
<!-- 公用组件 -->
<v-homeStyle></v-homeStyle>
    <div class="login-container">
      <div class="login-header">
        <img class="logo mr10" src="../../assets/img/logo.png" alt="" />
        <div class="login-title">吉斗云AI</div>
      </div>
      <el-form
        :model="param"
        :rules="rules"
        ref="login"
        style="max-width: 600px"
        label-width="auto"
        size="large"
      >
      
        <el-form-item prop="username" label="用户名">
          <el-input
            v-model="param.username"
            placeholder="请输入用户名"
            @change="handleChange"
          >
            <template #append>
              <el-icon><UserFilled /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input type="password" placeholder="密码" v-model="param.password">
            <template #append>
              <el-icon><View /></el-icon>
            </template>
          </el-input>
          <span class="passTip">密码至少包含 8 个字符，需包含字母和数字</span>
        </el-form-item>
        <div class="pwd-tips">
          <el-checkbox
            class="pwd-checkbox"
            v-model="checked"
            label="记住密码"
          />
          <el-link type="primary" @click="$router.push('/reset-pwd')"
            >忘记密码</el-link
          >
        </div>
        <el-button
          class="login-btn"
          type="primary"
          size="large"
          @click="submitForm(login)"
          >登录</el-button
        >
        <p class="login-text">
          没有账号？<el-link type="primary" @click="$router.push('/register')"
            >立即注册</el-link
          >
        </p>
      </el-form>
    </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useTabsStore } from "@/store/tabs";
import { usePermissStore } from "@/store/permiss";
import { useRouter } from "vue-router";
import { ElMessage,ElMessageBox } from "element-plus";
import vHomeStyle from '../../components/homeStyle.vue';
import axios from "axios";
import qs from 'qs';
import type { FormInstance, FormRules } from "element-plus";
import { AbstractShapeBg } from "../../../build/jsm/AbstractShapeBg.module.js";
import meesage2 from "../../assets/img/mesage2.png";
import Atropos from "atropos";
import {loginApi} from '../../api/index'
import request from '../../utils/request';

interface LoginInfo {
  username: string;
  password: string;
 
}

const lgStr = localStorage.getItem("login-param");
const defParam = lgStr ? JSON.parse(lgStr) : null;
const checked = ref(lgStr ? true : false);

const router = useRouter();
const param = reactive<LoginInfo>({
  username: "",
  password: "",
 
});
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
const rules: FormRules = {
  // 只能是中文，最长12个字符
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },

    { validator: userUserValidate, trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { validator: userPassValidate, trigger: "blur" },
  ],
 
};

const permiss = usePermissStore();
const login = ref<FormInstance>();
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid: boolean) => {
    if (valid) {
      const config = {

  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/x-www-form-urlencoded",
  },
};
request.post(loginApi, qs.stringify(param),config)
    .then(response => {
          // 请求成功，处理响应数据
          console.log('响应数据:', response);
          const { code,access_token,refresh_token,s_name } = response;
          if (code == 201) {
            localStorage.setItem("token", access_token);
            localStorage.setItem("refreshToken", refresh_token);
            localStorage.setItem("s_name", s_name);

            router.push("/");
          } 
      })
    .catch(error => {
          // 请求失败，处理错误
          console.log('请求出错:', error);
          const { code,message } = error.response.data;
          if (code==409) {
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
const handleChange = () => {};
onMounted(() => {
  let colorbg = new AbstractShapeBg({
    dom: "login-wrap",
    colors: ["#0F52BB", "#27C6E6", "#D2F6F7", "#B0EEF4", "#439AE6", "#0F52BB"],
    seed: 3000,
    loop: true,
  });
  console.log("Component has been mounted!");
  // const myAtropos = Atropos({
  //   el: ".my-atropos",
  //   activeOffset: 10,
  //   shadowScale: 0.9,
  // });
  // const myAtropos2 = Atropos({
  //   el: ".my-atropos2",
  //   activeOffset: 10,
  //   shadowScale: 0.9,
  // });
  // const myAtropos3 = Atropos({
  //   el: ".my-atropos3",
  //   activeOffset: 10,
  //   shadowScale: 0.9,
  // });
  // const myAtropos4 = Atropos({
  //   el: ".my-atropos4",
  //   activeOffset: 10,
  //   shadowScale: 0.9,
  // });
  // const myAtropos5 = Atropos({
  //   el: ".my-atropos5",
  //   activeOffset: 10,
  //   shadowScale: 0.9,
  // });
  // const myAtropos6 = Atropos({
  //   el: ".my-atropos6",
  //   activeOffset: 10,
  //   shadowScale: 0.9,
  // });
});

const tabs = useTabsStore();
tabs.clearTabs();
</script>

<style scoped>
.my-atropost {
  z-index: 10000000000000000 !important;
  width: 354px;
  height: 207px;
  box-sizing: border-box;
  float: left;
}
.my-atropos2 {
  z-index: 10000000000000000 !important;
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
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 100%;
  height: 100vh;
  background: url(../../assets/img/login-bg.jpg) center/cover no-repeat;
}

.login-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.logo {
  width: 35px;
}

.login-title {
  font-size: 22px;
  color: #333;
  font-weight: bold;
}

.login-container {
  width: 500px;
  border-radius: 5px;
  background: #fff;
  padding: 40px 50px 50px;
  box-sizing: border-box;
  z-index: 100000000000;
  float: left;
  /* margin-left: 72%; */
  /* margin-top: 12px; */
  height: 694px;
  /* position: absolute;
  left: 41px;
  top: 120px; */
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
  margin-bottom: 45px !important;
}
</style>
