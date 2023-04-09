---
title: style 태그 (Styling)
---

HTML에서 하던 것과 같이 `<style>` 태그를 사용하면 CSS를 태그에 적용할 수 있습니다. 아래는 `<p>` 태그에 스타일을 적용하는 예제입니다.

```svelte
/// file: App.svelte
<p>다람쥐 헌 쳇바퀴에 타고파</p>

<style>
+++	p {
		color: purple;
		font-family: monospace, cursive;
		font-size: 2em;
	}+++
</style>
```

이러한 CSS에서 적용한 스타일은 *컴포넌트* 단위입니다. 이 컴포넌트 단위란 매우 중요한 것이므로 다음장에서 제대로 다뤄보겠습니다.

조금 예쁜 폰트를 사용하려면 `monospace` 부분을 `'Gugi'`로 바꿔주십시오. 이 폰트는 구글 웹 폰트에서 가져온 것이므로 만약 쓰고싶다면 아래의 코드를 `<style>` 안에 써주세요.

> @import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap');