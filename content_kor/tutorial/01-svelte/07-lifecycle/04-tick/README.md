---
title: tick 함수
---

`tick` 함수는 다른 생명주기 함수들과 달리 어느 곳에서나 쓸 수 있다는 장점이 있습니다. `tick`은 `Promise`를 반환하고, DOM이 바뀔 때 `fulfilled` 됩니다.

`tick` 함수는 보통 컴포넌트의 업데이트를 할 때 많이 사용됩니다. 컴포넌트의 상태를 업데이트 할 때 DOM도 바로 업데이트 되는 것이 아닙니다. DOM은 컴포넌트 업데이트 뒤에 아주 조금의 시간 뒤에 업데이트 됩니다. 때문에 가끔은 `<input>` 태그나 `<textarea>` 태그에서 `bind:value`의 값이 계속 최신값이 나오지 않는 경우가 있습니다. 

따라서 위와 같은 경우 `tick` 함수를 사용하면 됩니다.



```js
import { tick } from 'svelte';
```



그리고 `tick` 뒤에 `event.target.selectionStart`와 `event.target.selectionEnd`를 바꿔준다면 완벽하겠습니다.


```js
await tick();
event.target.selectionStart = selectionStart;
event.target.selectionEnd = selectionEnd;
```
