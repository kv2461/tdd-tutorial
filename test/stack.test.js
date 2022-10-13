class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    let value = this.items[this.top];
    return value;
  }
  
}

describe ('My Stack', () => {

  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push('🥑');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🥑');
    expect(stack.items[0]).toBe('🥑');
  });

  it('can pop off', () => {
    stack.push('🥑')
    stack.pop();

    expect(stack.pop()).toBe('🥑');
  
  });
})









// class Stack {
//   constructor() {
//     this.top = -1;
//     this.items = {};
//   }

//   get peek() {
//     return this.items[this.top];
//   }

//   push(value) {
//     this.top += 1;
//     this.items[this.top] = value;
//   }
// }

// describe('My Stack', () => {
//   let stack;

//   beforeEach(() => {
//     stack = new Stack();
//   });

//   it('is created empty', () => {
//     expect(stack.top).toBe(-1);
//     expect(stack.items).toEqual({});
//   });

//   it('can push to the top', () => {
//     stack.push('🥑');
//     expect(stack.top).toBe(0);
//     expect(stack.peek).toBe('🥑');

//     stack.push('🌽');
//     expect(stack.top).toBe(1);
//     expect(stack.peek).toBe('🌽');
//   });

//   it.todo('can pop off');
// });
