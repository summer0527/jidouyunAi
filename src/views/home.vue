<template>
    <div class="wrapper">
        <v-header />
        <!-- <v-sidebar /> -->

        <div class="content-box" >
            <!-- <v-tabs></v-tabs> -->
            <el-watermark content="吉斗云教育AI业态大模型" fill-style="hsla(240, 100%, 50%, 0.3)" style="width:100%;height: 100%;float: left;" :gap="[300, 300]" zIndex="5">

            <div class="content" zIndex="20">
                <router-view v-slot="{ Component }">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="tabs.nameList">
        <component :is="Component"></component>

                        </keep-alive>
                    </transition>
                </router-view>
            </div>
        </el-watermark>

        </div>

    </div>
</template>
<script setup lang="ts">
import { useSidebarStore } from '@/store/sidebar';
import { useTabsStore } from '@/store/tabs';
import vHeader from '@/components/header.vue';
// import vSidebar from '@/components/sidebar.vue';
// import vTabs from '@/components/tabs.vue';

const sidebar = useSidebarStore();
const tabs = useTabsStore();
</script>

<style>
.wrapper {
    height: 100vh;
    overflow: hidden;
}
.content-box {
    position: absolute;
    left: 0;
    right: 0;
    top: 70px;
    bottom: 0;
    /* padding-bottom: 30px; */
    -webkit-transition: left 0.3s ease-in-out;
    transition: left 0.3s ease-in-out;
    background: #FFFFFF;
    overflow: hidden;
    box-sizing: border-box;
}

.content {
    width: auto;
    height: 100%;
    /* padding: 20px; */
    /* overflow-y: scroll; */
    box-sizing: border-box;
}

.content::-webkit-scrollbar {
    width: 0;
}

.content-collapse {
    left: 65px;
}
</style>
