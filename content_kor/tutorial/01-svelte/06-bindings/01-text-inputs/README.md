---
title: Input 태그 (텍스트)
---

Svelte에서 속성을 할당하면 속성의 값은 할당한 변수에 따라서 바뀔 수 있습니다. 다음과 같이 말이죠.



```svelte
<script>
    let href = '/about'
</script>
<a { href }>링크</a>
```



위의 예제에 따르면 `href` 변수가 바뀔 때마다 `<a>` 태그의 `href` 속성 또한 바뀝니다. 그러면 속성이 바뀔 때마다 변수의 값을 바뀌도록도 할 수 있을까요? 물론 보통의 속성에서는 안됩니다.

하지만 이러한 것이 꼭 필요한 경우가 있습니다. 대표적으로 `<input>` 태그와 같이 `value` 라는 속성이 사용자에 의해서 바뀌는 경우가 그러한 경우입니다. 물론 `on:input` 이벤트를 할당해서 `event.target.value` 값을 계속 할당하도록 해도 됩니다.



```svelte
<input on:input={event => name = event.target.value} value={name} />
```



하지만 위의 코드는 `bind:`를 사용해서 변수와 속성의 쌍방향 흐름을 만들어내면 좀 더 깔끔하게 구현할 수 있습니다.



```svelte
---<input on:input={event => name = event.target.value} value={name} />---
+++<input bind:value={name}>+++
```



위처럼 `bind:value` 속성에 `name`을 넣어주면 `name`이 바뀌어도 `<input>` 태그의 `value` 속성을 바꿔주고, 반대로 `value` 속성이 바뀔 때도, `name` 변수의 값이 바뀝니다.
