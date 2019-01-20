<template>
  <div>
    <img :style="{ backgroundImage: `url(${require('@/assets/dam.jpg')})` }">
  </div>
</template>
<script>
export default {
  props: {
    src: String
  }
};
</script>

