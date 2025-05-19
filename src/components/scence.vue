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
    <div style="margin-bottom: 10px; margin-top: -60px">
      

      <!-- 教师场景 -->
      <div style="float: left; width: 100%">
        <p
        style="
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 80px;
          flex-direction: column;
          width:1200px
        "
      >
        <img
          class="logo mr10"
          src="/image/02w.png"
          alt=""
          style="height: 68px"
        />
      
        <span style="margin-top: 10px; color: #666666; font-size: 20px"
          >灵台通九域之识，随问而应；智渊汇千圣之思，量材为导。</span
        >
      </p>
       
        <p
        class='steachp'>
        <img
          class="logo mr10"
          src="/image/rightlogo.png"
          alt=""
          style="position: absolute;
    top: 0;
    right: 0;
    z-index: -1;"
        />
        <!-- 标题 -->
        <p class='stitlestyle'>
          <img
          class="logo mr10"
          src="/image/teacher.png"
          alt=""
          style="height: 68px"
        />
        <span class='teachertitle'>教师场景-吉斗云教育大模型</span>
        <span class='teachertitle2'>JDY-Jidouyun education model</span>

        </p>
        <!-- 标题结束 -->
         <ul style='padding:10px'>
          <li  @click="handleTran('teacher')" class='teacherLi'>
            <img
          class="logo mr10"
          src="/image/te1.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='lispan'>教案生成助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
          <li  @click="handleTran('man')" class='teacherLi'>
            <img
          class="logo mr10"
          src="/image/te2.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='lispan'>辩论主持人助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
          <li  @click="handleTran('subject')" class='teacherLi'>
            <img
          class="logo mr10"
          src="/image/te3.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='lispan'>分层练习题助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
          <li  @click="handleTran('gang')" class='teacherLi'>
            <img
          class="logo mr10"
          src="/image/te4.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='lispan'>教学大纲生成助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
          <li  @click="handleTran('gang')" class='teacherLi'>
            <img
          class="logo mr10"
          src="/image/te5.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='lispan'>课堂互动问答助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
          <li  @click="handleTran('virtuallearning')" class='teacherLi' style="border-bottom: none;">
            <img
          class="logo mr10"
          src="/image/te6.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='lispan'>虚拟合作伙伴助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
         </ul>
        </p>

        <p
        class='stup'
          style="
           
          "
        >
        <img
          class="logo mr10"
          src="/image/rightlogo.png"
          alt=""
          style="position: absolute;
    top: 0;
    right: 0;
    z-index: -1;"
        />
        <!-- 标题 -->
        <p class='stitlestyle'>
          <img
          class="logo mr10"
          src="/image/studen.png"
          alt=""
          style="height: 68px"
        />
        <span class='teachertitle' style='color:#E65026'>学生场景-吉斗云学习大模型</span>
        <span class='teachertitle2' style='color:#C9CCD3'>JDY-Jidouyun learning large model</span>

        </p>
        <!-- 标题结束 -->
         <ul style='padding:10px'>
          <li  @click="handleTran('tran')" class='teacherLi'>
            <img
          class="logo mr10"
          src="/image/stu1.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='stuLi'>翻译助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
          <li  @click="handleTran('code')" class='teacherLi'>
            <img
          class="logo mr10"
          src="/image/stu2.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='stuLi'>代码生成助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
          <li  @click="handleTran('qa')" class='teacherLi'>
            <img
          class="logo mr10"
          src="/image/stu3.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='stuLi'>研发问答助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
          <li  @click="handleTran('memory')" class='teacherLi'>
            <img
          class="logo mr10"
          src="/image/stu4.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='stuLi'>对话记忆助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
          <li  @click="handleTran('lean')" class='teacherLi'>
            <img
          class="logo mr10"
          src="/image/stu5.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='stuLi'>个性化学习助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
          <li  @click="handleTran('sql')" class='teacherLi' style="border-bottom: none;">
            <img
          class="logo mr10"
          src="/image/stu6.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='stuLi'>数据表字段生成助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
         </ul>
        
        </p>

        <p
        class='instrp'
          style="
           
          "
        >
        <img
          class="logo mr10"
          src="/image/rightlogo.png"
          alt=""
          style="position: absolute;
    top: 0;
    right: 0;
    z-index: -1;"
        />
          <!-- 标题 -->
          <p class='stitlestyle'>
          <img
          class="logo mr10"
          src="/image/instr.png"
          alt=""
          style="height: 68px"
        />
        <span class='teachertitle' style='color: #EB8A4E;'>行业场景-吉斗云行业大模型</span>
        <span class='teachertitle2' style='color: #C9CCD3;'>JDY-Jidouyun industry model</span>

        </p>
        <!-- 标题结束 -->
         <ul style='padding:10px'>
          <li  @click="handleTran('physical')" class='teacherLi'>
            <img
          class="logo mr10"
          src="/image/instr1.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='instrLi'>体检助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
          <li  @click="handleTran('customer')" class='teacherLi'>
            <img
          class="logo mr10"
          src="/image/instr2.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='instrLi'>智能客服助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
          <li  @click="handleTran('know')" class='teacherLi'>
            <img
          class="logo mr10"
          src="/image/instr3.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='instrLi'>行业知识库助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
          <li  @click="handleTran('car')" class='teacherLi'>
            <img
          class="logo mr10"
          src="/image/instr4.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='instrLi'>汽车故障检修助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
          <li  @click="handleTran('treatment')" class='teacherLi'>
            <img
          class="logo mr10"
          src="/image/instr5.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='instrLi'>治疗虚拟教学培训助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
          <li  @click="handleTran('guidance')" class='teacherLi' style="border-bottom: none;">
            <img
          class="logo mr10"
          src="/image/instr6.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='instrLi'>智能导诊与患者服务助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li>
