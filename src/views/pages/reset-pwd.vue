<template>
    <div class="login-bg">
        <div class="login-container">
          <div class="login-header" style="display: flex
;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-size: 24px;">
        <img class="logo mr10" src="../../assets/img/logo.png" alt="" />
        <div class="login-title">吉斗云AI-校园场景风向标</div>
      </div>
            <div class="reset-title">重置密码</div>
            <!-- <p class="reset-text">输入你的邮箱，我们将发送重置密码邮件</p> -->
            <el-form :model="param" :rules="rules" ref="register" size="large">
                
                <el-form-item prop="s_student_id">
                    <el-input v-model="param.s_student_id" placeholder="学号">
                        <template #prepend>
                            <el-icon>
                                <Message />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="s_name">
                    <el-input v-model="param.s_name" placeholder="用户名" >
                        <template #prepend>
                            <el-icon>
                                <User />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="s_pass">
                    <el-input v-model="param.s_pass" placeholder="新密码" type="password" >
                        <template #prepend>
                            <el-icon>
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-button class="login-btn" type="primary" size="large" @click="submitForm(register)"
                    >保存</el-button
                >
                <p class="login-text"><el-link type="primary" @click="$router.push('/login')">返回登录</el-link></p>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage,ElMessageBox, type FormInstance, type FormRules } from 'element-plus';

import { passwordResetApi } from "../../api/index";
import request from "../../utils/request";
import { useRouter } from "vue-router";
const router = useRouter();

const param = ref({
    s_name: '',
    s_student_id: '',
    s_pass: ''
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
const rules: FormRules = {
    s_name: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { validator: userUserValidate, trigger: "blur" },
    ],
    s_student_id: [
        { required: true, message: '请输入学号', trigger: 'blur' },
        { validator: userNumberValidate, trigger: "blur" },
    ],
    s_pass: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { validator: userPassValidate, trigger: "blur" },
    ],
};
const register = ref<FormInstance>();
    const config = {
  headers: {
    "Content-Type": "application/json", // 设置请求头为 JSON 格式
    "Access-Control-Allow-Origin": "*",
  },
};
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid: boolean) => {
    if (valid) {
        console.log(param.value)
      request
        .post(passwordResetApi, param.value, config)
        .then((response) => {
          // 请求成功，处理响应数据
          console.log("响应数据:", response);
          const {success,message} = response
         
          if (success) {
            ElMessageBox.confirm(message+ ",是否去登陆?", "提示", {
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
.login-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: url(../../assets/img/loginbg.png) center/cover no-repeat;
}

.reset-title {
    text-align: center;
    font-size: 20px;
    color: #333;
    /* font-weight: bold; */
    margin-bottom: 10px;
}

.reset-text {
    text-align: center;
    font-size: 14px;
    color: #787878;
    margin-bottom: 40px;
}

.login-container {
    width: 450px;
    border-radius: 5px;
    background: #fff;
    padding: 40px 50px 50px;
    box-sizing: border-box;
}

.login-btn {
    display: block;
    width: 100%;
}

.login-text {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-size: 14px;
    color: #333;
}
</style>
