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
    border-top: #979797 5px solid;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .card_body {
    img {
      max-width: 100%;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
