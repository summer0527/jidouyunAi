<template>
  <div class="login-bg" id="login-wrap">
    <!-- 公用组件 -->
    <!-- <div class="login-message-box" style="z-index: 1800">
      <div class="message-left">
        <p class="message-1 mssageHover">
          以智能化教育服务为突破口，点燃并激发高校与教育机构对AI技术的深度关注与广泛应用。“智慧数境”在满足高校多学科智能对话需求的基础上，将持续深耕教育场景，开发覆盖教学、学习、科研与管理等全流程的深度工具与服务，全面提升教育效率与质量。通过构建良性循环的智能化服务体系，智慧数境致力于打造一个完整的教育生态闭环，为高校、教师、学生及教育管理者提供全方位、多层次的支持，推动教育数字化转型。
        </p>
        <p class="message2">
          <el-image style="width: 480px; height: 350px" :src="meesage2" />
        </p>
      </div>
      <div class="message-right">
        <div class="atropos my-atropos my-atropost">
          <div class="atropos-scale">
            <div class="atropos-rotate">
              <div class="atropos-inner">
                <div class="message-style">
                  <span class="ripple"></span>
                  <el-icon :size="20">
                    <Edit />
                  </el-icon>
                  <p
                    style="font-size: 20px; margin-bottom: 10px"
                    class="mssageHover"
                  >
                    学科AI场景全覆盖
                  </p>
                  <p class="mssageHover">
                    全面覆盖文、理、工、商等多学科领域，为高校师生提供精准的学科内容支持，满足多样化学习与研究需求。通过智能化工具与服务的深度整合，平台有效提升教学与科研效率，助力高校实现高质量教育创新与科研成果转化。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="atropos my-atropos2 my-atropost">
          <div class="atropos-scale">
            <div class="atropos-rotate">
              <div class="atropos-inner">
                <div class="message-style">
                  <el-icon :size="20">
                    <Edit />
                  </el-icon>
                  <p
                    style="font-size: 20px; margin-bottom: 10px"
                    class="mssageHover"
                  >
                    智能赋能教育双向优化
                  </p>
                  <p class="mssageHover">
                    平台依托大模型AI技术，深度融合图片、语音、视频等多模态数据处理能力，提供高效的智能对话功能，助力学生与教师快速解决学科相关问题。通过多模态交互方式，平台显著降低学习门槛，提升学习效果，同时有效减轻教师答疑负担，实现教学与学习的双向赋能与效率提升。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="atropos my-atropos3 my-atropost">
          <div class="atropos-scale">
            <div class="atropos-rotate">
              <div class="atropos-inner">
                <div class="message-style">
                  <el-icon :size="20">
                    <Edit />
                  </el-icon>
                  <p
                    style="font-size: 20px; margin-bottom: 10px"
                    class="mssageHover"
                  >
                    个性化学习路径
                  </p>
                  <p class="mssageHover">
                    平台基于学生的学习习惯与各学科科研需求，智能生成个性化学习建议与资源推荐，精准匹配学习目标。通过定制化学习方案，助力学生高效掌握知识，全面提升学术成绩与研究能力，赋能学术成长与科研创新。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="atropos my-atropos4 my-atropost">
          <div class="atropos-scale">
            <div class="atropos-rotate">
              <div class="atropos-inner">
                <div class="message-style">
                  <el-icon :size="20">
                    <Edit />
                  </el-icon>
                  <p
                    style="font-size: 20px; margin-bottom: 10px"
                    class="mssageHover"
                  >
                    教学辅助工具
                  </p>
                  <p class="mssageHover">
                    平台为教师提供智能备课、课堂管理及学生数据分析等全方位工具，助力高效教学。通过智能化赋能，显著提升教学质量，优化课堂管理效能，支持教师专业成长与教学创新，为教育高质量发展注入新动力。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="atropos my-atropos5 my-atropost">
          <div class="atropos-scale">
            <div class="atropos-rotate">
              <div class="atropos-inner">
                <div class="message-style">
                  <el-icon :size="20">
                    <Edit />
                  </el-icon>
                  <p
                    style="font-size: 20px; margin-bottom: 10px"
                    class="mssageHover"
                  >
                    教育管理优化
                  </p>
                  <p class="mssageHover">
                    平台为高校管理者提供数据驱动的智能决策支持，助力优化资源配置与教学质量监控。通过精准的数据分析与可视化工具，全面提升管理效率，加速教育数字化转型进程，推动高校高质量发展。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="atropos my-atropos6 my-atropost">
          <div class="atropos-scale">
            <div class="atropos-rotate">
              <div class="atropos-inner">
                <div class="message-style">
                  <el-icon :size="20">
                    <Edit />
                  </el-icon>
                  <p
                    style="font-size: 20px; margin-bottom: 10px"
                    class="mssageHover"
                  >
                    生态闭环与持续创新
                  </p>
                  <p class="mssageHover">
                    平台以持续优化与创新为核心，打造教育生态闭环，精准响应高校动态变化的智能需求。通过深度服务与高效体验，强化用户粘性，塑造行业领先的品牌影响力与良好口碑，推动教育智能化生态的可持续发展。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <v-homeStyle></v-homeStyle>
    <div class="login-container">
      <div class="login-header">
        <img class="logo mr10" src="../../assets/img/logo.png" alt="" />
        <div class="login-title">吉斗云AI</div>
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
          <el-input v-model="param.s_name" placeholder="请输入用户名">
            <template #append>
              <el-icon><UserFilled /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="s_student_id" label="学号">
          <el-input v-model="param.s_student_id" placeholder="请输入学号">
            <template #append>
              <el-icon><UserFilled /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="s_college" label="学院">
          <el-input v-model="param.s_college" placeholder="请输入学院">
            <template #append>
              <el-icon><UserFilled /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="s_speciality" label="专业">
          <el-input v-model="param.s_speciality" placeholder="请输入专业">
            <template #append>
              <el-icon><UserFilled /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="s_pass" label="密码">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="param.s_pass"
          >
            <template #append>
              <el-icon>
                <View />
              </el-icon>
            </template>
          </el-input>
          <span class="passTip">密码为6到12位的英文字符</span>
        </el-form-item>
        <el-form-item prop="password" label="确认密码">
          <el-input
            type="password"
            placeholder="请再次输入密码"
            v-model="param.password"
          >
            <template #append>
              <el-icon>
                <View />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          size="large"
          @click="submitForm(register)"
          >立即注册</el-button
        >
      </el-form>
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
import {registerApi} from '../../api/index'
import request from '../../utils/request';
// import Atropos from "atropos";
const router = useRouter();
interface Register {
  s_name: string;
  s_pass: string;
  s_college: string;
  s_speciality: string;
  s_student_id: string;
  password: string;
}
const param = reactive<Register>({
  s_name: "",
  s_pass: "",
  s_college: "",
  s_speciality: "",
  s_student_id: "",
  password: "",
});
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
    { required: true, message: "请输入专业", trigger: "blur" },
    { validator: userUserValidate, trigger: "blur" },
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
      request.post(registerApi, param,config)
    .then(response => {
          // 请求成功，处理响应数据
          console.log('响应数据:', response);
          const { message, s_name, code } = response;
          if (code == 201) {
            ElMessageBox.confirm(s_name+"您已注册成功,是否去登陆?", "提示", {
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
    .catch(error => {
          // 请求失败，处理错误
          console.log('请求出错:', error);
          const { message, code } = error.response.data;
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
</script>

<style scoped>
.el-message--error{
 
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
  position: absolute;
  left: 41px;
  top: 120px;
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
  margin-left: 1350px;
  height: 694px;
  position: absolute;
  left: 41px;
  top: 120px;
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
</style>
