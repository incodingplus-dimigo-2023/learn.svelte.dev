---
title: 속성 선언
---

지금까지는 `<script>`에서 변수를 다루는 방법을 배웠습니다. 그리고 이러한 변수는 `.svelte` 파일 안에서만 사용 가능했습니다.

하지만 실제로 프로젝트를 작성할 때는 컴포넌트 간에 서로 데이터를 주고 받을 수 있어야 합니다. 이러한 것 때문에 **속성**(**props**)을 사용해야합니다. Svelte에서 `export`라는 키워드를 사용해서 속성을 선언할 수 있습니다.

```svelte
/// file: Nested.svelte
<script>
	+++export+++ let answer;
</script>
```

> `$:`와 같이 `export` 또한 자바스크립트의 [모듈 문법](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export)을 사용한 것입니다. 뜻은 **이 변수를 컴포넌트의 속성으로 선언** 한다는 뜻입니다.