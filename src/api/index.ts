import { Aim } from '@element-plus/icons-vue/dist/types';
import request from '../utils/request';
const baseURL = import.meta.env.VITE_APP_ENV=='pro'?'/api':''

console.log(baseURL,'=-=-=-=-=-=-=-=-=')
// baseURL: process.env.NODE_ENV=='production'?process.env.VITE_API_BASE_URL:'',
// 注册

export const registerApi:string =baseURL+'/regedit_login/register'

export const loginApi:string =baseURL+'/regedit_login/token'
export const loginUserApi:string =baseURL+'/regedit_login/users/me'
export const loginOut:string =baseURL+'/regedit_login/logout'
export const difyApi:string =baseURL+'/speciality/s_speciality/'
// 忘记密码
export const passwordResetApi:string =baseURL+'/regedit_login/update-password'
// 数据表字段助手
// export const runApi:string =baseURL+'/dify_data/workflows/run'
// export const stopApi:string =baseURL+'/dify_data/workflows/tasks/'
// export const stopFlowApi:string =baseURL+'/dify_data/workflows/run/'





// 对话存储接口
export const addSqlApi:string =baseURL+'/dify_data/conver_add'
// 发送对话接口
export const runSqlApi:string =baseURL+'/dify_data/chat-messages'

// 消息反馈接口
export const feedbacksSqlApi:string =baseURL+'/dify_data/messages/'
// 获取会话列表接口
export const getListSqlApi:string =baseURL+'/dify_data/conversations/unique'
// 删除会话接口
export const deleSqlApi:string =baseURL+'/dify_data/delete-conversations/'
export const resetSqlApi:string =baseURL+'/dify_data/conversations/'
// 重命名接口
export const stopSqlApi:string =baseURL+'/dify_data/chat-messages/'
// 获取会话历史消息接口
export const historySqlApi:string =baseURL+'/dify_data/messages'



// 代码生成助手
// export const runCodeApi:string =baseURL+'/dify_code/workflows/run'
// export const stopCodeApi:string =baseURL+'/dify_code/workflows/tasks/'
// export const stopCodeFlowApi:string =baseURL+'/dify_code/workflows/run/'






// 对话存储接口
export const addCodeApi:string =baseURL+'/dify_code/conver_add'
// 发送对话接口
export const runCodeApi:string =baseURL+'/dify_code/chat-messages'

// 消息反馈接口
export const feedbacksCodeApi:string =baseURL+'/dify_code/messages/'
// 获取会话列表接口
export const getListCodeApi:string =baseURL+'/dify_code/conversations/unique'
// 删除会话接口
export const deleCodeApi:string =baseURL+'/dify_code/delete-conversations/'
export const resetCodeApi:string =baseURL+'/dify_code/conversations/'
// 重命名接口
export const stopCodeApi:string =baseURL+'/dify_code/chat-messages/'
// 获取会话历史消息接口
export const historyCodeApi:string =baseURL+'/dify_code/messages'
// 研发助手
// export const runQaApi:string =baseURL+'/dify_aq/workflows/run'
// export const stopQaApi:string =baseURL+'/dify_aq/workflows/tasks/'
// export const stopQaFlowApi:string =baseURL+'/dify_aq/workflows/run/'




// 对话存储接口
export const addAqApi:string =baseURL+'/dify_aq/conver_add'
// 发送对话接口
export const runAqApi:string =baseURL+'/dify_aq/chat-messages'

// 消息反馈接口
export const feedbacksAqApi:string =baseURL+'/dify_aq/messages/'
// 获取会话列表接口
export const getListAqApi:string =baseURL+'/dify_aq/conversations/unique'
// 删除会话接口
export const deleAqApi:string =baseURL+'/dify_aq/delete-conversations/'
export const resetAqApi:string =baseURL+'/dify_aq/conversations/'
// 重命名接口
export const stopAqApi:string =baseURL+'/dify_aq/chat-messages/'
// 获取会话历史消息接口
export const historyAqApi:string =baseURL+'/dify_aq/messages'




