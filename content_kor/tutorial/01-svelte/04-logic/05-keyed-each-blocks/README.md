---
title: key가 있는 each 블럭
---

기본적으로 `each` 블럭에 있는 적용된 값들은, 추가하거나, 제거 혹은 수정할 때마다 자동으로 적용이 됩니다. 예를 들어 현재 화면에 보이고 있는 `첫번째 값 지우기` 버튼을 누르면 배열의 첫번째 값을 제거하고, 그 제거된 값들이 적용됩니다.

하지만 `<Thing>` 태그에 적용된 `emoji`는 변경이 되지 않습니다. 물론 `export let name` 부분은 변경이 잘 됩니다. 하지만 `emoji`는 `emojijs[name]`으로 받은 값이 고정되어 `name`이 변경해도 `emoji`는 변경되지 않습니다.

물론 이렇게 바꿔도 됩니다.



```js
// Thing.svelte
---const emoji = emojis[name]---
+++$:emoji = emojis[name]+++
```



아니면 아예 `<span>`에 `emijis[name]`으로 바꿔도 상관 없습니다.



```svelte
---<span>The emoji for {name} is {emoji}</span>---
+++<span>The emoji for {name} is {emojis[name]}</span>+++
```



하지만 이렇게 하면 항상 `name`이 변경되는지를 체크해야하기 때문에 조금 불편합니다. 따라서 `#each`를 쓸 때 `(id)`를 입력해주어 서로 값을 연결해줍니다. 그러면 유일한 `(id)` 값을 따라서 `<Thing>`이 다시 렌더링됩니다.



```svelte
{#each things as thing (thing.id)}
	<Thing name={thing.name}/>
{/each}
```



여기서는 유일한 값인 `thing.id` 값을 통해서 `thing`이 바뀔 때 자동으로 `<Thing>`의 값도 바뀌도록 했습니다.

> `()`에 있는 값은 유일한 값이기 때문에 같은 값이 들어가면 안됩니다. 이걸 이용해서 `(thing.id)` 대신 `(thing)`을 넣어도 됩니다. 왜냐하면 `object`는 자기 자신을 제외하고 같은 값이 없기 때문입니다.
