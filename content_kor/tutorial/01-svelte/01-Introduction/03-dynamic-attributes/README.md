---
title: 동적 속성 (Dynamic Attributes)
---

`<script>` 태그에 정의했던 변수들을 HTML의 내용으로 쓰는 것처럼, HTML 속성에서 역시 `<script>` 태그에 있던 변수를 사용할 수 있습니다.

아래 예제는 `<img>`에 `src` 속성을 변수로 할당하는 것입니다.

```svelte
<script>
    /* 뭔가의 주소 */
    let src = 'img.gif'
</script>
<img +++src={src}+++ />
```

이러면 `src` 속성에 `<script>`에서 선언해놓은 변수를 할당할 수 있습니다. 하지만 이 경우 Svelte는 경고를 줍니다.

> A11y: &lt;img&gt; element should have an alt attribute

이 경우는 이미지의 `alt` 속성에 값이 할당되지 않았다는 뜻입니다. 이미지가 로딩되지 않은 경우 `alt`에 있는 문자열이 이미지를 대신해서 보여집니다. 이 `alt`에 있는 문자열은 이미지를 설명해주는 문자열을 써주면 됩니다.

```svelte
<script>
    /* 뭔가의 주소 */
    let src = 'img.gif'
</script>
<img src={src} +++alt="Nyan Cat.gif"+++/>
```

`alt` 속성 또한 `{}`를 통해서 `<script>` 태그에 있던 변수를 할당할 수 있습니다. 단순한 할당 뿐 아니라 문자열을 조합해서 할당할 수도 있습니다.

```svelte
<script>
    /* 뭔가의 주소 */
    let src = 'img.gif';
    let alt = 'Nyan Cat';
</script>
<img src={src} +++alt="{alt}.gif"+++/>
```



## 속성 줄여서 쓰기

만약 속성명과 변수명이 같다면 `src={src}` 와 같이 쓸 필요 없이 `{src}`라고 써주면 됩니다.

```svelte
<img +++{src}+++ alt="Nyan Cat.gif" />
```