<template>
    <section :id="id" class="panel">
        <div class="container">
            <slot></slot>
        </div>
    </section>
</template>

<script>
 export default { props: ['id'] }
</script>

<style lang="scss">
.panel {
    clear: both;
    padding: 60px 0;
}
</style>
