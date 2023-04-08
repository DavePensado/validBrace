class Stack {
  constructor(maxSize, ...array) {
      this._maxSize = maxSize;
      this._size = 0;
      array.forEach(el => {
          this.push(el)
      })
  }

  get size() {
      return this._size
  }

  get isEmpty() {
      return this._size === 0;
  }


  push(value){

      if (this.size >= this._maxSize) {
          throw new RangeError('Stack overflow');
      }

      this[`_${this.size}`] = value;
      this._size++;
      return this._size;
  }

  pop() {
      if (this.isEmpty) {
          return null;
      }

      const lastItem = this[`_${this.size - 1}`];
      delete this[`_${this.size - 1}`];
      this._size--;
      return lastItem;
  }

  pick() {
      return this[`_${this.size - 1}`];
  }
}