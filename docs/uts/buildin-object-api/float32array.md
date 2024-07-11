# Float32Array


## 构造函数


### Constructor(length)

<!-- UTSJSON.Float32Array.Constructor.description -->

<!-- UTSJSON.Float32Array.Constructor.param -->

<!-- UTSJSON.Float32Array.Constructor.returnValue -->

<!-- UTSJSON.Float32Array.Constructor.compatibility -->

<!-- UTSJSON.Float32Array.Constructor.tutorial -->

### Constructor(array)

<!-- UTSJSON.Float32Array.Constructor_1.description -->

<!-- UTSJSON.Float32Array.Constructor_1.param -->

<!-- UTSJSON.Float32Array.Constructor_1.returnValue -->

<!-- UTSJSON.Float32Array.Constructor_1.compatibility -->

<!-- UTSJSON.Float32Array.Constructor_1.tutorial -->

### Constructor(buffer, byteOffset?, length?)

<!-- UTSJSON.Float32Array.Constructor_2.description -->

<!-- UTSJSON.Float32Array.Constructor_2.param -->

<!-- UTSJSON.Float32Array.Constructor_2.returnValue -->

<!-- UTSJSON.Float32Array.Constructor_2.compatibility -->

<!-- UTSJSON.Float32Array.Constructor_2.tutorial -->


## 静态属性


### BYTES_PER_ELEMENT

<!-- UTSJSON.Float32Array.BYTES_PER_ELEMENT.description -->

<!-- UTSJSON.Float32Array.BYTES_PER_ELEMENT.param -->

<!-- UTSJSON.Float32Array.BYTES_PER_ELEMENT.returnValue -->

<!-- UTSJSON.Float32Array.BYTES_PER_ELEMENT.compatibility -->

<!-- UTSJSON.Float32Array.BYTES_PER_ELEMENT.tutorial -->


## 静态方法


### of(...items)

<!-- UTSJSON.Float32Array.of.description -->

<!-- UTSJSON.Float32Array.of.param -->

<!-- UTSJSON.Float32Array.of.returnValue -->

<!-- UTSJSON.Float32Array.of.compatibility -->

<!-- UTSJSON.Float32Array.of.tutorial -->

### from(arrayLike,mapFn?)

<!-- UTSJSON.Float32Array.from.description -->

<!-- UTSJSON.Float32Array.from.param -->

<!-- UTSJSON.Float32Array.from.returnValue -->

<!-- UTSJSON.Float32Array.from.compatibility -->

<!-- UTSJSON.Float32Array.from.tutorial -->


## 实例属性


### BYTES_PER_ELEMENT

<!-- UTSJSON.Float32Array.BYTES_PER_ELEMENT.description -->

<!-- UTSJSON.Float32Array.BYTES_PER_ELEMENT.param -->

<!-- UTSJSON.Float32Array.BYTES_PER_ELEMENT.returnValue -->

<!-- UTSJSON.Float32Array.BYTES_PER_ELEMENT.compatibility -->

<!-- UTSJSON.Float32Array.BYTES_PER_ELEMENT.tutorial -->

### buffer

<!-- UTSJSON.Float32Array.buffer.description -->

<!-- UTSJSON.Float32Array.buffer.param -->

<!-- UTSJSON.Float32Array.buffer.returnValue -->

<!-- UTSJSON.Float32Array.buffer.compatibility -->

<!-- UTSJSON.Float32Array.buffer.tutorial -->

### byteLength

<!-- UTSJSON.Float32Array.byteLength.description -->

<!-- UTSJSON.Float32Array.byteLength.param -->

<!-- UTSJSON.Float32Array.byteLength.returnValue -->

<!-- UTSJSON.Float32Array.byteLength.compatibility -->

<!-- UTSJSON.Float32Array.byteLength.tutorial -->

### byteOffset

<!-- UTSJSON.Float32Array.byteOffset.description -->

<!-- UTSJSON.Float32Array.byteOffset.param -->

<!-- UTSJSON.Float32Array.byteOffset.returnValue -->

<!-- UTSJSON.Float32Array.byteOffset.compatibility -->

<!-- UTSJSON.Float32Array.byteOffset.tutorial -->

### length

<!-- UTSJSON.Float32Array.length.description -->

<!-- UTSJSON.Float32Array.length.param -->

<!-- UTSJSON.Float32Array.length.returnValue -->

<!-- UTSJSON.Float32Array.length.compatibility -->

<!-- UTSJSON.Float32Array.length.tutorial -->


## 实例方法


### copyWithin(target, start, end?)

<!-- UTSJSON.Float32Array.copyWithin.description -->

<!-- UTSJSON.Float32Array.copyWithin.param -->

<!-- UTSJSON.Float32Array.copyWithin.returnValue -->

```ts

let float32 = new Float32Array(8);

float32.set([1, 2, 3], 1);

float32.copyWithin(3, 0, 3);

console.log(float32.toString())
// expected output: "0,1,2,0,1,2,0,0"

```

