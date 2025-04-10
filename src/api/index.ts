import { Aim } from '@element-plus/icons-vue/dist/types';
import request from '../utils/request';
// 注册

export const registerApi:string ='/regedit_login/register'

export const loginApi:string ='/regedit_login/token'
export const loginUserApi:string ='/regedit_login/users/me'
export const loginOut:string ='/regedit_login/logout'
export const difyApi:string ='/speciality/s_speciality/'
// 忘记密码
export const passwordResetApi:string ='/regedit_login/update-password'
// 数据表字段助手
export const runApi:string ='/dify_data/workflows/run'
export const stopApi:string ='/dify_data/workflows/tasks/'
export const stopFlowApi:string ='/dify_data/workflows/run/'
// 代码生成助手
export const runCodeApi:string ='/dify_code/workflows/run'
export const stopCodeApi:string ='/dify_code/workflows/tasks/'
export const stopCodeFlowApi:string ='/dify_code/workflows/run/'
// 研发助手
export const runQaApi:string ='/dify_aq/workflows/run'
export const stopQaApi:string ='/dify_aq/workflows/tasks/'
export const stopQaFlowApi:string ='/dify_aq/workflows/run/'
// 对话记忆
export const runMemoryApi:string ='/dify_memory/chat-messages'
export const stopMemoryApi:string ='/dify_memory/chat-messages/'
export const rateMemoryApi:string ='/dify_memory/messages/'
export const historyMemoryApi:string ='/dify_memory/conversations'
export const deleMemoryApi:string ='/dify_memory/conversations/'
export const getHisMemoryApi:string ='/dify_memory/messages'
export const resetNameMemoryApi:string ='/dify_memory/conversations/'
export const addMemoryApi:string ='/dify_memory/conver_add'
// 教案生成
export const teachingApi:string ='/dify_teaching/workflows/run'
export const stopTeachingApi:string ='/dify_teaching/workflows/tasks/'
// 翻译助手
export const languageApi:string ='/dify_language/chat-messages'
export const stopLanguageApi:string ='/dify_language/'
export const fileLanguageApi:string ='/dify_language/files/upload'
// 智能客服助手
export const customerApi:string ='/dify_customer/workflows/run'
export const stopCustomerApi:string ='/dify_customer/workflows/tasks/'






    


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