// 对话记忆
export const runMemoryApi:string =baseURL+'/dify_memory/chat-messages'
export const stopMemoryApi:string =baseURL+'/dify_memory/chat-messages/'
export const rateMemoryApi:string =baseURL+'/dify_memory/messages/'
export const historyMemoryApi:string =baseURL+'/dify_memory/conversations/unique'
// export const deleMemoryApi:string =baseURL+'/dify_memory/conversations/'
export const deleMemoryApi:string =baseURL+'/dify_memory/delete-conversations/'

export const getHisMemoryApi:string =baseURL+'/dify_memory/messages'
export const resetNameMemoryApi:string =baseURL+'/dify_memory/conversations/'
export const addMemoryApi:string =baseURL+'/dify_memory/conver_add'
// 教案生成
// export const teachingApi:string =baseURL+'/dify_teaching/workflows/run'
// export const stopTeachingApi:string =baseURL+'/dify_teaching/workflows/tasks/'
// export const getListTeachingApi:string =baseURL+'/dify_teaching/lists'
// export const historyTeacherApi:string =baseURL+'/dify_teaching/lists'
// export const deleTeacherApi:string =baseURL+'/dify_teaching/delete-conversations/'
// export const resetNameTeacherApi:string =baseURL+'/dify_teaching/conversations/'
// export const addTeacherApi:string =baseURL+'/dify_teaching/conver_add'


// 对话存储接口
export const addTeachingApi:string =baseURL+'/dify_teaching/conver_add'
// 发送对话接口
export const runLTeachingApi:string =baseURL+'/dify_teaching/chat-messages'

// 消息反馈接口
export const feedbacksTeachingApi:string =baseURL+'/dify_teaching/messages/'
// 获取会话列表接口
export const getListTeachingApi:string =baseURL+'/dify_teaching/conversations/unique'
// 删除会话接口
export const deleTeachingApi:string =baseURL+'/dify_teaching/delete-conversations/'
export const resetTeachingApi:string =baseURL+'/dify_teaching/conversations/'
// 重命名接口
export const stopTeachingApi:string =baseURL+'/dify_teaching/chat-messages/'
// 获取会话历史消息接口
export const historyTeachingApi:string =baseURL+'/dify_teaching/messages'

// 翻译助手
// 对话存储接口
export const addLanguageApi:string =baseURL+'/dify_language/conver_add'
// 发送对话接口
export const runLanguageApi:string =baseURL+'/dify_language/chat-messages'
export const newrunLanguageApi:string =baseURL+'/newlanguage/chat-messages'

// 消息反馈接口
export const feedbacksLanguageApi:string =baseURL+'/dify_language/messages/'
// 获取会话列表接口
export const getListLanguageApi:string =baseURL+'/dify_language/conversations/unique'
// 删除会话接口
export const deleLanguageApi:string =baseURL+'/dify_language/delete-conversations/'
export const resetLanguageApi:string =baseURL+'/dify_language/conversations/'
// 重命名接口
export const stopLanguageApi:string =baseURL+'/dify_language/chat-messages/'
// 获取会话历史消息接口
export const historyLanguageApi:string =baseURL+'/dify_language/messages'

// 智能客服助手
export const customerApi:string =baseURL+'/dify_customer/workflows/run'
// export const stopCustomerApi:string =baseURL+'/dify_customer/workflows/tasks/'

export const uploadApi:string=baseURL+'/dify_customer/files/upload'



// 对话存储接口
export const addCustomerApi:string =baseURL+'/dify_customer/conver_add'
// 发送对话接口
export const runCustomerApi:string =baseURL+'/dify_customer/chat-messages'

// 消息反馈接口
export const feedbacksCustomerApi:string =baseURL+'/dify_customer/messages/'
// 获取会话列表接口
export const getListCustomerApi:string =baseURL+'/dify_customer/conversations/unique'
// 删除会话接口
export const deleCustomerApi:string =baseURL+'/dify_customer/delete-conversations/'
export const resetCustomerApi:string =baseURL+'/dify_customer/conversations/'
// 重命名接口
export const stopCustomerApi:string =baseURL+'/dify_customer/chat-messages/'
// 获取会话历史消息接口
export const historyCustomerApi:string =baseURL+'/dify_customer/messages'






// 专业知识库助手
// export const runKnowledgeApi:string =baseURL+'/dify_knowledge/workflows/run'
// export const stopKnowledgApi:string =baseURL+'/dify_knowledge/workflows/tasks/'
// 课堂互动助手
// export const runClassApi:string =baseURL+'/dify_class/workflows/run'
// export const stopClassApi:string =baseURL+'/dify_class/workflows/tasks/'

