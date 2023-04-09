---
title: 컴포넌트 만들기 (Component)
---

Svelte에서는 모든 실행 단위가 **컴포넌트**로 구성됩니다. 때문에 여러분이 Svelte로 코딩을 하기 위해서는 먼저 컴포넌트를 만들어야 합니다. Svelte의 컴포넌트는 모두 파일로 만들면 되며, `.svelte` 라는 확장자명을 작성하면 됩니다. 예를 들어 여기서는 `App.svelte`라는 파일을 만들었습니다.



## &lt;script&gt; 사용하기

`.svelte`에서는 여러분이 알고있는 HTML과 같이 `<script>`를 사용할 수 있습니다. 여기에는 Javascript 코드를 쓸 수 있으며 여기에서 만든 변수는 `<script>` 태그 밖에서도 사용할 수 있습니다.

그럼 예시로 `<script>`에 `name`이라는 변수를 만들어보겠습니다.

```svelte
/// file: App.svelte
+++<script>
	let name = 'world';
</script>+++

<h1>Hello world!!!</h1>
```

그리고 `{}`를 사용한다면 아래에서 `<script>`에서 선언했던 변수를 사용할 수 있습니다.

```svelte
/// file: App.svelte
<h1>Hello +++{name}+++!!!</h1>
```

`{}` 안에서는 Javascript 코드를 쓸 수 있습니다. 이건 마치 [Template Literal](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)와 비슷합니다.

```svelte
/// file: App.svelte
<h1>Hello {name+++.toUpperCase()+++}!!!</h1>
```