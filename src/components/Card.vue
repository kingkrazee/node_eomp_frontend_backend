<template>
    <div class="card">
        <div class="card-header">
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "CardComp"
}
</script>
<style scoped>
.card {
    width: 18rem;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
    border-radius: 8px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
}
</style>