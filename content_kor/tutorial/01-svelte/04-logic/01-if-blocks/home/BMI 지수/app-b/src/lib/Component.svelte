<script>
    export let height;
    export let weight;

    let BMI;
    let state;

    $: {
        BMI = weight / ((height / 100) * (height / 100))

        if(BMI >= 25.0) state = "비만"
        else if(BMI >= 23.0) state = "과체중"
        else if(BMI >= 18.5) state = "정상"
        else state = "저체중"
    }

    
</script>

<div class="container">
    <div>신장 : {height}</div>
    <div>체중 : {weight}</div>
    <div>BMI : {BMI}</div>
    {#if state !== "정상"}
        <div class="danger">위험도 : {state}</div>
    {/if}
</div>

<style>
    .container {
        border: 1px solid black;
        padding: 10px;
        margin: 10px;
    }

    .danger {
        color: red
    }
</style>