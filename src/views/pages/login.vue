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
      <!-- 公用组件 -->
      <v-homeStyle></v-homeStyle>
      <div class="login-container">
        <div class="login-header">
          <div class="login-title">
            <p style="display: flex; justify-content: center">
              <img class="logo" src="/image/loginlogo.png" alt="" />
            </p>
            <p style="font-size: 36px; color: #333333">
              吉斗云AI教育应用场景平台
            </p>
            <p
              style="
                padding-left: 10px;
                font-size: 20px;
                color: #666666;
                display: flex;
                justify-content: center;
                letter-spacing: 3px;
              "
            >
              教育专业大模型AI场景提供商
            </p>
          </div>
          <!-- <div class="login-title">教育专业大模型AI场景提供商</div> -->
        </div>
        <!-- <p class="sub-title">AI场景校园风向标</p> -->
        <div>
          <el-form
            :model="param"
            :rules="rules"
            ref="login"
            style="max-width: 600px"
            label-width="auto"
            size="large"
            label-position="top"
          >
            <el-form-item prop="username" label="用户名">
              <el-input
                v-model="param.username"
                placeholder="请输入用户名"
                @change="handleChange"
              >
                <template #append>
                  <!-- <el-icon><UserFilled /></el-icon> -->
                  <img
                    src="/image/yonghu.png"
                    alt=""
                    style="width: 20px; height: 20px"
                  />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
              <el-input
                type="password"
                placeholder="密码"
                v-model="param.password"
                @keydown.enter="submitForm(login)"
              >
                <template #append>
                  <img
                    src="/image/mima.png"
                    alt=""
                    style="width: 20px; height: 20px"
                  />
                </template>
              </el-input>
              <span class="passTip">密码为6-12字符的英文</span>
            </el-form-item>
            <div class="pwd-tips">
              <el-checkbox
                class="pwd-checkbox"
                v-model="checked"
                label="记住密码"
              />
              <el-link
                type="primary"
                @click="handleforget"
                style="color: #9d0116; font-size: 16px"
                >忘记密码</el-link
              >
            </div>
            <el-button
              class="login-btn"
              type="danger"
              size="large"
              @click="submitForm(login)"
              >登录</el-button
            >
            <p class="login-text">
              没有账号？<el-link
                type="primary"
                @click="handletoregist"
                style="color: #9d0116; font-size: 16px"
                >立即注册</el-link
              >
            </p>
          </el-form>
        </div>
      </div>
      <p style="position: fixed; bottom: 2%; color: #ffffff">
        吉林省吉斗云科技有限公司版权所有 Copyright © JiDouYun.com, All Rights
        Reserved.
      </p>
    </div>
    <!-- 忘记密码 -->
    <el-dialog v-model="dialogFormVisible" title="忘记密码" width="570">
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header" style="border-bottom: 1px solid #ebedf0">
          <h4
            :id="titleId"
            :class="titleClass"
            style="display: flex; align-items: center"
          >
            <img
              class="logo mr10"
              src="/image/xian.png"
              alt=""
              style="height: 30px; width: 3px; float: left; margin-bottom: 10px"
            />
            忘记密码
          </h4>
        </div>
      </template>

      <div style="padding: 20px 30px">
        <div class="login-header">
          <div class="login-title">
            <p style="display: flex; justify-content: center">
              <img class="logo" src="/image/loginlogo.png" alt="" />
            </p>
            <p style="font-size: 36px; color: #333333">
              吉斗云AI教育应用场景平台
            </p>
            <p
              style="
                padding-left: 10px;
                font-size: 20px;
                color: #666666;
                display: flex;
                justify-content: center;
                letter-spacing: 3px;
              "
            >
              教育专业大模型AI场景提供商
            </p>
          </div>
        </div>
        <el-form
          :model="forgetData"
          :rules="fortgetrules"
          ref="ruleFormRef"
          style="max-width: 600px"
          label-width="auto"
          size="large"
          label-position="top"
        >
          <el-form-item prop="s_student_id" label="学号">
            <el-input
              v-model="forgetData.s_student_id"
              placeholder="请输入学号"
            >
              <template #append>
                <img
                  src="/image/xuehao.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="s_name" label="用户名">
            <el-input
             
              placeholder="用户名"
              v-model="forgetData.s_name"
            >
              <template #append>
                <img
                  src="/image/yonghu.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />
              </template>
            </el-input>
          </el-form-item>

          <el-form-item label="新密码" prop="s_pass">
            <el-input
             type="password"
              v-model="forgetData.s_pass"
              placeholder="请输入你的新密码"
            >
              <template #append>
                <img
                  src="/image/mima.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />
              </template>
            </el-input>
          </el-form-item>
          <el-button
            class="login-btn"
            type="danger"
            size="large"
            @click="handlemessagesub"
            style="margin-bottom: 20px"
            >提交</el-button
          >
        </el-form>
      </div>
    </el-dialog>
