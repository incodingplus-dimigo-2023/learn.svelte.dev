---
title: 속성 펼치기
---

만약 속성이 객체로 관리되고 있다면 **속성 펼치기**로 속성을 할당할 수 있습니다.

```svelte
<PackageInfo +++{...pkg}+++/>
```

> 반대로, 만약 여러분이 `export`를 통해서 너무 많은 속성을 만든다고 한다면, `$$props`. It's not generally recommended, as it's difficult for Svelte to optimise, but it's useful in rare cases.
