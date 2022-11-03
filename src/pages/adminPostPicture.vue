<template>
  <div>
    <el-form>
      <el-form-item label="标题">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="介绍">
        <el-input v-model="intro"></el-input>
      </el-form-item>
      <el-form-item label="R18">
        <el-switch
            v-model="R18"
            size="large"
            active-text="是"
            inactive-text="否"
        />
      </el-form-item>
      <el-form-item label="图链接">
        <el-input v-model="introImg" disabled/>
        <img :src="introImg" class="image">
        <el-upload
            ref="upload"
            class="upload-demo"
            id="imgUpload"
            action="https://acgnpic.com/api/v1/upload/"
            :limit="1"
            :auto-upload="false"
            :on-success="imgUploadDone"
            accept="image/*"
        >
          <template #trigger>
            <el-button type="primary">选择文件</el-button>
          </template>
          <el-button class="ml-3" type="success" @click="submitUpload" :loading="isUploadImgLoading">
            上传
          </el-button>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="postForm">
          提交
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from "@/units/request";
import {ElMessage} from "element-plus";

export default {
  name: "adminPostPicture",
  data(){
    return{
      isUploadImgLoading:false,
      introImg:'',
      title:"",
      intro:"",
      R18:false
    }
  },
  methods:{
    submitUpload(){
      this.isUploadImgLoading = true
      this.$refs.upload.submit()
    },
    imgUploadDone(res,file,n){
      setTimeout(() => {
        this.isUploadImgLoading = false
      }, 500)
      this.introImg = res.data.links.url
      console.log(file)
      console.log(n)
    },
    postForm(){
      let t="0"
      if (this.R18){
        t="1"
      }
      request.post("admin/pic/",{
        "link": this.introImg,
        "r18": t,
        "title": this.title,
        "intro": this.intro
      })
          .then(res=>{
            ElMessage({
              message:"成功",
              type:"success"
            })
            console.log(res)
          })
    },
    pushToCenter(){
      const host=location.protocol+'//' + location.host+'/login/callback'
      window.location.href="https://user.acgnworld.xyz/login"+'?fromPath='+this.$route.path+'&callBack='+host
    },
  },
  created() {
    if (!localStorage.getItem("user_token")){
      ElMessage({
        message:"请先登录",
        type:"warning"
      })
      this.pushToCenter()
    }
  }
}
</script>

<style scoped>
.image{
  max-height: 600px;
  width: auto;
}
</style>