import LinkedList from '../linkedList/LinkedList'

export class Stack {
    constructor() {
        this.linkedList = new LinkedList()
    }

    /**
     *
     * @return {boolean}
     */
    isEmpty() {
        return !this.linkedList.head
    }

    /**
     * 添加在链表头部，头部->next，下一个，栈底
     * @param {*} value
     */
    push(value) {
        this.linkedList.prepend(value)
    }

    /**
     *
     * @return {*}
     */
    pop() {
        const removedHead = this.linkedList.deleteHead()
        return removedHead ? removedHead.value : null
    }

    /**
     *
     * @return {*}
     */
    peek() {
        if (this.isEmpty()) {
            return null
        }

        return this.linkedList.head.value
    }

    /**
     *
     * @return {*[]}
     */
    toArray() {
        return this.linkedList.toArray().map(linkedListNode => linkedListNode.value)
    }

    /**
     *
     * @param [callback]
     * @return {string}
     */
    toString(callback) {
        return this.linkedList.toString(callback)
    }
}
