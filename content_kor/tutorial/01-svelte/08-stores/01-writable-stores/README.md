---
title: Writable 스토어
---

Svelte를 다룰 때 모든 상태 값들이 컴포넌트 계층을 따라 전달돼야할 필요는 없습니다. 때로는 여러 관련 없는 컴포넌트나 js 모듈에서 접근해야 하는 값이 있을 수 있습니다.

Svelte에서는 이런 계층에 상관없이 상태 값을 전달하기 위해 _store_ 라는 것을 씁니다. 스토어란 값이 변경될 때마다 관심 있는 이벤트를 발생시킬 수 있는 `subscribe` 메서드가 있는 객체입니다. `App.svelte`에서 `count` 변수에 스토어 객체를 할당하고, `count.subscribe` 콜백에서 `count_value` 변수에 값이 변경될 때마다 재할당을 하도록 설정했습니다.

`stores.js` 탭을 클릭하여 `count`의 정의를 확인해 보세요. 이것은 _Writable_ 스토어로, `subscribe` 외에도 `set`과 `update` 메서드가 있습니다.

이제 `Incrementer.svelte` 탭으로 가서 `+` 버튼을 연결해 보겠습니다:



```js
const increment = () => {
	count.update((n) => n + 1);
}
```



`+` 버튼을 클릭하면 카운트가 업데이트되어야 합니다. 반대로 `Decrementer.svelte`에 대해서도 해보세요.

마지막으로, `Resetter.svelte`에서 `reset`을 구현하세요:



```js
const reset = () => {
	count.set(0);
}
```