<!-- 
          <li  @click="handleTran('health')" class='teacherLi'>
            <img
          class="logo mr10"
          src="/image/te6.png"
          alt=""
          style="float: left;width: 5%;"
        />
        <span class='lispan'>心理健康支持助手</span>
        <el-icon style='float: right;width: 5%;'><ArrowRight /></el-icon>
          </li> -->
         </ul>
        
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, Ref, watch } from "vue";
import { styleText } from "util";
import { useRouter, useRoute } from "vue-router";

// 定义 PPT 文件的 URL
const pptUrl = ref("https://example.com/your-presentation.pptx");
const flag = ref("code");
const emit = defineEmits(["handleScence"]);
const router = useRouter();
const currentRoute = ref(null);
const route = useRoute();
console.log(route, "routerouterouterouterouterouteroute");
onMounted(() => {
  currentRoute.value = route.name;
  console.log(
    currentRoute.value,
    "currentRoute.valuecurrentRoute.valuecurrentRoute.valuecurrentRoute.value"
  );
});
const props = defineProps({
  isShowScene: {
    type: Boolean,
    required: true,
  },
});
const handleTran = (type: any) => {
  // emit('handleScence',type)
  if (type == "tran") {
    router.push("/dify-translate");
  } else if (type == "teacher") {
    router.push("/dify-teacher");
  } else if (type == "code") {
    router.push("/dify-code");
  } else if (type == "qa") {
    router.push("/dify-qa");
  } else if (type == "sql") {
    router.push("/dify-sql");
  } else if (type == "know") {
    router.push("/dify-knowledge");
  } else if (type == "customer") {
    router.push("/dify-customer");
  } else if (type == "memory") {
    router.push("/dify-memory");
  } else if (type == "class") {
    router.push("/dify-class");
  } else if (type == "lean") {
    router.push("/dify-lean");
  } else if (type == "gang") {
    router.push("/dify-gang");
  } else if (type === "man") {
    router.push("/dify-man");
  } else if (type === "subject") {
    router.push("/dify-subject");
  } else if (type === "excel") {
    router.push("/dify-excel");
  } else if (type === "guidance") {
    router.push("/dify-guidance");
  } else if (type === "physical") {
    router.push("/dify-physical");
  } else if (type === "text") {
    router.push("/dify-text");
  } else if (type === "health") {
    router.push("/dify-health");
  } else if (type === "treatment") {
    router.push("/dify-treatment");
  } else if (type === "car") {
    router.push("/dify-car");
  } else if (type === "virtuallearning") {
    router.push("/dify-virtuallearning");
  } else if (type === "ppt") {
    router.push("/dify-ppt");
  }
};
</script>
<style scoped>
.instrp {
  float: left;
  width: 29%;
  height: auto;
  border: 3px solid #bbbcc5;
  border-radius: 14px;
  box-sizing: border-box;
  position: relative;
  transition: all 0.3s;
  overflow: hidden; /* 防止内容溢出圆角 */
}

