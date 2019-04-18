<template>
    <div id="app">
        <Navigation title="Welcome"></Navigation>
        <div class="container">
            <PageHeader :src="imageUrl" name_zh="朱奕安" name_en="(Ian Chu)">
                <img src="@/assets/myAvatar.png">
            </PageHeader>
            <Theme title="技能">
                <Card>
                    <h4>前端 70%</h4>
                    <ul>
                        <li>前端技能：Javascript, HTML, SCSS</li>
                        <li>前端框架：Vue.js (Vuex), Bootstrap</li>
                        <li>管理工具：Webpack, Gulp</li>
                        <li>連線模組：axios, socket.io</li>
                    </ul>
                </Card>
                <Card>
                    <h4>後端 25%</h4>
                    <ul>
                        <li>後端技能：Node.js (以JsDoc+Typescript強化)</li>
                        <li>後端框架：Express</li>
                        <li>資料庫：MS SQL Server</li>
                    </ul>
                </Card>
                <Card>
                    <h4>CICD 5%</h4>
                    <ul>
                        <li>容器: Docker (Portainer)</li>
                    </ul>
                </Card>
                <Card>
                    <h4>設計與美感 0%</h4>
                    <ul>
                        <li>只會用小畫家</li>
                    </ul>
                </Card>
                <Card>
                    <h4>其他</h4>
                    <ul>
                        <li>撰碼風格：物件導向, 扁平化, 原生優先, Async First</li>
                        <li>開發環境：VS Code</li>
                        <li>版本控制：GitKraken, GitHub</li>
                        <li>作業系統：Mac, Windows</li>
                        <li>領域知識：FinTech</li>
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
            <Theme title="經歷">
                <ListItem>
                    <h4>博暉科技股份有限公司 前端工程師</h4>
                    <h5>March 2019 ~</h5>
                    <ul>
                        <li>參與開發基富通改版</li>
                    </ul>
                </ListItem>
                <ListItem>
                    <h4>恩智區塊鏈 全端工程師</h4>
                    <h5>March 2018 - March 2019</h5>
                    <ul>
                        <li>外派中國支援前端開發一個月</li>
                        <li>參與開發具備後台管理系統的網頁App</li>
                        <li>2週獨立以Vue+Express+Face recognition.js實做臉部辨識Demo</li>
                        <li>獨立以Vue+Express+MS SQL Server實作低買高賣Demo，利用Docker發布於Linux主機上</li>
                        <li>利用下班時間教導非資訊本科同事寫網頁，使用Bootstrap、Gulp發布於GCP Storage</li>
                        <li>近期刷新個人紀錄，3.5小時完成靜態網頁初版</li>
                    </ul>
                </ListItem>
                <ListItem>
                    <h4>香蕉會兒設計 遊戲前端工程師</h4>
                    <h5>March 2017 - March 2018</h5>
                    <ul>
                        <li>利用遊戲引擎開發遊戲</li>
                        <li>以Vue.js製作簡單的RWD網頁</li>
                    </ul>
                </ListItem>
            </Theme>
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
    font-family: "Noto Sans TC", sans-serif;
    padding: 55px 0;
    background-color: rgb(248, 248, 248);
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
img {
    display: block;
}
</style>
