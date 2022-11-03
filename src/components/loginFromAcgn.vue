<template>
  <div>
    <div v-if="loading">
      加载中
    </div>
    <div v-else>
      {{swapToken}}
    </div>
  </div>
</template>

<script>
import {ElMessage} from "element-plus";
import request from "@/units/request";

export default {
  name: "userCenterCallBack",
  data(){
    return{
      swapToken:this.$route.query.swapToken,
      username:this.$route.query.username,
      fromPath:this.$route.query.fromPath,
      loading:false
    }
  },
  methods:{
    postSwapData(){
      this.loading=true
      const serverLogin="admin/user/"
      request.post(serverLogin,{
        'swapToken':this.swapToken
      })
          .then((result)=>{
            localStorage.setItem('user_name',this.username)
            localStorage.setItem('user_token',result)
              ElMessage({
                message:'登录成功',
                type:'success'
              })
              setTimeout(()=>{
                this.$router.push({
                  path:this.fromPath,
                },300)
              })
            this.loading=false
          })
    }
  },
  mounted() {
    this.postSwapData()
  }
}
</script>

<style scoped>

</style>