<!-- UTSJSON.Float32Array.copyWithin.compatibility -->

<!-- UTSJSON.Float32Array.copyWithin.tutorial -->

### every(predicate)

<!-- UTSJSON.Float32Array.every.description -->

<!-- UTSJSON.Float32Array.every.param -->

<!-- UTSJSON.Float32Array.every.returnValue -->

<!-- UTSJSON.Float32Array.every.compatibility -->

```ts

let result = new Float32Array([12, 5, 8, 130, 44]).every((value: number, _: number, _a: Float32Array):
boolean => value < 40); 

expect(result).toEqual(false);
// expected output: false

```

<!-- UTSJSON.Float32Array.every.tutorial -->

### fill(value, start?, end?)

<!-- UTSJSON.Float32Array.fill.description -->

<!-- UTSJSON.Float32Array.fill.param -->

<!-- UTSJSON.Float32Array.fill.returnValue -->

<!-- UTSJSON.Float32Array.fill.compatibility -->

```ts

let float32 = new Float32Array([1, 2, 3]).fill(4);

console.log(float32.toString())
// expected output: "4,4,4"

float32 = new Float32Array([1, 2, 3]).fill(4, 1);

console.log(float32.toString())
// expected output: "1,4,4"

float32 = new Float32Array([1, 2, 3]).fill(4, 1, 2);

console.log(float32.toString())
// expected output: "1,4,3"

float32 = new Float32Array([1, 2, 3]).fill(4, 1, 1);

console.log(float32.toString())
// expected output: "1,2,3"

float32 = new Float32Array([1, 2, 3]).fill(4, -3, -2);

console.log(float32.toString())
// expected output: "4,2,3"

```

<!-- UTSJSON.Float32Array.fill.tutorial -->

### filter(predicate)

<!-- UTSJSON.Float32Array.filter.description -->

<!-- UTSJSON.Float32Array.filter.param -->

<!-- UTSJSON.Float32Array.filter.returnValue -->

```ts

let float32 = new Float32Array([12, 5, 8, 44]).filter((value: number, _: number, _a: Float32Array):
boolean => value >= 10);

console.log(float32.toString())
// expected output: "12,44""

```

<!-- UTSJSON.Float32Array.filter.compatibility -->

<!-- UTSJSON.Float32Array.filter.tutorial -->

### find(predicate)

<!-- UTSJSON.Float32Array.find.description -->

<!-- UTSJSON.Float32Array.find.param -->

<!-- UTSJSON.Float32Array.find.returnValue -->

<!-- UTSJSON.Float32Array.find.compatibility -->

```ts

let float32 = new Float32Array([4, 5, 8, 12]);

let res = float32.find((value : number, _ : number, _a : Float32Array) : boolean => value > 5);

console.log(res)
// expected output: 8

```

<!-- UTSJSON.Float32Array.find.tutorial -->

### findIndex(predicate)

<!-- UTSJSON.Float32Array.findIndex.description -->

<!-- UTSJSON.Float32Array.findIndex.param -->

<!-- UTSJSON.Float32Array.findIndex.returnValue -->

```ts

let float32 = new Float32Array([4, 6, 8, 12]);

let res = float32.findIndex((value : number, _ : number, _a : Float32Array) : boolean => value > 100);

console.log(res) 
// expected output: -1

let ufloat32 = new Float32Array([4, 6, 7, 120]);

res = ufloat32.findIndex((value : number, _ : number, _a : Float32Array) : boolean => value > 100);

console.log(res) 
// expected output: 3

```

<!-- UTSJSON.Float32Array.findIndex.compatibility -->

<!-- UTSJSON.Float32Array.findIndex.tutorial -->

### forEach(callbackfn)

<!-- UTSJSON.Float32Array.forEach.description -->

<!-- UTSJSON.Float32Array.forEach.param -->

<!-- UTSJSON.Float32Array.forEach.returnValue -->

```ts

new Float32Array([0, 1, 2, 3]).forEach((value : number, index : number, _ : Float32Array) => {
  console.log(`a[${index}] = ${value}`);
});

```

<!-- UTSJSON.Float32Array.forEach.compatibility -->

<!-- UTSJSON.Float32Array.forEach.tutorial -->

### indexOf(searchElement, fromIndex?)

<!-- UTSJSON.Float32Array.indexOf.description -->

<!-- UTSJSON.Float32Array.indexOf.param -->

<!-- UTSJSON.Float32Array.indexOf.returnValue -->

```ts

let float32 = new Float32Array([2, 5, 9])

let res = float32.indexOf(2);

console.log(res)
// expected output: 0

res = float32.indexOf(7);

console.log(res)
// expected output: -1

```

<!-- UTSJSON.Float32Array.indexOf.compatibility -->

<!-- UTSJSON.Float32Array.indexOf.tutorial -->

### join(separator?)

<!-- UTSJSON.Float32Array.join.description -->

<!-- UTSJSON.Float32Array.join.param -->

<!-- UTSJSON.Float32Array.join.returnValue -->

