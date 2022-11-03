<template>
  <div id="pageBox" v-if="isStart">
    <div v-loading="isLoading" >
      <keep-alive>
        <random-picture-view :pid="getPid" :key="getPid" @onChange="resetPicData"></random-picture-view>
      </keep-alive>
    </div>
  <div class="ctrl_tab">
    <el-button @click="beforePic"> &lt; </el-button>
    <el-button @click="nextPic"> &gt; </el-button>
  </div>
  </div>
</template>

<script>
import randomPictureView from "@/components/randomPictureView";
import request from "@/units/request";
import {ElMessage} from "element-plus";

export default {
  name: "randomPageIndex",
  components:{
    randomPictureView
  },
  data(){
    return{
      playList:[],
      pointer:0,
      isLoading:false,
      isStart:false,
    }
  },
  methods:{
    getPlayList(){
      this.isLoading=true
      request.get("get/list/")
          .then(res=>{
            for (let i=0;i<res.length;i++){
              this.playList.push(res[i])
            }
            if (this.isStart){
              this.pointer++
            }
            this.isStart=true
            this.isLoading=false
          })
    },
    nextPic(){
      if (this.pointer===this.playList.length-1){
        this.getPlayList()
        return
      }
      this.pointer++
    },
    beforePic(){
      if (this.pointer===0){
        ElMessage({
          message:"没有更多了",
          type:"warning"
        })
        return
      }
      this.pointer--
    },
    resetPicData(event){
      console.log(event)
    }
  },
  computed:{
    getPid(){
      return this.playList[this.pointer]
    }
  },
  beforeMount() {
    this.getPlayList()
  },
  mounted() {

  }
}
</script>

<style scoped>
#pageBox{
  position: absolute;
  height: 95%;
  width: 95%;
}
.ctrl_tab{
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>