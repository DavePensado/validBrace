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

function validBrace(str) {
  let stack = new Stack(200);
  let open = ['(', '[', '{', '<'];
  let brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<'
  };

  for(let item of str) {
    if(item in brackets) {
      if(brackets[item] !== stack.pick()) {
        return false
      } else {
        stack.pop();
      }
      
    } else if(open.includes(item)){
      stack.push(item)
    }
  }

  return stack.size === 0;
}

let input1 = '({[]}<([])>)'; // true
let input2 = '([)]{[()]}'; // false
let input3 = ')}](>'; // false
let input4 = '({[2+2]}([a+2]))'; //true
let input5 = '2*([2+2]+([a+2]))'; //true

console.log(validBrace(input1))
console.log(validBrace(input2))
console.log(validBrace(input3))
console.log(validBrace(input4))
console.log(validBrace(input5))
