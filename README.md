## Split Any

### Desctiption

This challenge is to write a function splitAny that can take in an array, string, number, object, or function and split it into an array based on the structure, described in example.

### For example:
```js
splitAny( [ 10, { test: `test` }, () => `hello` ] ); // Returns the split value of each item in the array [ [ 1, 0 ], [ [ `test`, `test` ] ], [ `h`, `e`, `l`, `l`, `o` ] ];

splitAny( `Hello` ); // Returns [ `H`, `e`, `l`, `l`, `o` ];

splitAny( `Hello world` ); // Returns [ [ `H`, `e`, `l`, `l`, `o` ], [ `w`, `o`, `r`, `l`, `d` ] ];

splitAny( -204672 ); // Returns [ '-', 2, 0, 4, 6, 7, 2 ];

splitAny({ test: 1, anotherThing: `hello` }); // returns [ [ `test`, 1 ], [ `anotherThing`, `hello` ] ];

splitAny( () => `MyString` ); // Returns the split value of the function's return value [ `M`, `y`, `S`, `t`, `r`, `i`, `n`, `g` ];

splitAny( false ); // Throws a TypeError
```

#### Write your code in `src/index.js`
#### Run test locally `npm test`
