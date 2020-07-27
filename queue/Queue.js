import LinkedList from '../linkedList/LinkedList'

 export class Queue {
    constructor() {
        this.linkedList = new LinkedList()
    }

    /**
     *
     * @param {*} value
     */
    enqueue(value) {
        this.linkedList.append(value)
    }

    /**
     *
     * @return {*}
     */
    dequeue() {
        const removedNode = this.linkedList.deleteHead()
        return removedNode ? removedNode.value : null
    }

    /**
     *
     * @return {*}
     */
    peek() {
        if (!this.linkedList.head) {
            return null
        }

        return this.linkedList.head.value
    }

    /**
     *
     * @return {*}
     */
    isEmpty() {
        return !this.linkedList.head
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
