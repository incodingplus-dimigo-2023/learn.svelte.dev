---
title: Input 태그 (숫자)
---

DOM에서는 모든 속성의 값은 `string` 타입입니다. 하지만 이러한 경우 `type="number"`나 `type="range"`면 연산자를 쓰는 과정이나 비교하는 과정에서 조금 문제가 생길 수 있습니다.

하지만 `bind:value`를 쓴다면 숫자 변수를 쓰는 것 또한 가능합니다.



```svelte
<input type=number bind:value={a} min=0 max=10>
<input type=range bind:value={a} min=0 max=10>
```
