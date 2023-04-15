---
title: 기본 값
---

우리는 간단하게 `Nested.svelte`에서 속성에 **기본 값**을 설정할 수 있습니다.

```svelte
/// file: Nested.svelte
<script>
	export let answer +++= '누칼협'+++;
</script>
```

두 컴포넌트를 생성해서 하나는 `answer` 속성에 값을 주지 않았습니다. 이렇게 되면 그 속성에는 기본 값이 들어가게 됩니다.

```svelte
/// file: Nested.svelte
<Nested answer={42}/>
+++<Nested/>+++
```
