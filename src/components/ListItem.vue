<template>
    <div class="listItem col-12">
        <div class="row">
            <div class="col-1 bullet"></div>
            <div class="col-11">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // props:{
    // },
};
</script>
<style lang="scss" scoped>
.listItem {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 400;
    }
}
.bullet {
    &:before {
        content: "";
        width: 9px;
        height: 9px;
        border-radius: 50%;
        text-align: center;
        display: inline-block;
        background-color: darkseagreen;
        margin-left: 0.5px;
    }
    &:after {
        content: "";
        width: 1px;
        height: 100%;
        background-color: darkseagreen;
        display: block;
        margin-left: 4.5px;
        transform: translateY(-10px);
    }
}
</style>
<style lang="scss">
.listItem {
    &:last-child {
        .bullet {
            &:after {
                display: none;
            }
        }
    }
}
</style>
