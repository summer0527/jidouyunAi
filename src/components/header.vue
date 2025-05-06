<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="header-left">
      <img class="logo" src="/image/logono.png" alt="" style="width: 66px" />
      <div class="web-title">吉斗云AI-校园场景风向标</div>
      <div class="collapse-btn" @click="collapseChage" v-show="!sidebar.isDa">
        <el-icon v-if="sidebar.collapse">
          <Expand />
        </el-icon>
        <el-icon v-else>
          <Fold />
        </el-icon>
      </div>
    </div>
    <div class="header-right">
      <div class="header-user-con">
        <div v-show="!sidebar.isDa">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
          >
            <el-sub-menu index="1">
              <template #title>切换新场景</template>

              <!-- <el-menu-item index="/dify-teacher" style="font-size: 20px;color: blue;">  <i class="el-icon-lx-skin"></i>教师场景</el-menu-item> -->
              <!-- <el-divider /> -->
              <el-menu-item index="/dify-teacher" style="margin-top: 20px;">
                <i class="iconfont icon-laoshi" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >教案生成助手</el-menu-item
              >
              <el-menu-item index="/dify-man">
                <i class="iconfont icon-laoshi" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >辩论主持人助手</el-menu-item
              >
              <el-menu-item index="/dify-subject">
                <i class="iconfont icon-laoshi" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >分层练习题助手</el-menu-item
              >
              <el-menu-item index="/dify-gang">
                <i class="iconfont icon-laoshi" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >教学大纲生成助手</el-menu-item
              >
              <el-menu-item index="/dify-class">
                <i class="iconfont icon-laoshi" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >课堂互动问答助手</el-menu-item
              >
              <el-menu-item index="/dify-virtuallearning">
                <i class="iconfont icon-laoshi" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >虚拟合作伙伴助手</el-menu-item
              >
              <!-- <el-menu-item index="/dify-teacher" style="font-size: 20px;color: blue;">  <i class="el-icon-lx-skin"></i>学生场景</el-menu-item> -->
              <el-divider />

              <el-menu-item index="/dify-translate">
                <i class="iconfont icon-chengyuan" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >翻译助手</el-menu-item
              >
              <el-menu-item index="/dify-code">
                <i class="iconfont icon-chengyuan" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >代码生成助手</el-menu-item
              >
              <el-menu-item index="/dify-qa">
                <i class="iconfont icon-chengyuan" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >研发问答助手</el-menu-item
              >
              <el-menu-item index="/dify-memory">
                <i class="iconfont icon-chengyuan" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >对话记忆助手</el-menu-item
              >
              <el-menu-item index="/dify-lean">
                <i class="iconfont icon-chengyuan" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >个性化学习助手</el-menu-item
              >
              <el-menu-item index="/dify-sql">
                <i class="iconfont icon-chengyuan" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >数据表字段生成助手</el-menu-item
              >
              <!-- <el-menu-item index="/dify-teacher" style="font-size: 20px;color: blue;">  <i class="el-icon-lx-skin"></i>行业场景</el-menu-item> -->
              <el-divider />

              <el-menu-item index="/dify-physical">
                <i class="iconfont icon-xingye" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >体检助手</el-menu-item
              >
              <el-menu-item index="/dify-customer">
                <i class="iconfont icon-xingye" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >智能客服助手</el-menu-item
              >
              <el-menu-item index="/dify-knowledge">
                <i class="iconfont icon-xingye" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >行业知识库助手</el-menu-item
              >
              <el-menu-item index="/dify-health">
                <i class="iconfont icon-xingye" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >心理健康支持助手</el-menu-item
              >
              <el-menu-item index="/dify-car">
                <i class="iconfont icon-xingye" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >汽车故障检修助手</el-menu-item
              >
              <el-menu-item index="/dify-treatment">
                <i class="iconfont icon-xingye" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >治疗虚拟教学培训助手</el-menu-item
              >
              <el-menu-item index="/dify-guidance" style="margin-bottom: 20px;">
                <i class="iconfont icon-xingye" style="margin-right: 5px;color:#F80526;font-weight: 600;"></i
                >智能导诊与患者服务助手</el-menu-item
              >
            </el-sub-menu>
          </el-menu>
        </div>
        <!-- <div class="header-user-con">
          <el-button
            type="text"
            @click="handleOpenNew"
            style="
              border: 1px solid;
              padding: 10px;
              border-radius: 15px;
              margin-left: 20px;
              margin-right: 20px;
            "
          >
            通识选修课
          </el-button>
        </div> -->
        <!-- <div class="btn-icon" @click="router.push('/theme')">
          <el-tooltip effect="dark" content="设置主题" placement="bottom">
            <i class="el-icon-lx-skin"></i>
          </el-tooltip>
        </div> -->
        <!-- <div class="btn-icon" @click="router.push('/ucenter')">
                    <el-tooltip
                        effect="dark"
                        :content="message ? `有${message}条未读消息` : `消息中心`"
                        placement="bottom"
                    >
                        <i class="el-icon-lx-notice"></i>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div> -->
        <!-- <div class="btn-icon" @click="setFullScreen">
          <el-tooltip effect="dark" content="全屏" placement="bottom">
            <i class="el-icon-lx-full"></i>
          </el-tooltip>
        </div> -->
        <!-- 用户头像 -->
        <el-avatar class="user-avator" :size="30" :src="imgurl" />
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ username }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <!-- <el-dropdown-item command="user">个人中心</el-dropdown-item> -->
              <el-dropdown-item divided command="loginout"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useSidebarStore } from "../store/sidebar";
