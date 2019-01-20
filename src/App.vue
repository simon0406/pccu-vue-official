<template>
  <div id="app">
    <Navigation title="我的個人網站"/>
    <Banner/>
    <Card />
    <Footer />
    <ListItem />
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    // dam: require("@/assets/dam.jpg")
  }),
  components: {
    Navigation: () => import("./components/Navigation.vue"),
    Banner: () => import("./components/Banner.vue"),
    Card: () => import("./components/Card.vue"),
    Footer: () => import("./components/Footer.vue"),
    ListItem: () => import("./components/ListItem.vue")
  }
};
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}

header {
  padding: 154px 0 100px;
}

@media (min-width: 992px) {
  header {
    padding: 156px 0 100px;
  }
}

section {
  padding: 150px 0;
}
</style>
