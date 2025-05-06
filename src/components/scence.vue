<template>
    <div
        style="
          width: 100%;
          height: 100%;
          float: left;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-left: 10%;
    padding-right: 10%;
    box-sizing: border-box;
        "
        v-show="isShowScene"
      >
        <div style=" margin-bottom: 10px;margin-top: -60px;">
          <p style="margin-bottom: 20px;display: flex
;
    justify-content: center;
    align-items: center;margin-bottom: 80px;flex-direction: column;">
            <img
              class="logo mr10"
              src="/image/02.png"
              alt=""
              style="height: 68px;"
            />
            <!-- <span style="font-size: 34px; color: #3d3d3d"
              >Hello,我是吉斗云教育AI业态大模型</span
            > -->
         <span style="
    margin-top: 10px;color:#888585">灵台通九域之识，随问而应；智渊汇千圣之思，量材为导</span>
           
            
          </p>
          <div class="gradient-border">
            <span
              style="
                color: cornflowerblue;
                font-size: 16px;
                display: block;
                text-indent: 10px;
                margin-top: 10px;
                margin-bottom: 10px;
                text-align: center;
            
              "
               class="rainbow-text">教师场景---吉斗云教育大模型(JDY-Jidouyun education model)  </span
               
            >
          
          </div>
          <div class="gradient-borderS">
            <span
              style="
                color: cornflowerblue;
                font-size: 16px;
                display: block;
                text-indent: 10px;
                margin-top: 10px;
                margin-bottom: 10px;
                text-align: center;
              
              "
              class="rainbow-text">学生场景---吉斗云学习大模型(JDY-Jidouyun learning large model)</span
            >
          </div>
          <div class="gradient-borderh"  style="margin-right: 0;width: 29%;">
            <span
              style="
                color: cornflowerblue;
                font-size: 16px;
                display: block;
                text-indent: 10px;
                margin-top: 10px;
                margin-bottom: 10px;
                text-align: center;
               
              "
              class="rainbow-text">行业场景---吉斗云行业大模型(JDY-Jidouyun industry model)</span
            >
             </div>
           
           
          <!-- 教师场景 -->
           <div style="float: left;width: 100%;">
            <p
            style="
              float: left;
              width: 30%;
              height: 400px;
              border: 3px solid #bbbcc5;
              margin-right: 5%;
              border-radius: 14px;
              box-sizing: border-box;
              z-index: 1000000;
    position: relative;
    background: white;

            "
          >
            
          
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute==='dify-teacher'?'selectStyle':''" @click="handleTran('teacher')"
              >教案生成助手</el-button
            >
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-man'?'selectStyle':''" @click="handleTran('man')"
              >辩论主持人助手</el-button
            >
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-subject'?'selectStyle':''" @click="handleTran('subject')"
              >分层练习题助手</el-button
            >
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-gang'?'selectStyle':''"  @click="handleTran('gang')"
              >教学大纲生成助手</el-button
            >
          
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-class'?'selectStyle':''" @click="handleTran('class')"
              >课堂互动问答助手</el-button
            >
           
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-virtuallearning'?'selectStyle':''" @click="handleTran('virtuallearning')"
              >虚拟合作伙伴助手</el-button
            >
            
          </p>
         
          <p
            style="
              float: left;
              width: 30%;
              height: 400px;
              border: 3px solid #bbbcc5;
              margin-right: 5%;
              border-radius: 14px;
              box-sizing: border-box;
              z-index: 1000000;
    position: relative;
    background: white;

            "

          >
          <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-translate'?'selectStyle':''" @click="handleTran('tran')"
              >翻译助手</el-button
            >
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='difycode'?'selectStyle':''" @click="handleTran('code')"
              >代码生成助手</el-button
            >
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-qa'?'selectStyle':''" @click="handleTran('qa')"
              >研发问答助手</el-button
            >
           
           
          
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-memory'?'selectStyle':''" @click="handleTran('memory')"
              >对话记忆助手</el-button
            >
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-lean'?'selectStyle':''" @click="handleTran('lean')"
              >个性化学习助手</el-button
            >
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='difysql'?'selectStyle':''" @click="handleTran('sql')"
              >数据表字段生成助手</el-button
            >
          
          </p>
         
          <p
            style="
              float: left;
              width: 29%;
              height: 400px;
              border: 3px solid #bbbcc5;
              border-radius: 14px;
              box-sizing: border-box;
              z-index: 1000000;
    position: relative;
    background: white;


            "

          >
          <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-physical'?'selectStyle':''" @click="handleTran('physical')"
              >体检助手</el-button
            >
          <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-customer'?'selectStyle':''" @click="handleTran('customer')"
              >智能客服助手</el-button
            >
           
          <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-knowledge'?'selectStyle':''"@click="handleTran('know')"
              >行业知识库助手</el-button
            >
          
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-health'?'selectStyle':''" @click="handleTran('health')"
              >心理健康支持助手</el-button
            >
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-car'?'selectStyle':''" @click="handleTran('car')"
              >汽车故障检修助手</el-button
            >
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-treatment'?'selectStyle':''" @click="handleTran('treatment')"
              >治疗虚拟教学培训助手</el-button
            >
            <!-- <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-excel'?'selectStyle':''" @click="handleTran('excel')"
              >数据统计助手</el-button
            > -->
            <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-guidance'?'selectStyle':''" @click="handleTran('guidance')"
              >智能导诊与患者服务助手</el-button
            >
           
           <!-- <el-button
              text
              bg
              style="width: 90%; margin-left: 5%; margin-top: 20px" :class="currentRoute=='dify-ppt'?'selectStyle':''" @click="handleTran('ppt')"
              >ppt</el-button
            >  
             -->
            
           
          
          
            
          </p>
           </div>
         
        </div>
      </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, Ref, watch } from "vue";
