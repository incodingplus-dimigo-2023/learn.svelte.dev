---
title: DOM 이벤트 포워딩
---

이벤트 포워딩은 DOM 이벤트도 가능합니다.

`<CustomButton>` 이라는 컴포넌트를 만들고, `click` 이벤트를 포워딩하려면 다음과 같이 작성하면 됩니다.



```svelte
<button on:click>
	클릭해 주세요~
</button>
```
