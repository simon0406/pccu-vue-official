<template>
    <div class="col-md-6 col-lg-4 card-custom">
        <hr class="card_line">
        <div class="card_body">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card-custom {
    .card_line {
        border: none;
    }
    .card_body {
        background-color: white;
        border-left: 2px groove;
        border-bottom: 3px groove darkseagreen;
        border-radius: 0 0 0 8px;
        // border-color: darkseagreen;
        // box-shadow: 0px 5px 10px;
        padding: 10px;
        // margin-bottom: 15px;
        img {
            max-width: 100%;
            margin: 0.5rem auto;
        }
    }
}
</style>
