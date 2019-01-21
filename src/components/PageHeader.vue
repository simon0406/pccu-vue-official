<template>
  <div class="pageHeader">
    <div
      class="header_image"
      :style="{ backgroundImage: `url(${src})` }"
    ></div>
    <!-- <slot></slot> -->
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
  .header_image {
    min-width: 100%;
    height: 315px;
    background-size: cover;
    background-position: center;
    border: 1px solid #d3d6db;
  }
}
</style>

