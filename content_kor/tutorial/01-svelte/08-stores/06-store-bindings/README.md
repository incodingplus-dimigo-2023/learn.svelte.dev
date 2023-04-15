---
title: 스토어 바인딩
---

`Writable` 스토어는 `set`과 `update` 메서드가 있습니다. 그 중에서 `set` 메서드는 `$` 변수에 할당할 때 쓰이는 메서드입니다.



```svelte
/// file: App.svelte
{$count}번 눌렀습니다.
<button on:click={() => $count += 1}>증가</button>
```



위의 예제에서는 `{$count}번 눌렀습니다.` 에서의 `$count`는 `subscribe`를 사용하는 것이고, `() => $count += 1` 에서의 `$count`는 `set`을 쓰는 것입니다. 이렇게 `$`변수에는 할당이 가능하기 때문에 바인딩 또한 가능합니다.



```svelte
/// file: App.svelte
<input type="text" bind:value={$name}>
```



위의 코드는 `<input>` 태그에 쓴 값에 따라 `name`이 업데이트됩니다.



```svelte
/// file: App.svelte
<button on:click={() => $name += '!'}>
	느낌표 붙이기
</button>
```



`$name += '!'` 코드는 `name.set($name + '!')` 을 쓴 것과 같은 동작을 합니다.