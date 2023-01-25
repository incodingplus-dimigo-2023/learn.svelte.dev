---
title: 배열 객체 업데이트
---

Svelte의 **반응성**의 동작은 값의 **할당**에 의해서 동작됩니다. 배열의 경우 `push`, `pop`, `splice` 등의 메소드가 있지만 이러한 것들은 할당을 하는 것이 아니기 때문에 반응성이 동작하지 않습니다. 따라서 만약 반응성을 동작시키고 싶다면 다음과 같이 

```js
let numbers = [];
$: console.log(`numbers ${numbers.length}로 업데이트`);

const addNumber = () => {
	numbers.push(numbers.length + 1);
	+++numbers = numbers;+++
}
```

하지만 위의 코드를 다음과 같이 쓰는 것이 조금 더 좋은 코드입니다.

```js
const addNumber = () => {
	+++numbers = [...numbers, numbers.length + 1];+++
}
```

위의 코드를 `slice`와 조합한다면 `pop`, `shift`, `unshift`, `splice`등을 구현할 수 있습니다.

또 속성명으로 값을 할당하는 것 또한 반응성을 동작시킵니다. 예를 들어 `obj.foo += 1`이나 `array[i] = x` 등과 같은 것들입니다. 따라서 속성명을 사용해서 위의 코드를 다시 쓰면 다음과 같습니다.

```js
const addNumber = () => {
	+++numbers[numbers.length] = numbers.length + 1;+++
}
```

하지만 반응성을 동작시키려면 꼭 업데이트 하려는 객체명이 있어야 합니다. 예를 들어 다음과 같은 코드는 동작하지 않습니다.

```js
const foo = obj.foo;
foo.bar = 'baz';
```

만약 위의 코드가 반응성을 동작시키려면

```js
const foo = obj.foo;
foo.bar = 'baz';
+++obj = obj;+++
```

이런 코드를 작성하거나,

```js
---const foo = obj.foo;
foo.bar = 'baz';---
+++obj.foo.bar = 'baz';+++
```

이렇게 `obj`의 이름이 등장해야 합니다.