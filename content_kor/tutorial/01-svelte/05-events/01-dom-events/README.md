---
title: DOM 이벤트
---

Svelte에서 이벤트를 할당하려면 `on:`으로 시작되는 이벤트 속성들을 사용하면 됩니다.



```svelte
<div on:mousemove={handleMousemove}>
	마우스 위치 : ({m.x}, {m.y})
</div>
```



또는 함수를 이벤트 속성에 그대로 사용해도 됩니다.



```svelte
<div on:mousemove={e => s = {x : e.clientX, y:e.clientY}}>
	마우스 위치 : ({s.x}, {s.y})
</div>
```



여러분이 배웠던 화살표 함수를 사용하면 되고, `""`를 굳이 사용하지 않아도 `{}`를 사용하면 됩니다.
