<template>
  <div id="app">
    <Navigation title="我的個人網站" />
    <div class="container">
      <div class="row">
        <Card>
          <img src="@/assets/lobster.jpg">
          <h3>龍蝦</h3>
          <p>說明文字</p>
        </Card>
        <Card>
          <img src="@/assets/lobster.jpg">
          <h3>龍蝦</h3>
          <p>說明文字</p>
        </Card>
        <Card>
          <img src="@/assets/lobster.jpg">
          <h3>龍蝦</h3>
          <p>說明文字</p>
        </Card>
      </div>
      <Footer />
      <ListItem />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    Navigation: () => import("./components/Navigation.vue"),
    Card: () => import("./components/Card.vue"),
    Footer: () => import("./components/Footer.vue"),
    ListItem: () => import("./components/ListItem.vue")
  }
};
</script>
<style lang="scss">
#app {
  padding: 56px 0;
}
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
