import axios from "axios";
import {ElMessage} from "element-plus";


const request=axios.create({
    baseURL: "https://pic.acgnworld.tech/",
    timeout: 1000,

})

request.interceptors.request.use(config => {
    config.headers["Content-Type"]="application/x-www-form-urlencoded"
    //请求头设置
    config.headers["token"]=localStorage.getItem('user_token')||" "
    return config
}, err => {
    ElMessage({
        message:"请求错误",
        type:"error"
    })
    console.error(err);
})

request.interceptors.response.use(res => {
    // 对响应码的处理
    switch (res.data.status) {
        case 5000:
            ElMessage({
                message:"服务器错误",
                type:"warning"
            })
            break
        case 4031:
            ElMessage({
                message:"请求方式错误",
                type:"warning"
            })
            break
        case 4032:
            ElMessage({
                message:"服务器错误",
                type:"warning"
            })
            break
        case 4033:
            ElMessage({
                message:"数据重复",
                type:"warning"
            })
            break
        case 4034:
            ElMessage({
                message:"权限不足",
                type:"warning"
            })
            break
    }
    return res.data.data
}, err => {
    ElMessage({
        message:"服务器错误",
        type:"error"
    })
    console.log(err);
})


export default request