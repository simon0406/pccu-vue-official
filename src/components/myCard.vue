<template>
  <div class="myCard-custom mb-3">
    <div class="card_body">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.myCard-custom {
  .card_body {
    background-color: white;
    border-left: 2px groove;
    border-bottom: 2px groove darkseagreen;
    border-radius: 0 0 0 8px;
    box-shadow: 10px 10px 25px -15px;
    padding: 10px;
    img {
      max-width: 100%;
      margin: 0.5rem auto;
    }
  }
}
</style>
