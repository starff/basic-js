module.exports = class DepthCalculator {
  constructor() {
    
  }
  calculateDepth(arr, depth, maxDepth) {
    this.depth = depth;
    this.arr = arr;
    this.maxDepth = maxDepth;
    if(this.depth == undefined) {
      this.depth = 1;
    };
    if(this.maxDepth === undefined) {
      this.maxDepth = [];
    };
    if(Array.isArray(this.arr)) {
      this.maxDepth.push(this.depth);
      arr.forEach((item) => {
        this.item = item;
        if(Array.isArray(this.item)) {
          this.depth++;
        return this.calculateDepth(this.item, this.depth, this.maxDepth);
      }
  })
    };
    this.depth--;
    this.maxDepth.push(this.depth);
    return Math.max(...this.maxDepth);
  }
};