// 对话存储接口
export const addknowledgeApi:string =baseURL+'/dify_knowledge/conver_add'
// 发送对话接口
export const runLknowledgeApi:string =baseURL+'/dify_knowledge/chat-messages'

// 消息反馈接口
export const feedbacksknowledgeApi:string =baseURL+'/dify_knowledge/messages/'
// 获取会话列表接口
export const getListknowledgeApi:string =baseURL+'/dify_knowledge/conversations/unique'
// 删除会话接口
export const deleknowledgeApi:string =baseURL+'/dify_knowledge/delete-conversations/'
export const resetknowledgeApi:string =baseURL+'/dify_knowledge/conversations/'
// 重命名接口
export const stopknowledgeApi:string =baseURL+'/dify_knowledge/chat-messages/'
// 获取会话历史消息接口
export const historyknowledgeApi:string =baseURL+'/dify_knowledge/messages'



// 对话存储接口
export const addClassApi:string =baseURL+'/dify_class/conver_add'
// 发送对话接口
export const runLClassApi:string =baseURL+'/dify_class/chat-messages'

// 消息反馈接口
export const feedbacksClassApi:string =baseURL+'/dify_class/messages/'
// 获取会话列表接口
export const getListClassApi:string =baseURL+'/dify_class/conversations/unique'
// 删除会话接口
export const deleClassApi:string =baseURL+'/dify_class/delete-conversations/'
export const resetClassApi:string =baseURL+'/dify_class/conversations/'
// 重命名接口
export const stopClassApi:string =baseURL+'/dify_class/chat-messages/'
// 获取会话历史消息接口
export const historyClassApi:string =baseURL+'/dify_class/messages'
// 个性化学习助手
// export const runLeanApi:string =baseURL+'/dify_lean/workflows/run'
// export const stopLeanApi:string =baseURL+'/dify_lean/workflows/tasks/'





// 对话存储接口
export const addLeanApi:string =baseURL+'/dify_lean/conver_add'
// 发送对话接口
export const runLeanApi:string =baseURL+'/dify_lean/chat-messages'

// 消息反馈接口
export const feedbacksLeanApi:string =baseURL+'/dify_lean/messages/'
// 获取会话列表接口
export const getListLeanApi:string =baseURL+'/dify_lean/conversations/unique'
// 删除会话接口
export const deleLeanApi:string =baseURL+'/dify_lean/delete-conversations/'
export const resetLeanApi:string =baseURL+'/dify_lean/conversations/'
// 重命名接口
export const stopLeanApi:string =baseURL+'/dify_lean/chat-messages/'
// 获取会话历史消息接口
export const historyLeanApi:string =baseURL+'/dify_lean/messages'






// 教学大纲生成助手
// export const runGangApi:string =baseURL+'/dify_gang/workflows/run'
// export const stopGangApi:string =baseURL+'/dify_gang/workflows/tasks/'    




// 对话存储接口
export const addGangApi:string =baseURL+'/dify_gang/conver_add'
// 发送对话接口
export const runLGangApi:string =baseURL+'/dify_gang/chat-messages'

// 消息反馈接口
export const feedbacksGangApi:string =baseURL+'/dify_gang/messages/'
// 获取会话列表接口
export const getListGangApi:string =baseURL+'/dify_gang/conversations/unique'
// 删除会话接口
export const deleGangApi:string =baseURL+'/dify_gang/delete-conversations/'
export const resetGangApi:string =baseURL+'/dify_gang/conversations/'
// 重命名接口
export const stopGangApi:string =baseURL+'/dify_gang/chat-messages/'
// 获取会话历史消息接口
export const historyGangApi:string =baseURL+'/dify_gang/messages'
// 辩论主持人助手
// export const runManApi:string =baseURL+'/dify_man/workflows/run'
// export const stopManApi:string =baseURL+'/dify_man/workflows/tasks/'   




// 对话存储接口
export const addManApi:string =baseURL+'/dify_man/conver_add'
// 发送对话接口
export const runManApi:string =baseURL+'/dify_man/chat-messages'

