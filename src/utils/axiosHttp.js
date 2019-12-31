// export default service;
/**
 * ajax请求配置
 */
import axios from 'axios'
import apiURL from './api.js'

// axios默认配置
axios.defaults.timeout = 30000;   // 超时时间
axios.defaults.baseURL = apiURL.baseUrl;  // 默认地址
axios.defaults.headers.post['x-requested-with'] = 'XMLHttpRequest';
axios.defaults.headers.get['x-requested-with'] = 'XMLHttpRequest';
//整理数据
axios.defaults.transformRequest = function (data) {
  data = JSON.stringify(data);
  return data;
};
// 路由请求拦截
// http request 拦截器
axios.interceptors.request.use(
  config => {
  
    	config.headers['Content-Type'] = 'application/json;charset=UTF-8';	
        return config;
  },
  error => {
    return Promise.reject(error.response);
  });
// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.status!=200){
    	Toast(response.data.msg)
    	
    	return
    }else{
		
        return response;
    }
  });

export default axios;
