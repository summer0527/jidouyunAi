import axios, { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useRouter } from 'vue-router';
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
        const isLoginPage = config.url.includes('/login');

        if (!isLoginPage && !token) {
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
        return response.data;
    },
   async error => {
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
            const { data } = await axios.post('/login/refresh', { refresh_token:refreshToken},configt);
        }
        return Promise.reject(error);
    }
);

export default service;
