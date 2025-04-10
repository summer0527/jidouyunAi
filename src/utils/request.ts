import axios, { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useRouter } from 'vue-router';
import { ElMessage,ElMessageBox } from "element-plus";
const service: AxiosInstance = axios.create({
    timeout: 5000
});
// 用于标记是否正在刷新 token
let isRefreshing = false;
const router = useRouter();
// 存储因 token 过期而挂起的请求
let requests:any = [];
service.interceptors.request.use(
  
    config => {
        const token = localStorage.getItem('token');
        const isLoginPage = config.url.includes('/regedit_login/token');

        const isRegisterPage = config.url.includes('/regedit_login/register');
        const isPassresetPage = config.url.includes('/regedit_login/update-password');


console.log(token,'token')
console.log(isLoginPage,'isLoginPage')
console.log(!token,'!token')

        if (!isLoginPage&&!isRegisterPage&&!isPassresetPage&& token==null) {
            console.log('====================')
            // router.push('/login');
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
        return response.data;
    },
   async error => {
    console.log('========================================2')
        const { config, response } = error;
      
        if (response && response.status === 401) {
            const refreshToken = localStorage.getItem('refreshToken');
            console.log(refreshToken,'refreshTokenrefreshTokenrefreshTokenrefreshTokenrefreshToken')
            const token = localStorage.getItem('token');
            const configt = {
    
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Authorization":`Bearer ${token}`
                },
              };
            const { data } = await axios.post('/regedit_login/refresh', { refresh_token:refreshToken},configt);  
            console.log(data,'data')
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("refreshToken", data.refresh_token);
            if (data.code==201) {
        // const { method, headers,url,data } = error.config;

                ElMessage({
                    message: '令牌刷新成功，请重新发送请求',
                    type: "error",
                    onClose:function () {
                        // const { data2 } = axios.method(url, data,config); 
                    }
                  });
            }
            
        }
        return Promise.reject(error);
    }
);

export default service;