import { styleText } from "util";
import { useRouter,useRoute } from "vue-router";

// 定义 PPT 文件的 URL
const pptUrl = ref('https://example.com/your-presentation.pptx');
const flag = ref('code')
const emit = defineEmits(['handleScence']);
const router = useRouter();
const currentRoute = ref(null);
const route = useRoute();
console.log(route,'routerouterouterouterouterouteroute')
onMounted(()=>{
  currentRoute.value = route.name
  console.log(currentRoute.value,'currentRoute.valuecurrentRoute.valuecurrentRoute.valuecurrentRoute.value')
})
const props = defineProps({
   
    isShowScene:{
      type: Boolean,
      required: true,
    }
   
});
const handleTran=(type:any)=>{
  // emit('handleScence',type)
  if (type=='tran') {
    router.push('/dify-translate')
  } else if (type=='teacher') {
    router.push('/dify-teacher')

  } else if (type=='code') {
    router.push('/dify-code')

  } else if (type=='qa') {
    router.push('/dify-qa')

  } else if (type=='sql'){
    router.push('/dify-sql')

  }else if (type=='know'){
    router.push('/dify-knowledge')

  }else if (type=='customer'){
    router.push('/dify-customer')

  } else if (type=='memory') {
    router.push('/dify-memory')

  } else if (type=='class') {
    router.push('/dify-class')

  } else if (type=='lean'){
    router.push('/dify-lean')

  } else if(type=='gang') {
    router.push('/dify-gang')

  } else if (type==='man'){
    router.push('/dify-man')

  }else if (type==='subject') {
    router.push('/dify-subject')

  } else if (type==='excel') {
    router.push('/dify-excel')

  } else if (type==='guidance') {
    router.push('/dify-guidance')
  } else if (type==='physical') {
    router.push('/dify-physical')

  }else if (type==='text'){
    router.push('/dify-text')

  } else if (type==='health') {
    router.push('/dify-health')

  } else if (type==='treatment') {
    router.push('/dify-treatment')

  }else if (type==='car') {
    router.push('/dify-car')

  } else if (type==='virtuallearning'){
    
    router.push('/dify-virtuallearning')

  } else if (type==='ppt') {
    router.push('/dify-ppt')

  }

}



</script>
<style scoped>
.selectStyle{
  background-color: #489EE0 !important;
  color: white;
}
.rainbow-text {
  font-size: 32px;
  background: linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow-animation 5s linear infinite;
}

@keyframes rainbow-animation {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
.gradient-border {
  margin-right: 5%;
  float: left;
    width: 30%;
    padding: 0;
    border-radius: 14px;
  position: relative;
  border: 3px solid transparent;
  background: linear-gradient(white, white) padding-box, 
    /* 边框背景为从左到右的深蓝色渐变 */
                linear-gradient(to right, #051AFB, hsl(210, 86%, 78%)) border-box; 
  box-sizing: border-box;
  margin-bottom: 10px;
}
.gradient-borderS {
  margin-right: 5%;
  float: left;
    width: 30%;
    padding: 0;
    border-radius: 14px;
  position: relative;
  border: 3px solid transparent;
  background: linear-gradient(white, white) padding-box, 
    /* 边框背景为从左到右的深蓝色渐变 */
                linear-gradient(to right, #2fb4e9, hsl(310, 76%, 69%)) border-box; 
  box-sizing: border-box;
  margin-bottom: 10px;
}
.gradient-borderh {
  margin-right: 5%;
  float: left;
    width: 30%;
    padding: 0;
    border-radius: 14px;
  position: relative;
  border: 3px solid transparent;
  background: linear-gradient(white, white) padding-box, 
    /* 边框背景为从左到右的深蓝色渐变 */
                linear-gradient(to right, #0d3fe6, hsl(115, 62%, 80%)) border-box; 
  box-sizing: border-box;
  margin-bottom: 10px;
}
.glowing-box {
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 5px 5px rgba(0, 123, 255, 0.7); /* 实现发光效果 */
  animation: glow 1.5s ease-in-out infinite alternate; /* 添加动画 */
}

@keyframes glow {
  from {
    box-shadow: 0 0 5px 5px rgba(0, 123, 255, 0.7);
  }
  to {
    box-shadow: 0 0 8px 10px rgba(0, 123, 255, 0.9);
  }
}
</style>