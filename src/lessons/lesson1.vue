<template>
    <div class="container">
        <myPageHeader :src="imageUrl" name_zh="朱奕安" name_en="(Ian Chu)">
            <img src="@/assets/myAvatar.png">
        </myPageHeader>
        <myTheme title="技能">
            <myCard class="col-md-6 col-lg-4">
                <h4>前端 65%</h4>
                <ul>
                    <li>前端框架：Vue.js (Vuex)</li>
                    <li>前端技能：HTML, SCSS, Bootstrap</li>
                    <li>前端環境：Vue Cli, Webpack</li>
                    <li>連線模組：axios, socket.io</li>
                </ul>
            </myCard>
            <myCard class="col-md-6 col-lg-4">
                <h4>後端 30%</h4>
                <ul>
                    <li>後端技能：Node.js (Typescript)</li>
                    <li>後端框架：Express.js, passport.js</li>
                    <li>資料庫：：MongoDB (Robo 3T)</li>
                </ul>
            </myCard>
            <myCard class="col-md-6 col-lg-4">
                <h4>CICD 5%</h4>
                <ul>
                    <li>Cloud: Google Cloud Platform</li>
                    <li>CI: Azure DevOps</li>
                    <li>容器: Docker (Portainer)</li>
                </ul>
            </myCard>
            <myCard class="col-md-6 col-lg-4">
                <h4>設計與美感 0%</h4>
                <ul>
                    <li>只會用小畫家</li>
                </ul>
            </myCard>
            <myCard class="col-md-12 col-lg-8">
                <h4>其他</h4>
                <ul>
                    <li>撰碼風格：物件導向, 扁平化, Native First, Async First</li>
                    <li>開發環境：VS Code</li>
                    <li>版本控制：GitKraken, GitHub</li>
                    <li>作業系統：前端主用Windows、後端主用Mac</li>
                    <li>領域知識：FinTech</li>
                </ul>
            </myCard>
        </myTheme>
        <myTheme title="生活">
            <myCard class="col-md-6 col-lg-4">
                <img src="@/assets/coding.jpg">
                <h3>寫程式</h3>
                <p>不只是投資本業，也是灌溉夢想。</p>
            </myCard>
            <myCard class="col-md-6 col-lg-4">
                <img src="@/assets/investment.jpg">
                <h3>理財</h3>
                <p>基富通手續費很低廉，而且有跟Line結合綁定，真的不錯。</p>
            </myCard>
            <myCard class="col-md-6 col-lg-4">
                <img src="@/assets/dam.jpg">
                <h3>騎車攝影</h3>
                <p>週末天氣好的時候就一個人一車離家出走。偶遇美景時，一個鏡頭永遠留存。</p>
            </myCard>
        </myTheme>
        <myTheme title="學經歷">
            <div class="row justify-content-around">
                <div class="col-11 col-lg-5">
                    <h4>專職</h4>
                    <myListItem>
                        <h4>FinTech股份有限公司 前端工程師</h4>
                        <h5>March 2019 ~</h5>
                        <ul>
                            <li>參與開發基富通改版，以Vue進行開發</li>
                            <li>跨部門協調</li>
                            <li>積極傳授所知，與解決各種難題</li>
                        </ul>
                    </myListItem>
                    <myListItem>
                        <h4>區塊鏈有限公司 全端工程師</h4>
                        <h5>March 2018 - March 2019</h5>
                        <ul>
                            <li>外派中國支援前端開發一個月</li>
                            <li>參與開發具備後台管理系統的網頁App</li>
                            <li>2週獨立以Vue + Express + Face recognition.js實做臉部辨識Demo</li>
                            <li>獨立以Vue + Express + MS SQL Server實作低買高賣Demo，用Docker發布於Linux主機上</li>
                            <li>創造個人紀錄，3.5小時發布一款Single Page Application</li>
                            <li>用下班時間教導非資訊本科同事寫網頁，使用Bootstrap、Gulp發布於GCP Storage</li>
                        </ul>
                    </myListItem>
                    <myListItem>
                        <h4>網頁遊戲有限公司 遊戲前端工程師</h4>
                        <h5>March 2017 - March 2018</h5>
                        <ul>
                            <li>利用遊戲引擎開發遊戲</li>
                            <li>以Vue.js製作簡單的RWD網頁</li>
                        </ul>
                    </myListItem>
                    <myListItem>
                        <h4>美國東北大學 Informatics</h4>
                        <h5>September 2015 - March 2017</h5>
                        <ul>
                            <li>取得學霸稱號</li>
                        </ul>
                    </myListItem>
                    <myListItem>
                        <h4>義務役政戰預官</h4>
                        <h5>August 2013 - July 2014</h5>
                        <ul>
                            <li>職場初體驗</li>
                            <li>領導職初體驗</li>
                            <li>官場初體驗</li>
                        </ul>
                    </myListItem>
                    <myListItem>
                        <h4>國立中興大學 資訊科技與工程學系</h4>
                        <h5>March 2017 - March 2018</h5>
                        <span>在恩師廖宜恩指導下專案獲獎</span>
                        <ol>
                            <li>系內畢業專題競賽 - 第二名</li>
                            <li>教育部主辦全國大專院校軟體創意競賽- 銅牌獎</li>
                        </ol>
                    </myListItem>
                </div>
                <div class="col-11 col-lg-5">
                    <h4>兼職</h4>
                    <myListItem>
                        <h4>工作坊 技術型天使</h4>
                        <h5>May 2019 ~</h5>
                        <ul>
                            <li>用Vue製作靜態網頁</li>
                            <li>發布到Google App Engine</li>
                        </ul>
                    </myListItem>
                    <myListItem>
                        <h4>大學進修部 兼任講師</h4>
                        <h5>July 2019 ~ August 2019</h5>
                        <ul>
                            <li>自製履歷用教材，也就是本網站的功能之一</li>
                            <li>教學Vue.js</li>
                        </ul>
                    </myListItem>
                </div>
            </div>
        </myTheme>
        <myTheme title="FAQ">
            <div class="col-12">
                <ol>
                    <li>
                        <p class="m-0">大學念甚麼的?</p>
                        <p>資訊工程系，軟硬體參半，但是只喜歡軟體，所以也只拿了一半的成績。好在很會做專題，不至於一事無成。</p>
                    </li>
                    <li>
                        <p class="m-0">是在畢業後直接去美國嗎?</p>
                        <p>不是，適逢人生低潮，尋求改變，先考預官。預官之後，受同裁影響，認定出國是一個改變的契機，所以花了一年備考。一邊用稱不上是積極的等級備考，一邊思考自己要甚麼。</p>
                        <p>備考之外的時間，為了做狼人殺網頁遊戲，自學了Javascript前後端。</p>
                    </li>
                    <li>
                        <p class="m-0">為什麼要考預官?</p>
                        <p>尋求改變。</p>
                    </li>
                    <li>
                        <p class="m-0">為什麼要去美國?</p>
                        <p>尋求改變。</p>
                    </li>
                    <li>
                        <p class="m-0">為什麼不在美國找工作?為什麼要回台灣?</p>
                        <p>現實面履歷太弱，沒有強到可以跨越種族與語言的限制。</p>
                    </li>
                    <li>
                        <p class="m-0">未來的目標是甚麼?</p>
                        <p>推廣Javascript並把自己發揮到極限。</p>
                    </li>
                </ol>
            </div>
        </myTheme>
        <myTheme title="推薦信">
            <ol>
                <li>
                    <a
                        href="https://drive.google.com/open?id=1ytUwY-Ayqtg2nFDL-NMdkxqkj55gKOMY"
                        target="_blank"
                    >來自專案經理</a>
                </li>
                <li>
                    <a
                        href="https://drive.google.com/open?id=1kLbgMLBR5y9Np9nIeX1xzX80uaHgzp9V"
                        target="_blank"
                    >來自實習生</a>
                </li>
            </ol>
        </myTheme>
    </div>
</template>

<script>
export default {
    components: {
        myPageHeader: () => import("@/components/myPageHeader.vue"),
        myTheme: () => import("@/components/myTheme.vue"),
        myCard: () => import("@/components/myCard.vue"),
        myListItem: () => import("@/components/myListItem.vue")
    },
    data: () => ({
        imageUrl: require("@/assets/temple.jpg")
    })
}
</script>

<style>
</style>
