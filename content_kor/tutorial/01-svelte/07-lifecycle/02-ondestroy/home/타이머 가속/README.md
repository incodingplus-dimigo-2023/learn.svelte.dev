---
title: 01-07-02 타이머 가속
---

`App.svelte`는 타이머가 1초씩 간다. `Timer.svelte`는 `App.svelte`에서 버튼을 추가할 때마다 `Timer.svelte`가 추가된다. 그러면 타이머가 1초마다 `dispatch` 되는 코드가 추가되어 타이머가 빨라진다. 타이머를 클릭하면 그 타이머는 다시 사라진다.