// 消息反馈接口
export const feedbacksManApi:string =baseURL+'/dify_man/messages/'
// 获取会话列表接口
export const getListManApi:string =baseURL+'/dify_man/conversations/unique'
// 删除会话接口
export const deleManApi:string =baseURL+'/dify_man/delete-conversations/'
export const resetManApi:string =baseURL+'/dify_man/conversations/'
// 重命名接口
export const stopManApi:string =baseURL+'/dify_man/chat-messages/'
// 获取会话历史消息接口
export const historyManApi:string =baseURL+'/dify_man/messages'
// 分层练习题助手
// export const runSubjectApi:string =baseURL+'/dify_sub/workflows/run'
// export const stopSubjectApi:string =baseURL+'/dify_sub/workflows/tasks/'   



// 对话存储接口
export const addSubjectApi:string =baseURL+'/dify_sub/conver_add'
// 发送对话接口
export const runSubjectApi:string =baseURL+'/dify_sub/chat-messages'

// 消息反馈接口
export const feedbacksSubjectApi:string =baseURL+'/dify_sub/messages/'
// 获取会话列表接口
export const getListSubjectApi:string =baseURL+'/dify_sub/conversations/unique'
// 删除会话接口
export const deleSubjectApi:string =baseURL+'/dify_sub/delete-conversations/'
export const resetSubjectApi:string =baseURL+'/dify_sub/conversations/'
// 重命名接口
export const stopSubjectApi:string =baseURL+'/dify_sub/chat-messages/'
// 获取会话历史消息接口
export const historySubjectApi:string =baseURL+'/dify_sub/messages'


// excel助手
// 对话存储接口
export const addExcelApi:string =baseURL+'/dify_excel/conver_add'
// 发送对话接口
export const runExcelApi:string =baseURL+'/dify_excel/chat-messages'

// 消息反馈接口
export const feedbacksExcelApi:string =baseURL+'/dify_excel/messages/'
// 获取会话列表接口
export const getListExcelApi:string =baseURL+'/dify_excel/conversations/unique'
// 删除会话接口
export const deleExcelApi:string =baseURL+'/dify_excel/delete-conversations/'
export const resetExcelApi:string =baseURL+'/dify_excel/conversations/'
// 重命名接口
export const stopExcelApi:string =baseURL+'/dify_excel/chat-messages/'
// 获取会话历史消息接口
export const historyExcelApi:string =baseURL+'/dify_excel/messages'
// 智能导诊与患者服务助手
// export const runGuidanceApi:string =baseURL+'/dify_zndz/chat-messages'
// export const stopGuidanceApi:string =baseURL+'/dify_zndz/workflows/tasks/'



// 翻译助手
// 对话存储接口
export const addGuidanceApi:string =baseURL+'/dify_doctor/conver_add'
// 发送对话接口
export const runGuidanceApi:string =baseURL+'/dify_doctor/chat-messages'

// 消息反馈接口
export const feedbacksGuidanceApi:string =baseURL+'/dify_doctor/messages/'
// 获取会话列表接口
export const getListGuidanceApi:string =baseURL+'/dify_doctor/conversations/unique'
// 删除会话接口
export const deleGuidanceApi:string =baseURL+'/dify_doctor/delete-conversations/'
export const resetGuidanceApi:string =baseURL+'/dify_doctor/conversations/'
// 重命名接口
export const stopGuidanceApi:string =baseURL+'/dify_doctor/chat-messages/'
// 获取会话历史消息接口
export const historyGuidanceApi:string =baseURL+'/dify_doctor/messages'
// 体检助手
// export const runPhysicalApi:string =baseURL+'/dify_physical/workflows/run'
// export const stopPhysicalApi:string =baseURL+'/dify_physical/workflows/tasks/'








// 对话存储接口
export const addPhysicalApi:string =baseURL+'/dify_physical/conver_add'
// 发送对话接口
export const runPhysicalApi:string =baseURL+'/dify_physical/chat-messages'

// 消息反馈接口
export const feedbacksPhysicalApi:string =baseURL+'/dify_physical/messages/'
// 获取会话列表接口
export const getListPhysicalApi:string =baseURL+'/dify_physical/conversations/unique'
// 删除会话接口
export const delePhysicalApi:string =baseURL+'/dify_physical/delete-conversations/'
export const resetPhysicalApi:string =baseURL+'/dify_physical/conversations/'
// 重命名接口
export const stopPhysicalApi:string =baseURL+'/dify_physical/chat-messages/'
// 获取会话历史消息接口
export const historyPhysicalApi:string =baseURL+'/dify_physical/messages'

