---
title: 속성 펼치기
---

만약 속성이 객체로 관리되고 있다면 **속성 펼치기**로 속성을 할당할 수 있습니다.

```svelte
/// file: App.svelte
<ChampionInfo {...pkg} />
```

> 반대로, 만약 여러분이 `export`를 통해서 너무 많은 속성을 만든다고 한다면, `$$props`을 통해서 전부 접근할 수도 있습니다. <span style="color:rgba(255,0,0,1)">(하지만 별로 추천하는 방법은 아닙니다...)</span>
