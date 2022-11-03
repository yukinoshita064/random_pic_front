class Stack {
    constructor() {
        this.items = [];
    }

    // 添加元素到栈顶
    push(element) {
        this.items.push(element);
    }

    // 删除栈底的元素
    pop() {
        return this.items.pop();
    }

    // 返回栈顶的元素
    peek() {
        let t=this.items[this.items.length - 1]
        this.items.pop()
        return t;
    }

    // 判断栈里还有没有元素
    isEmpty() {
        return this.items.length === 0;
    }

    // 移除栈里所有的元素
    clear() {
        this.items = [];
    }

    // 返回栈里的元素个数
    size() {
        return this.items.length;
    }
}

export default Stack