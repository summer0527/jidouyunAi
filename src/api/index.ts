import request from '../utils/request';
// 注册

export const registerApi:string ='/regedit_login/register'

export const loginApi:string ='/regedit_login/token'
export const loginUserApi:string ='/regedit_login/users/me'
export const loginOut:string ='/regedit_login/logout'

    


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
