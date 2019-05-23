<template>
    <div class="theme">
        <h2>{{title}}</h2>
        <div class="row">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String
    }
};
</script>
<style lang="scss" scoped>
.theme {
    margin-top: 1rem;
}
</style>