```ts

let float32 = new Float32Array([1, 2, 3]);

let res = float32.join();

expect(res).toEqual("1,2,3");

console.log(res); 
// expected output: "1,2,3"

res = float32.join(" / ");

expect(res).toEqual("1 / 2 / 3");

console.log(res); 
// expected output: "1 / 2 / 3"

res = float32.join("");

console.log(res); 
// expected output: "123""

```

<!-- UTSJSON.Float32Array.join.compatibility -->

<!-- UTSJSON.Float32Array.join.tutorial -->

### map(callbackfn)

<!-- UTSJSON.Float32Array.map.description -->

<!-- UTSJSON.Float32Array.map.param -->

<!-- UTSJSON.Float32Array.map.returnValue -->

<!-- UTSJSON.Float32Array.map.compatibility -->

<!-- UTSJSON.Float32Array.map.tutorial -->

### reduce(callbackfn)

<!-- UTSJSON.Float32Array.reduce.description -->

<!-- UTSJSON.Float32Array.reduce.param -->

<!-- UTSJSON.Float32Array.reduce.returnValue -->

<!-- UTSJSON.Float32Array.reduce.compatibility -->

<!-- UTSJSON.Float32Array.reduce.tutorial -->

### reduceRight(callbackfn)

<!-- UTSJSON.Float32Array.reduceRight.description -->

<!-- UTSJSON.Float32Array.reduceRight.param -->

<!-- UTSJSON.Float32Array.reduceRight.returnValue -->

<!-- UTSJSON.Float32Array.reduceRight.compatibility -->

<!-- UTSJSON.Float32Array.reduceRight.tutorial -->

### reverse()

<!-- UTSJSON.Float32Array.reverse.description -->

<!-- UTSJSON.Float32Array.reverse.param -->

<!-- UTSJSON.Float32Array.reverse.returnValue -->

<!-- UTSJSON.Float32Array.reverse.compatibility -->

<!-- UTSJSON.Float32Array.reverse.tutorial -->

### set(array, offset?)

<!-- UTSJSON.Float32Array.set.description -->

<!-- UTSJSON.Float32Array.set.param -->

<!-- UTSJSON.Float32Array.set.returnValue -->

<!-- UTSJSON.Float32Array.set.compatibility -->

<!-- UTSJSON.Float32Array.set.tutorial -->

### slice(start?, end?)

<!-- UTSJSON.Float32Array.slice.description -->

<!-- UTSJSON.Float32Array.slice.param -->

<!-- UTSJSON.Float32Array.slice.returnValue -->

<!-- UTSJSON.Float32Array.slice.compatibility -->

<!-- UTSJSON.Float32Array.slice.tutorial -->

### some(predicate)

<!-- UTSJSON.Float32Array.some.description -->

<!-- UTSJSON.Float32Array.some.param -->

<!-- UTSJSON.Float32Array.some.returnValue -->

<!-- UTSJSON.Float32Array.some.compatibility -->

<!-- UTSJSON.Float32Array.some.tutorial -->

### sort(compareFn?)

<!-- UTSJSON.Float32Array.sort.description -->

<!-- UTSJSON.Float32Array.sort.param -->

<!-- UTSJSON.Float32Array.sort.returnValue -->

<!-- UTSJSON.Float32Array.sort.compatibility -->

<!-- UTSJSON.Float32Array.sort.tutorial -->

### subarray(begin?, end?)

<!-- UTSJSON.Float32Array.subarray.description -->

<!-- UTSJSON.Float32Array.subarray.param -->

<!-- UTSJSON.Float32Array.subarray.returnValue -->

<!-- UTSJSON.Float32Array.subarray.compatibility -->

<!-- UTSJSON.Float32Array.subarray.tutorial -->

### toString()

<!-- UTSJSON.Float32Array.toString.description -->

<!-- UTSJSON.Float32Array.toString.param -->

<!-- UTSJSON.Float32Array.toString.returnValue -->

<!-- UTSJSON.Float32Array.toString.compatibility -->

<!-- UTSJSON.Float32Array.toString.tutorial -->

### values()

<!-- UTSJSON.Float32Array.values.description -->

<!-- UTSJSON.Float32Array.values.param -->

<!-- UTSJSON.Float32Array.values.returnValue -->

<!-- UTSJSON.Float32Array.values.compatibility -->

<!-- UTSJSON.Float32Array.values.tutorial -->

### entries()

<!-- UTSJSON.Float32Array.entries.description -->

<!-- UTSJSON.Float32Array.entries.param -->

<!-- UTSJSON.Float32Array.entries.returnValue -->

<!-- UTSJSON.Float32Array.entries.compatibility -->

<!-- UTSJSON.Float32Array.entries.tutorial -->

### keys()

<!-- UTSJSON.Float32Array.keys.description -->

<!-- UTSJSON.Float32Array.keys.param -->

<!-- UTSJSON.Float32Array.keys.returnValue -->



<!-- UTSJSON.Float32Array.keys.compatibility -->

<!-- UTSJSON.Float32Array.keys.tutorial -->


