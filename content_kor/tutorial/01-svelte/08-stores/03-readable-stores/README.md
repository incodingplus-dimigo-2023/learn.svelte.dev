---
title: Readable 스토어
---

스토어는 `Writable` 객체만 있는 것이 아닙니다. 모든 스토어가 항상 변경 가능해야된다 라는 법은 없으니까요. 예를 들어, 마우스 위치나 GPS 위치같은 경우는 굳이 코딩 과정에서 바뀌는 것이 아닌 내부에서 바뀌면 됩니다. 이런 경우에는 _Readable_ 스토어를 사용합니다.

`stores.js` 탭으로 이동하세요. `readable`의 첫 번째 인수는 초기 값이며, 아직 값이 없다면 `null` 또는 `undefined`일 수 있습니다. 두 번째 인수는 `set` 콜백을 받고 구독 취소 함수를 반환하는 함수입니다. 이 함수는 스토어가 첫 번째 구독자를 얻을 때 호출되고, 구독 취소 함수는 마지막 구독자가 구독 취소할 때 호출됩니다.



```js
/// file: store.js
export const time = readable(new Date(), set =>  {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return () => {
		clearInterval(interval);
	};
});
```