<!-- 注册 -->
    <el-dialog v-model="dialogFormVisible2" title="注册" width="570">
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header" style="border-bottom: 1px solid #ebedf0">
          <h4
            :id="titleId"
            :class="titleClass"
            style="display: flex; align-items: center"
          >
            <img
              class="logo mr10"
              src="/image/xian.png"
              alt=""
              style="height: 30px; width: 3px; float: left; margin-bottom: 10px"
            />
            注册
          </h4>
        </div>
      </template>

      <div style="padding: 20px 30px">
        <div class="login-header">
          <div class="login-title">
            <p style="display: flex; justify-content: center">
              <img class="logo" src="/image/loginlogo.png" alt="" />
            </p>
            <p style="font-size: 36px; color: #333333">
              吉斗云AI教育应用场景平台
            </p>
            <p
              style="
                padding-left: 10px;
                font-size: 20px;
                color: #666666;
                display: flex;
                justify-content: center;
                letter-spacing: 3px;
              "
            >
              教育专业大模型AI场景提供商
            </p>
          </div>
        </div>
        <el-form
          :model="registerData"
          :rules="registerrules"
          ref="ruleFormRef2"
          style="max-width: 600px"
          label-width="auto"
          size="large"
          label-position="top"
        >
         
          <el-form-item prop="s_name" label="用户名">
            <el-input
              placeholder="用户名"
              v-model="registerData.s_name"
            >
              <template #append>
                <img
                  src="/image/yonghu.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="s_student_id" label="学号">
            <el-input
              v-model="registerData.s_student_id"
              placeholder="请输入学号"
            >
              <template #append>
                <img
                  src="/image/xuehao.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="s_college" label="学院">
            <el-input
              v-model="registerData.s_college"
              placeholder="请输入学院"
            >
              <template #append>
                <img
                  src="/image/xueyuan.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />
              </template>
            </el-input>
          </el-form-item>

          <el-form-item prop="s_speciality" label="专业">
            <!-- <el-input v-model="param.s_speciality" placeholder="请输入专业"> -->
            <el-select
              v-model="registerData.s_speciality"
              placeholder="请选择你的专业"
              clearable
             
            >
              <el-option v-for="(item,index) in spData"  :label="item.label" :value="item.value" />
             
            </el-select>
          <p style="width: 60px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFF3F5;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    border: 1px solid #dcdfe6;
    border-left: 0;">
            <img
                  src="/image/zhuanye.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />
          </p>
            
            <!-- </el-input> -->
          </el-form-item>
          <el-form-item label="密码" prop="s_pass">
            <el-input
            type="password"
              v-model="registerData.s_pass"
              placeholder="请输入你的新密码"
            >
              <template #append>
                <img
                  src="/image/mima.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password">
            <el-input
            type="password"

              v-model="registerData.password"
              placeholder="请输入你的确认密码"
            >
              <template #append>
                <img
                  src="/image/mima.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />
              </template>
            </el-input>
          </el-form-item>
          <el-button
            class="login-btn"
            type="danger"
            size="large"
            @click="handleregister"
            style="margin-bottom: 20px"
            >注册</el-button
          >
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useTabsStore } from "@/store/tabs";
import { usePermissStore } from "@/store/permiss";
import { useRouter } from "vue-router";
import { ElMessage, ElMessageBox } from "element-plus";
import vHomeStyle from "../../components/homeStyle.vue";
import axios from "axios";
import qs from "qs";
import type { FormInstance, FormRules } from "element-plus";
import { AbstractShapeBg } from "../../../build/jsm/AbstractShapeBg.module.js";
import meesage2 from "../../assets/img/mesage2.png";
import Atropos from "atropos";
import { loginApi, passwordResetApi,specialitiesApi,registerApi } from "../../api/index";
import request from "../../utils/request";

