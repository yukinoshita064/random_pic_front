import {createStore} from "vuex";
import Queue from "./Queue";
import request from "@/units/request";
import Stack from "@/units/Stack";


const store=createStore({
    state:{
        playQueue:{},
        playedStack: {}
    },
    getters:{
        getQueue(state){
            console.log("Queue:"+state.playQueue)
            return state.playQueue.dequeue()
        },
        getQueueLength(state){
            return state.playQueue.size()
        },
        getStack(state){
            console.log("Stack:"+state.playedStack)
            return state.playedStack.pop()
        },
        getStackLength(state){
            return state.playedStack.size()
        },

    },
    mutations:{
        initQueue(state){
            state.playQueue=new Queue()
        },
        putQueue(state,item){
            state.playQueue.enqueue(item)
        },
        putQueueHead(state,item){
            state.playQueue.enqueueHead(item)
        },
        initStack(state){
            state.playedStack=new Stack()
        },
        putStack(state,item){
            state.playedStack.push(item)
        },
    },
    actions:{
        getFromNet(context){
            request.get("get/list/")
                .then(res=>{
                    console.log(res)
                    for (let i=0;i<res.length;i++){
                        context.commit('putQueue',res[i])
                    }

                })
        }
    }
})

export default store