---
title: Select 태그 bindings
---

`<select>` 태그 또한 `bind:value`를 쓸 수 있습니다.



```svelte
<select bind:value={selected} on:change="{() => answer = ''}">
```

`<option>`의 `value`는 `<select>` `value`에 자동으로 연결됩니다.

> `selected` 값은 초반에는 `undefined` 이지만 `bind` 되는 순간에 `<select>`의 값으로 바뀝니다. 때문에 맨 처음에는 `undefined`라는 것을 생각하지 않고 코딩을 한다면 버그가 발생할 수 있습니다.
