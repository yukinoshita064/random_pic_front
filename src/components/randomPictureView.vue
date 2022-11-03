<template>
    <div v-loading="isLoading" class="imgShow" id="imgBack">
      <img :src="picData.link" :alt="picData.title">
      <div class="infoTab">
        <h4>
          {{picData.title}}
        </h4>
        <p>
          {{picData.intro}}
        </p>
      </div>
    </div>
</template>

<script>
import request from "@/units/request";

export default {
  name: "randomPictureView",
  props:{
    pid:Number
  },
  data(){
    return{
      picData:{
        "id": 1,
        "picID": "",
        "title": "",
        "intro": "",
        "tags": "",
        "link": "",
        "isR18": false
      },
      isLoading:false
    }
  },
  methods:{
    getFromID(){
      this.isLoading=true
      request.get("get/pic/?pid="+this.pid)
          .then(res=>{
            this.picData=res
            this.$emit("onChange",res)
            this.isLoading=false
          })
    }
  },
  beforeMount() {
  },
  mounted() {
    this.getFromID()
  }
}
</script>

<style scoped>
img{
  max-width: 95%;
  margin: 0 auto;
  border: none;
}
.imgShow{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  position: absolute;
  height: 100%;
  width: 100%;
  max-height: 95%;
  margin-top: 5px;
}

.infoTab{
  width: 100%;
  background: linear-gradient(99.4deg,#00a3ff .43%,#00b6f7 99.04%);
  opacity: 0.8;
  bottom: 10px;
}
</style>