interface LoginInfo {
  username: string;
  password: string;
}
const forgetData = ref({
  s_name: "",
  s_student_id: "",
  s_pass: "",
});

interface Register {
  s_name: string;
  s_pass: string;
  s_college: string;
  s_speciality: string;
  s_student_id: string;
  password: string;
  selectValue: string;
}
const registerData = reactive<Register>({
  s_name: "",
  s_pass: "",
  s_college: "",
  s_speciality: "",
  s_student_id: "",
  password: "",
  selectValue: "",
});
const lgStr = localStorage.getItem("login-param");
const defParam = lgStr ? JSON.parse(lgStr) : null;
const checked = ref(lgStr ? true : false);
const dialogFormVisible = ref(false);
const dialogFormVisible2 = ref(false)
const router = useRouter();
const param = reactive<LoginInfo>({
  username: "",
  password: "",
});
const spData=ref([])

// 忘记密码
const handleforget = () => {
  dialogFormVisible.value = true;
};
const handletoregist = () =>{
  dialogFormVisible2.value = true;

}
const ruleFormRef = ref<FormInstance>();
  const ruleFormRef2 = ref<FormInstance>();

const config = {
  headers: {
    "Content-Type": "application/json", // 设置请求头为 JSON 格式
    "Access-Control-Allow-Origin": "*",
  },
};
// 忘记密码确认事件
const handlemessagesub = () => {
  ruleFormRef.value?.validate((valid) => {
    if (valid) {
      console.log(forgetData.value);
      request
        .post(passwordResetApi, forgetData.value, config)
        .then((response) => {
          // 请求成功，处理响应数据
          console.log("响应数据:", response);
          const { success, message } = response.data;

          if (success) {
            param.username = forgetData.value.s_name
            param.password = forgetData.value.s_pass
            dialogFormVisible.value = false;

            ElMessage({
                  message: "修改密码成功",
                  type: "success",
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
    }
  });
};
// 注册提交
const handleregister=()=>{
  ruleFormRef2.value?.validate((valid) => {
    if (valid) {
      request
        .post(registerApi, registerData, config)
        .then((response) => {
          // 请求成功，处理响应数据
          console.log("响应数据:", response);
          const { message, s_name, code } = response.data;
          if (code == 201) {
            dialogFormVisible2.value = false;
            param.username = registerData.s_name
            param.password = registerData.s_pass

            ElMessage({
              message: '注册成功',
              type: "error",
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
    }
  });
}
const reg2 = /^[a-zA-Z]{6,12}$/;
const userPassValidate = (rule: any, value: any, callback: any) => {
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
const userUserValidate = (rule: any, value: any, callback: any) => {
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
const userNumberValidate = (rule: any, value: any, callback: any) => {
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
const userPassConfirm = (rule:any, value:any, callback:any) => {
  console.log("lllll");
  if (!value) {
    return callback(new Error("再次输入密码不能为空"));
  }
  setTimeout(() => {
    if (value != registerData.s_pass) {
      callback(new Error("两次输入密码不一致"));
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
const fortgetrules: FormRules = {
  s_name: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { validator: userUserValidate, trigger: "blur" },
  ],
  s_student_id: [
    { required: true, message: "请输入学号", trigger: "blur" },
    { validator: userNumberValidate, trigger: "blur" },
  ],
  s_pass: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { validator: userPassValidate, trigger: "blur" },
  ],
};


const registerrules: FormRules = {
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
const permiss = usePermissStore();
const login = ref<FormInstance>();
const submitForm = (formEl: FormInstance | undefined) => {
  console.log("-=-=-=-=-=-=-=");
  if (!formEl) return;
  formEl.validate((valid: boolean): void => {
    if (valid) {
      const config2 = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      request
        .post(loginApi, qs.stringify(param), config2)
        .then((response) => {
          // 请求成功，处理响应数据
          console.log("响应数据:", response);
          const {
            code,
            access_token,
            refresh_token,
            s_name,
            s_speciality,
            data,
          } = response.data;
          if (code == 201) {
            localStorage.setItem("token", access_token);
            localStorage.setItem("refreshToken", refresh_token);
            localStorage.setItem("s_name", s_name);
            localStorage.setItem("s_speciality", s_speciality);
            localStorage.setItem("data", JSON.stringify(data));

            router.push("/dashboard");
          }
        })
        .catch((error) => {
          // 请求失败，处理错误
          console.log("请求出错:", error);
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
    } else {
      // return false;
    }
  });
};
const handleChange = () => {};
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
onMounted(() => {
  getSelectData()

  console.log(import.meta.env.VITE_APP_ENV, "process.env.VUE_APP_ENV589565555");

  // let colorbg = new AbstractShapeBg({
  //   dom: "login-wrap",
  //   colors: ["#0F52BB", "#27C6E6", "#D2F6F7", "#B0EEF4", "#439AE6", "#0F52BB"],
  //   seed: 3000,
  //   loop: true,
  // });
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
::v-deep .el-select.el-select--large{
  width: 418px;
}
::v-depp .el-select{
  width: 418px;
}
::v-deep .el-dialog{
  margin-top: 5vh;
}
::v-deep .el-overlay-dialog{
  display: flex
;
    justify-content: center;
    align-items: center;
}
::v-deep .el-overlay{
  backdrop-filter: blur(3px);
}
::v-deep .el-link.is-hover-underline:hover:after {
  border-bottom: 1px solid #9d0116;
}
::v-deep .el-checkbox.el-checkbox--large .el-checkbox__label {
  font-size: 16px;
}
::v-deep .el-checkbox.el-checkbox--large .el-checkbox__inner {
  border: 1px solid #9d0116;
}
::v-deep .el-input__wrapper {
  border-radius: 20px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  background: #fff3f5 !important;
}
::v-deep .el-input-group__append {
  background: #fff3f5;
  border-radius: 20px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
::v-deep .el-select--large .el-select__wrapper{
  border-radius: 20px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  background: #fff3f5 !important;
  height: 50px;
}
::v-deep .el-form-item__content .el-input-group {
  height: 50px;
}
::v-deep .el-form-item--large .el-form-item__content {
  height: 50px;
}
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
  background: #bf1f1a;
  border-radius: 8px;
  height: 50px;
  border: none;
  font-size: 18px;
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
  background: url(/public/image/bgmagin.gif) center/cover no-repeat;
}

.login-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}

.logo {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
}

.login-title {
  font-size: 24px;
  color: #333;
  font-weight: bold;
}

.login-container {
  min-width: 540px;
  border-radius: 20px;
  background: #fff;
  padding: 40px 50px 50px;
  box-sizing: border-box;
  /* z-index: 100000000000; */
  float: left;
  /* margin-left: 72%; */
  /* margin-top: 12px; */
  height: 736px;
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
  font-size: 16px;
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
.sub-title {
  font-family: HarmonyOS Sans SC;
  font-size: 23px;
  font-weight: normal;
  line-height: 36px;
  letter-spacing: 0px;
  font-variation-settings: "opsz" auto;
  font-feature-settings: "kern" on;
  color: #333;
  margin-bottom: 50px;
}
</style>
