<template>
  <div id="app">
    <Navigation title="我的個人網站" />
    <div class="container">
      <PageHeader :src="imageUrl" name_zh="朱奕安" name_en="(Ian Chu)">
        <img src="@/assets/myAvatar.png">
      </PageHeader>
      <Theme title="技能">
        <Card>
          <h4>前端</h4>
          <ul>
            <li>前端技能：Javascript, HTML, SCSS</li>
            <li>前端框架：Vue.js (Vuex), Bootstrap</li>
            <li>管理工具：Webpack, Gulp</li>
            <li>連線模組：axios, socket.io</li>
          </ul>
        </Card>
        <Card>
          <h4>後端</h4>
          <ul>
            <li>後端技能：Node.js (以JsDoc+Typescript強化)</li>
            <li>後端框架：Express</li>
            <li>資料庫：MS SQL Server</li>
            <li>CICD：Docker (Portainer)</li>
          </ul>
        </Card>
        <Card>
          <h4>其他</h4>
          <ul>
            <li>撰碼風格：MVC, 物件導向, 扁平化, 原生優先, Async First</li>
            <li>開發環境：VS Code</li>
            <li>版本控制：GitKraken, GitHub</li>
            <li>作業系統：Mac, Windows</li>
            <li>領域知識：Arbitrage, Blockchain</li>
          </ul>
        </Card>
      </Theme>
      <Theme title="生活">
        <Card>
          <img src="@/assets/dam.jpg">
          <h3>騎車攝影</h3>
          <p>週末天氣好的時候就一個人一車離家出走。偶遇美景時，一個鏡頭永遠留存。</p>
        </Card>
        <Card>
          <img src="@/assets/rice.jpg">
          <h3>下廚</h3>
          <p>有時心血來潮，就到附近全聯撿貨。買回家自己大顯身手。</p>
        </Card>
      </Theme>
      <ListItem />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    PageHeader: () => import("./components/PageHeader.vue"),
    Navigation: () => import("./components/Navigation.vue"),
    Theme: () => import("./components/Theme.vue"),
    Card: () => import("./components/Card.vue"),
    ListItem: () => import("./components/ListItem.vue")
  },
  data: () => ({
    imageUrl: require("@/assets/temple.jpg")
  })
};
</script>
<style lang="scss">
#app {
  padding: 55px 0;
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

.container {
  min-height: 100vh;
  position: relative;
}
</style>
