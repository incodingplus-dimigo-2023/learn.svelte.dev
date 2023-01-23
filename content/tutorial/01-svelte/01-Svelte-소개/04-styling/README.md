---
title: style 태그 (Styling)
---

HTML에서 하던 것과 같이 `<style>` 태그를 사용하면 CSS를 태그에 적용할 수 있습니다. 아래는 `<p>` 태그에 스타일을 적용하는 예제입니다.

```svelte
<p>모든 사람은 인...</p>

<style>
+++	p {
		color: purple;
		font-family: monospace, cursive;
		font-size: 2em;
	}+++
</style>
```

이러한 CSS에서 적용한 스타일은 *컴포넌트* 단위입니다. 예를 들어 `App.svelte`에서 `p`를 적용했어도, 다른 컴포넌트 예를 들어 `Bpp.svelte` 같은 컴포넌트에서는 `p`가 적용되지 않습니다.

조금 예쁜 폰트를 사용하려면 `monospace` 부분을 `'Gugi'`로 바꿔주십시오. 그리고 아래의 코드를 `<style>`의 맨 위쪽에 추가해주십시오.

> @import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap');