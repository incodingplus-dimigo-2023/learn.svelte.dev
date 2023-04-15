---
title: 이벤트 Modifiers
---

이벤트 **Modifiers**는 이벤트의 동작에 조금 변형을 주는 속성들을 의미합니다. 예를 들어 `once`는 이벤트가 한 번만 작동하도록 변형하는 것입니다. 

```svelte
/// file: App.svelte
<script>
	const handleClick = () => {
		alert('한 번만 동작합니다.');
	};
</script>

<button on:click|once={handleClick}>클릭</button>
```



물론 이러한 것들은 이벤트에서 직접 변형할 수 있지만 Sveltekit의 이벤트에서 지원하는 것도 있습니다.

다음은 그 목록들입니다.:



- `preventDefault` : `event.preventDefault()`를 호출합니다. 해당 태그의 기본 동작을 막는 메서드. 예를 들어 `<a>` 태그가 다른 사이트로 넘어가는 기본 동작 등을 막아줍니다.
- `stopPropagation` : `event.stopPropagation()`를 호출합니다. 이벤트가 다음 태그로 전달되는 것을 막습니다.
- `passive` : `passive` 속성을 `true`로 설정합니다. 이 설정은 스크롤이나 터치 성능을 높여줍니다. 기본적으로 Svelte에서는 `true`로 설정되어 있습니다.
- `nonpassive` : `passive` 속성을 `false`로 설정합니다.
- `capture` :  이벤트의 전파시 캡처링 때 작동하도록 설정합니다. <a href="https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Events#이벤트_버블링과_캡처" target="_blank">(버블링과 캡처링)</a>
- `once` : 이벤트가 한 번만 동작하도록 설정합니다.
- `self` : `event.target`이 본인일 때만 동작하도록 합니다.
- `trusted` : `event.isTrusted`가 `true`일 때만 동작하도록 합니다. 이러한 경우는 유저가 직접 동작한 경우만 해당합니다. (매크로 안됨)



**Modifiers**를 여러가지 쓰려면 다음과 같이 쓰면 됩니다. `on:click|once|capture={...}`.