import { useRouter, useRoute } from "vue-router";
import imgurl from "/image/avtor.jpg";
import { loginOut } from "../api/index";
import request from "../utils/request";
import { ElMessage, ElMessageBox, ElMenu } from "element-plus";
const currentRoute = ref(null);
const route = useRoute();

const router = useRouter();
const username: string | null = localStorage.getItem("s_name");
const message: number = 2;
const activeIndex = ref("1");
const sidebar = useSidebarStore();
// 侧边栏折叠
const collapseChage = () => {
  sidebar.handleCollapse();
};
// 开启新对话
const handleOpenNew = () => {
  router.push("/dashboard");
};
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
  router.push(keyPath[1]);
};
onMounted(() => {
  console.log(sidebar.isDa, " sidebar.isDa sidebar.isDa sidebar.isDa");
  if (document.body.clientWidth < 1500) {
    collapseChage();
  }
});
function loginOutFunction() {
  request
    .post(loginOut)
    .then((response) => {
      // 请求成功，处理响应数据
      console.log("响应数据:", response);
      const { code, message } = response.data;
      if (code == 200) {
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("token");
        router.push("/login");
      }
    })
    .catch((error) => {
      // 请求失败，处理错误
      console.log("请求出错:", error.response.data);
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
// 用户名下拉菜单选择事件
const handleCommand = (command: string) => {
  if (command == "loginout") {
    loginOutFunction();
  } else if (command == "user") {
    router.push("/ucenter");
  }
};

const setFullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.body.requestFullscreen.call(document.body);
  }
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  color: #3d3d3d;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.header-left {
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 100%;
}

.logo {
  width: 35px;
}

.web-title {
  margin: 0 40px 0 10px;
  font-size: 22px;
}

.collapse-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;
  opacity: 0.8;
  font-size: 22px;
}

.collapse-btn:hover {
  opacity: 1;
}

.header-right {
  float: right;
  padding-right: 50px;
}

.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}

.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}

.btn-icon {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--header-text-color);
  margin: 0 5px;
  font-size: 20px;
}

.btn-bell-badge {
  position: absolute;
  right: 4px;
  top: 0px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #3d3d3d;
}

.user-avator {
  margin: 0 10px 0 20px;
}

.el-dropdown-link {
  color: #3d3d3d;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.el-dropdown-menu__item {
  text-align: center;
}
</style>