// 心理健康支持助手


// 对话存储接口
export const addHealthApi:string =baseURL+'/dify_health/conver_add'
// 发送对话接口
export const runHealthApi:string =baseURL+'/dify_health/chat-messages'

// 消息反馈接口
export const feedbacksHealthApi:string =baseURL+'/dify_health/messages/'
// 获取会话列表接口
export const getListHealthApi:string =baseURL+'/dify_health/conversations/unique'
// 删除会话接口
export const deleHealthApi:string =baseURL+'/dify_health/delete-conversations/'
export const resetHealthApi:string =baseURL+'/dify_health/conversations/'
// 重命名接口
export const stopHealthApi:string =baseURL+'/dify_health/chat-messages/'
// 获取会话历史消息接口
export const historyHealthApi:string =baseURL+'/dify_health/messages'


// 对话存储接口
export const addtreatmentApi:string =baseURL+'/dify_treatment/conver_add'
// 发送对话接口
export const runtreatmentApi:string =baseURL+'/dify_treatment/chat-messages'

// 消息反馈接口
export const feedbackstreatmentApi:string =baseURL+'/dify_treatment/messages/'
// 获取会话列表接口
export const getListtreatmentApi:string =baseURL+'/dify_treatment/conversations/unique'
// 删除会话接口
export const deletreatmentApi:string =baseURL+'/dify_treatment/delete-conversations/'
export const resettreatmentApi:string =baseURL+'/dify_treatment/conversations/'
// 重命名接口
export const stoptreatmentApi:string =baseURL+'/dify_treatment/chat-messages/'
// 获取会话历史消息接口
export const historytreatmentApi:string =baseURL+'/dify_treatment/messages'


// 对话存储接口
export const addcarApi:string =baseURL+'/dify_car/conver_add'
// 发送对话接口
export const runcarApi:string =baseURL+'/dify_car/chat-messages'
export const runcarApi2:string =baseURL+'/dify_carss/chat'

export const uploadApi2:string =baseURL+'/dify_carss/upload'

// 消息反馈接口
export const feedbackscarApi:string =baseURL+'/dify_car/messages/'
// 获取会话列表接口
export const getListcarApi:string =baseURL+'/dify_car/conversations/unique'
// 删除会话接口
export const delecarApi:string =baseURL+'/dify_car/delete-conversations/'
export const resetcarApi:string =baseURL+'/dify_car/conversations/'
// 重命名接口
export const stopcarApi:string =baseURL+'/dify_car/chat-messages/'
// 获取会话历史消息接口
export const historycarApi:string =baseURL+'/dify_car/messages'



// 对话存储接口
export const addvirtuallearningApi:string =baseURL+'/dify_virtuallearning/conver_add'
// 发送对话接口
export const runvirtuallearningApi:string =baseURL+'/dify_virtuallearning/chat-messages'

// 消息反馈接口
export const feedbacksvirtuallearningApi:string =baseURL+'/dify_virtuallearning/messages/'
// 获取会话列表接口
export const getListvirtuallearningApi:string =baseURL+'/dify_virtuallearning/conversations/unique'
// 删除会话接口
export const delevirtuallearningApi:string =baseURL+'/dify_virtuallearning/delete-conversations/'
export const resetvirtuallearningApi:string =baseURL+'/dify_virtuallearning/conversations/'
// 重命名接口
export const stopvirtuallearningApi:string =baseURL+'/dify_virtuallearning/chat-messages/'
// 获取会话历史消息接口
export const historyvirtuallearningApi:string =baseURL+'/dify_virtuallearning/messages'
export const specialitiesApi:string =baseURL+'/specialityss/specialities'


export const fetchData = () => {
    return request({
        url: './mock/user.json',
        method: 'get'
    });
};
export const fetchUserData = () => {
    return request({
        url: './mock/user.json',
        method: 'get'
    });
};
export const fetchRoleData = () => {
    return request({
        url: './mock/role.json',
        method: 'get'
    });
};
// 注册
export const regeditData = () => {
    return request({
        url: '/regedit',
        method: 'post'
    });
};
