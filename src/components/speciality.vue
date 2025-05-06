<template>
    <div style="margin-bottom: 10px;">
        <el-dropdown v-for="(item, index) in specialityList" :key="index">
          <el-button
            style="margin-right: 10px; margin-left: 10px; margin-top: 10px"
          >
            {{ item.s_speciality }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>

          <template #dropdown>
            <el-dropdown-menu>

              <el-dropdown-item v-for="(el,index2) in item.paths" @click="handleClick(el)">{{ el.paths_name }}</el-dropdown-item>
             
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { ElMessage, ElMessageBox } from "element-plus";
import {
  difyApi,

} from "../api/index";
import request from "../utils/request";
import { useRouter } from "vue-router";
const router = useRouter();
const specialityList = ref([]);

onMounted(()=>{

// specialityList.value = [localStorage.getItem('s_speciality')];
specialityList.value = JSON.parse(localStorage.getItem('data'));

console.log(specialityList.value,'测试数据')

})
const handleClick=(el:any)=>{
  router.push(el.paths)
}

</script>
<style scoped>
.rateStyle {
  color: #409eff;
  border-color: #409eff;
  background-color: rgb(235.9, 245.3, 255);
}
.rateStyle2{
  color: #409eff;
  border-color: #ccc;
  background-color: white;
}
</style>