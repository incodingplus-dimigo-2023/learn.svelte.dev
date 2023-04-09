---
title: 컴포넌트 중첩 (Nested Component)
---

여러분의 프로젝트가 커지면 커질 수록 한 파일에 모든 코드를 쓴다면 관리, 수정이 매우 어려워질 것입니다. 이러한 것을 위해서 **컴포넌트 중첩**을 사용합니다.

`<script>` 태그에서 `Nested.svelte` 파일을 `import` 해보겠습니다.

```svelte
/// file: App.svelte
+++<script>
	import Nested from './Nested.svelte';
</script>+++
```

이러한 코드의 형태는 중요한 형태이니 꼭 외워주시기 바랍니다. 그 다음에는 `import` 한 컴포넌트를 *중첩* 해보겠습니다.

```svelte
/// file: App.svelte
<p>다람쥐 헌 쳇바퀴에 타고파</p>
+++<Nested />+++
```

이러면 `Nested.svelte`에 작성했던 코드들이 그대로 적용된 것을 알 수 있습니다.

하지만 여기서 중요한 것이 있습니다. `Nested.svelte`에도 `<p>` 태그가 있었지만 `App.svelte`에 적용됐던 `p` 스타일이 적용되지 않았습니다. 그 이유는 `svlete` 의 `<style>` 태그는 항상 컴포넌트 단위이기 때문입니다.

> `<style>` 태그는 항상 컴포넌트 단위

또 여러분이 컴포넌트를 만들 때는 항상 앞 글자가 대문자로 해야 합니다. 그 이유는 보통의 HTML 태그와 구분을 하기 위해서 입니다. 때문에 실수로 맨 앞 글자가 소문자로 `import`를 한다면 `svelte`는 경고를 할 것입니다.

> 컴포넌트의 맨 앞 글자는 HTML 태그와 구분하기 위해 대문자
