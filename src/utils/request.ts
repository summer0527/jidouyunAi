import axios, { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useRouter } from 'vue-router';
import { ElMessage,ElMessageBox } from "element-plus";
import router from '../router';
// console.log(import.meta.env.VITE_APP_ENV,'process.env.NODE_ENV11')
// console.log(import.meta.env.VITE_API_BASE_URL,'process.env.VITE_API_BASE_URL')

const service: AxiosInstance = axios.create({
    // baseURL: process.env.NODE_ENV=='production'?process.env.VUE_APP_BASE_URL:'',
    timeout: 5000
});
// 用于标记是否正在刷新 token
let isRefreshing = false;
// const router = useRouter();
// 存储因 token 过期而挂起的请求
let requests:any = [];
service.interceptors.request.use(
  
    config => {
        const token = localStorage.getItem('token');
        const isLoginPage = config.url.includes('/regedit_login/token');

        const isRegisterPage = config.url.includes('/regedit_login/register');
        const isPassresetPage = config.url.includes('/regedit_login/update-password');

        const isspeciality= config.url.includes('/specialityss/specialities');

console.log(token,'token')
console.log(isLoginPage,'isLoginPage')
console.log(!token,'!token')

        if (!isLoginPage&&!isRegisterPage&&!isPassresetPage&&!isspeciality&& token==null) {
            console.log('====================')
            router.push('/login');
            return Promise.reject(new Error('未登录，请先登录'));
        }
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        console.error('请求错误:', error);
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        console.log('0-0-0-0-0-0-0000000000000000000000000')

        return response;
    },
   async error => {
    console.log('========================================2')
        const { config, response } = error;
      
        if (response &&response.status ===401) {
            const refreshToken = localStorage.getItem('refreshToken');
            console.log(refreshToken,'refreshTokenrefreshTokenrefreshTokenrefreshTokenrefreshToken')
            const token = localStorage.getItem('token');
            const configt = {
    
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Authorization":`Bearer ${token}`
                },
              };
            await axios.post('/api/regedit_login/refresh', { refresh_token:refreshToken},configt).then(response=>{
                const {data} = response.data
                ElMessage({
                    message: '令牌刷新成功，请重新发送请求',
                    type: "error",
                    onClose:function () {
                        localStorage.setItem("token", data.access_token);
                        localStorage.setItem("refreshToken", data.refresh_token);
                    }
                  });
                
            }).catch(error=>{
            console.log(error,'datadatadatadatadatadatadatadatadatadatadatadatadata')
            if (error.status==401) {
                ElMessage({
                    message: '令牌失效，请重新登录',
                    type: "error",
                    onClose:function () {
                        localStorage.removeItem('token')
                        localStorage.removeItem('s_name')
                        localStorage.removeItem('refreshToken')
                        router.push('/login');

                    }
                  });
        
                        
                    }
            });  
        } else if (response.status===4010) {
            ElMessage({
                message: '令牌失效，请重新登录',
                type: "error",
                onClose:function () {
                    localStorage.removeItem('token')
                    localStorage.removeItem('s_name')
                    localStorage.removeItem('refreshToken')
                    router.push('/login')

                }
              });
        } else {
            return Promise.reject(error);

        }
    }
);

export default service;
