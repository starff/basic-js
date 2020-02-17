const chainMaker = {
  newChain: [],
  result: 'a',

  getLength() {
    return this.newChain.length;
  },
  addLink(value) {
    this.newChain.push('( ' +value+ ' )');
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.newChain.length || typeof position == 'string') {
      this.newChain = [];   //перед выбрасыванием ошибкой стереть цепь... (очень долго доходило) 
      throw new Error;
    } else {
      this.newChain.splice(position - 1, 1);
      return this;
    }
    
  },
  reverseChain() {
    this.newChain.reverse();
    return this;
  },
  finishChain() {
    this.result = this.newChain.join('~~');
    this.newChain = [];
    return this.result;
  }
};

module.exports = chainMaker;
