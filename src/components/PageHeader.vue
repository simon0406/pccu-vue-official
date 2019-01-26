<template>
  <div class="pageHeader">
    <div
      class="header_image"
      :style="{ backgroundImage: `url(${src})` }"
    >
    </div>
    <div class="portrait">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    src: String
  }
};
</script>
<style lang="scss" scoped>
.pageHeader {
  position: relative;
  .header_image {
    min-width: 100%;
    height: 315px;
    background-size: cover;
    background-position: center;
    border: 1px solid #d3d6db;
  }
  .portrait {
    position: absolute;
    bottom: 0;
    width: 168px;
    > * {
      border-radius: 50%;
      max-width: 100%;
      border: 5px solid white;
    }
  }
}
</style>

