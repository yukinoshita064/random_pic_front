class Queue{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = [];
    }
    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }
    enqueueHead(element){
        this.lowestCount--
        this.items[this.lowestCount] = element;
    }
    dequeue(){
        if(this.isEmpty()){
            return 'queue is null';
        }
        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    peek(){
        return this.items[this.lowestCount];
    }
    isEmpty(){
        return this.count - this.lowestCount === 0;
    }
    size(){
        return this.count - this.lowestCount;
    }
    clear(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = [];
    }
    toString(){
        if(this.isEmpty())return "queue is null";
        let objString = this.items[this.lowestCount];
        for(let i = this.lowestCount+1; i < this.count;i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

export default Queue