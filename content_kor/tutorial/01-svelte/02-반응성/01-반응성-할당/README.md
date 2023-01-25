---
title: 반응성 할당
---

Svelte를 쓰는 가장 큰 이유 중 하나는 바로 **반응성**입니다. **반응성**이란 `<script>`에서 썼던 변수들이 DOM의 속성과 동기화되는 것을 의미합니다.

간단하게 예를 들어보겠습니다. 먼저 기존 자바스크립트로 버튼을 클릭할 때마다 1씩 증가하는 코드를 작성해보겠습니다.

```html
<button>0</button>
<script>
	let button = document.querySelector('button');
	let count = 0;
	button.onclick = () => {
		count += 1;
		button.innerHTML = count;
	}
</script>
```

위의 코드를 보면 `count = count + 1`로 변수를 `1` 증가시키는 코드가 있지만, `button.innerHTML = count`로 증가된 변수를 DOM에 업데이트하는 코드도 있습니다. 이렇게 변수와 DOM이 따로 동작한다면 코드의 길이가 길어지고, 코드 관리가 힘들어집니다. 그럼 Svelte에서는 어떻게 하는 지 보겠습니다.

```svelte
<button +++on:click={increment}+++>
```

먼저 `on:click`은 Svelte에서만 쓰는 이벤트를 의미합니다. Svelte에서의 이벤트인 `on:`을 쓰지 않는다면 반응성이 적용되지 않습니다. 다음으로 `increment`는 함수를 의미합니다.

```js
const increment = () => {
	+++count += 1;+++
}
```

함수에서는 `count`라는 변수를 `1` 증가시키도록 되어 있습니다.

```svelte
<button ...>+++{count}+++</button>
```

그리고 `count` 변수를 그대로 속성으로 할당하면 변수와 DOM이 동기화가 됩니다.
