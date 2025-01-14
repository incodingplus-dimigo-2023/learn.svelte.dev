---
title: 반응성 코드 실행
---

반응성 선언은 값의 할당에만 국한되지 않습니다. 코드 조각 전체를 반응성 있게 할 수도 있습니다. 예를 들어 아래의 코드를 보겠습니다.

```js
/// file: App.svelte
let count = 0;

+++$: console.log(`count는 ${count}입니다.`);+++
```

위의 코드는 `count`라는 변수가 업데이트 될 때마다 `console.log`가 실행될 것입니다. 또는 아래처럼 코드 블럭으로 묶어줄 수도 있습니다.

```js
/// file: App.svelte
$: +++{+++
	console.log(`count는 ${count}입니다.`);
	alert(`count는 ${count}입니다.`);
+++}+++
```

아니면 그냥 `$:`를 `if`문 또는 `for`문의 앞에 작성해도 됩니다.

```js
/// file: App.svelte
$: +++if (count >= 10)+++ {
	count = 0;
	ten += 1;
	if(ten >= 10) ten = 0;
}
```
