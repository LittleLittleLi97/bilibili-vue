const { getRandomInt } = require("../js-ext");

export default class RandomQueue {
    constructor() {
        this.queue = [];
    }
    push(data) {
        this.queue.push(data);
    }
    get() {
        const index = getRandomInt(this.length());
        const data = this.queue[index];
        this.queue[index] = this.queue[this.length() - 1];
        this.queue.pop();
        return data;
    }
    clear() {
        this.queue = [];
    }
    length() {
        return this.queue.length;
    }
    filter(callback) {
        this.queue = this.queue.filter(callback);
        console.log(this.queue)
    }
}