---
title: 반응성 선언
---

Svelte는 변수와 DOM의 동기화 뿐 아니라 변수의 동기화 또한 가능합니다. 아래는 `count`의 두 배한 값을 할당한 `double`에 대한 내용입니다.

```js
/// file: App.svelte
let count = 1;
let double = count * 2;
count += 1;
console.log(count, double);
```

위의 코드에 따르면 `count`가 `1`일 때 `double`에 값을 할당했기에 아래에서 `count += 1`을 하더라도 `double` 변수는 바뀌지 않습니다. 그리고 이렇게 어떤 변수가 바뀔 때마다 다시 `double` 변수를 평가하는 코드는 자바스크립트에는 없습니다. 하지만 Svelte에서는 가능합니다.

```js
/// file: App.svelte
let count = 0;
+++$: double = count * 2;+++
```

> 이건 Svelte에만 있는 독특한 문법이 아니라 자바스크립트의 [label 문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/label)을 사용한 것입니다. label 문을 사용해서 `$:`로 어떤 코드를 표시해준다면 **그 코드에 있는 변수가 바뀐다면 이 부분만 다시 실행해라** 라는 뜻입니다.

그럼 `double` 변수를 이용하는 것은 간단합니다.

```svelte
/// file: App.svelte
<button>...</button>

+++<p>{count} 의 두 배는 {double} 입니다.</p>+++
```

물론 `{count * 2}`라고 써도 되지만 나중에 코드가 복잡해진다면 `double` 과 같이 **반응성 할당**을 사용해서 코드를 작성하는 것이 더 좋습니다.