.instrp::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 14px;
  padding: 2px;
  background: linear-gradient(150deg, #FCAA4E 0%, #C0201B 51%, #FFB04E 98%);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.instrp:hover::before {
  opacity: 1;
}

.instrp:hover {
  border-color: transparent;
  box-shadow: 3px 9px 15px rgba(0, 0, 0, 0.05);
  /* transform: translateY(-2px);  */
}
.stup {
  float: left;
  width: 30%;
  margin-right:5%;
  height: auto;
  border: 3px solid #bbbcc5;
  border-radius: 14px;
  box-sizing: border-box;
  position: relative;
  transition: all 0.3s;
  overflow: hidden; /* 防止内容溢出圆角 */
}

.stup::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 14px;
  padding: 2px;
  background: linear-gradient(149deg, #FF835F 0%, #C2221D 27%, #FA7E54 52%);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.stup:hover::before {
  opacity: 1;
}

.stup:hover {
  border-color: transparent;
  box-shadow: 3px 9px 15px rgba(0, 0, 0, 0.05);
  /* transform: translateY(-2px);  */
}
.steachp {
  float: left;
  width: 30%;
  height: auto;
  margin-right:5%;
  border: 3px solid #bbbcc5;
  border-radius: 14px;
  box-sizing: border-box;
  position: relative;
  transition: all 0.3s;
  overflow: hidden; /* 防止内容溢出圆角 */
}

.steachp::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 14px;
  padding: 2px;
  background: linear-gradient(329deg, #FF574C 1%, #BF1F1A 28%, #F54E44 53%);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.steachp:hover::before {
  opacity: 1;
}

.steachp:hover {
  border-color: transparent;
  box-shadow: 3px 9px 15px rgba(0, 0, 0, 0.05);
  /* transform: translateY(-2px); */
}
/* .tearchli {
  float: left;
            width: 30%;
            height: auto;
            border: 3px solid #bbbcc5;
            margin-right: 5%;
            border-radius: 14px;
            box-sizing: border-box;
            z-index: 1000000;
            position: relative;
  position: relative;
  border-radius: 14px;
  transition: all 0.3s;
}

.tearchli::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 14px;
  padding: 2px;
  background: linear-gradient(329deg, #ff574c 1%, #bf1f1a 28%, #f54e44 53%);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.tearchli:hover::before {
  opacity: 1;
}

.tearchli:hover {
  box-shadow: 3px 9px 15px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
} */
.lispan{
  font-family: PingFangSC;
    font-size: 16px;
    font-weight: normal;
    line-height: normal;
    letter-spacing: 0px;
    color: #333333;
    width: 85%;
    display: block;
}
.teacherLi{
  padding: 10px;
    border-bottom: 1px solid #F7F7F7;
    display: flex
;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    cursor:pointer;
}
.lispan:hover{
  color:#BF1F1A
}
.stuLi{
  font-family: PingFangSC;
    font-size: 16px;
    font-weight: normal;
    line-height: normal;
    letter-spacing: 0px;
    color: #333333;
    width: 85%;
    display: block;
}
.stuLi:hover{
  color:#E65026
}
.instrLi{
  font-family: PingFangSC;
    font-size: 16px;
    font-weight: normal;
    line-height: normal;
    letter-spacing: 0px;
    color: #333333;
    width: 85%;
    display: block;
}
.instrLi:hover{
  color:#EB8A4E
}
.teachertitle{
  font-family: PingFangSC;
    font-size: 20px;
    font-weight: normal;
    line-height: normal;
    letter-spacing: 0px;
    color: #BF1F1A;
}
.teachertitle2{
  font-family: PingFang;
    font-size: 16px;
    font-weight: normal;
    line-height: normal;
    letter-spacing: 0px;
    color: #C9CCD3;
}
.stitlestyle{
  display: flex
;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* margin-top: 20px; */
    padding: 20px;
    box-sizing: border-box;
}
.selectStyle {
  background-color: #489ee0 !important;
  color: white;
}
.rainbow-text {
  font-size: 32px;
  background: linear-gradient(
    to right,
    #ff0000,
    #ff7f00,
    #ffff00,
    #00ff00,
    #0000ff,
    #4b0082,
    #8f00ff
  );
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
      linear-gradient(to right, #051afb, hsl(210, 86%, 78%)) border-box;
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
