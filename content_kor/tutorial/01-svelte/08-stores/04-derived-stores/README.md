---
title: Derived 스토어
---

`derived`를 사용하면 하나 이상의 다른 스토어의 값에 기반한 스토어를 만들 수 있습니다. 이전 예제에 이어서 페이지가 열린 시간을 파생시키는 스토어를 만들 수 있습니다.

```js
export const elapsed = derived(time, ($time) => Math.round(($time - start) / 1000));
```