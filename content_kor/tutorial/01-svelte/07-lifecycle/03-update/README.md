---
title: beforeUpdate 와 afterUpdate 함수
---

`beforeUpdate`는 DOM이 새로 업데이트되기 전에 실행되는 함수이고, `afterUpdate`는 DOM이 업데이트되고 나서 실행되는 함수입니다.

위의 함수들은 **Side Effect** 라고 불립니다. (한국어로는 _부작용_ 인데... 조금 나쁘게 들려서 이렇게 씁니다.) **Side Effect**는 비동기적인 DOM의 업데이트가 많을 때 코드가 꼬이지 않게 하기 위해서 사용하는 함수들입니다.

아래는 [Eliza](https://en.wikipedia.org/wiki/ELIZA) 라는 옛날 챗봇입니다. 하지만 제가 인위적으로 반응속도를 조금 늦게 줬습니다. 그러면 질문과 답변을 했을 때 스크롤이 그대로 인 것을 볼 수 있습니다. 이러한 것은 `beforeUpdate`와 `afterUpdate`로 고칠 수 있습니다.



```js
let div;
let autoscroll;

beforeUpdate(() => {
	autoscroll = div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20;
});

afterUpdate(() => {
	if (autoscroll) div.scrollTo(0, div.scrollHeight);
});
```



`beforeUpdate`의 경우 DOM이 **Mount** 되기 전에도 작동합니다. 때문에 `div` 태그가 있는 지 확인해야 합니다.
