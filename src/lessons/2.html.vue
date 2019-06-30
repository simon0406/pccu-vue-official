<template>
  <div class="container pt-5 pb-5">
    <h1>白話文HTML</h1>
    <p>HTML是有很多標籤組成，這個組成包含一個開始的標籤以及結束的標籤</p>
    <p>在網頁中每個標籤都帶有各自的意義</p>
    <p>比如本頁的“白話文”字樣，就是由h1 (header1)標籤所構成，代表頁面第一層級的大標題</p>
    <h2>這是第二層級標題(h2)</h2>
    <h3>這是第三層級標題(h3)</h3>
    <h4>這是第四層級標題(h4)</h4>
    <p class="mt-3">其他常見的標籤還有：</p>
    <ul>
      <li>div: division, 用於標籤的群組化, 是最常被使用的標籤</li>
      <li>span: 用於表示一個最小單位的字組, 以前用於表示一個段落內需要特別樣式的重點，現在是僅次於div最常使用的標籤</li>
      <li>ul和li: unordered list就是列表, list item則代表列表下的品項</li>
      <li>img: image用來顯示圖片</li>
      <li>ａ: anchor, 導航向其他網頁的起點, 也就是超連結</li>
      <li>input: 就是給使用者輸入資料的標籤</li>
    </ul>
    <h2 class="mt-5">常見標籤詳細介紹</h2>
    <h3>div</h3>
    <p>網頁的渲染是從左到右、從上到下這個時候就需要一個"容器的存在", 來幫助我們達成各種風騷的排版</p>
    <p>沒經過包裝的標籤排版再怎麼樣也就是下面那個樣子</p>
    <span class="text-primary">Primary</span>
    <span class="text-secondary">Secondary</span>
    <span class="text-success">Success</span>
    <span class="text-danger">Danger</span>
    <p class="mt-3">可是一旦經過包裝, 花樣就多了</p>
    <p>請試著拉動改變視窗寬度以觀察變化</p>
    <div class="row text-center">
      <span class="col-12 col-sm-12 col-md-4 col-lg-12 text-primary">Primary</span>
      <span class="col-6 col-sm-12 col-md-8 col-lg-4 text-secondary">Secondary</span>
      <span class="col-6 col-sm-12 col-md-8 col-lg-3 text-success">Success</span>
      <span class="col-12 col-md-12 col-lg-5 text-danger">Danger</span>
    </div>
    <p class="mt-3">關於用div包裝來達成群組變化的做法，會在CSS章節進行更詳細的說明</p>
    <h3>span</h3>
    <p>span: 用於表示一個最小單位的字組, 以前用於表示一個段落內需要特別樣式的重點</p>
    <p>
      就像是
      <span class="text-primary">這個</span>樣子
    </p>
    <p>但在網頁複雜度指數成長的情況下, 因為span本身幾乎無內建樣式的特性, 不容易遇到惡名昭彰的網頁相容性問題, 成為了僅次於div最常使用的標籤，前項用來表示div花樣的有色文字即是span</p>
    <h3>ul和li
    </h3>
    <p>ul和li就是列表</p>
    <ul>
      <li>就像是</li>
      <li>這樣</li>
      <li>的列表</li>
    </ul>
    <p>任何用array重複渲染的資料或是畫面都應該用ul與li的組合來取代太常被濫用與辨識度較低的div</p>
    <p>比如這個網頁上方的導航列, lesson 1 ~ lesson n 即是用ul+li的組合去做渲染，只是做了樣式上的變化</p>
    <p>在RWD設計風行的現在, 用二維的ul來模擬一個table也是個不錯的替代方案</p>
    <h3>img 和 a</h3>
    <p>常用, 但是沒難度</p>
    <a href="https://chuiantw1212.github.io/pccu-vue-official/#/" target="_blank">a用來導向其他頁面</a>
    <p>img用來放圖片</p>
    <img src="@/assets/myAvatar.png">
    <h3 class="mt-3">input</h3>
    <p>算是跟javascript關聯最強的一個標籤</p>
    <p>撇開樣式每個瀏覽器都不一樣不說</p>
    <p>撇開樣式超級難調整不說</p>
    <p>還有各種type的坑等著每一位前端工程師用生命去填呢</p>
    <h2>套嵌</h2>
    <p>理解了每一個標籤所代表的意義以後，就能做到正確的套嵌，用最小的代價調配出正確的HTML層級</p>
    <p>如果對標籤的理解不夠深刻, 就會做出錯誤的應用,</p>
    <p>就像是拿古色古香的書籍來墊泡麵，或是用珍珠奶茶來做麻婆豆腐一樣令人髮指</p>
    <p>比如以下的套嵌，雖然瀏覽器可以正常顯示，但是在工程師的眼裡卻是不明與混沌的(請觀察原始碼)</p>
    <h6 class="border">
      <div>
        <div>
          <div>
            <h5>多餘的標籤與錯誤的標籤使用</h5>
          </div>
        </div>
      </div>
      <span>
        <div>
          <p>錯誤的標籤理解, span被拿來當div用</p>
          <li>list item也不該單獨存在</li>
        </div>
        <div>div內也不應該什麼標籤都沒有</div>
      </span>
    </h6>
    <h2 class="mt-5">作業</h2>
    <p>如果以下的html排版(無樣式要求, 只求層級的正確性)表示公司內大主管辦公室的格局與主要家具，請用html排版表示你的房間</p>
    <div class="border p-1">
      辦公室
      <div class="border p-1">
        <span class="border p-1">桌子</span>
        <span class="border p-1">椅子</span>
      </div>
      <div class="border p-1">
        <span class="border p-1">桌子</span>
        <span class="border p-1">椅子</span>
      </div>
      <input :placeholder="'白板'">
      <input :placeholder="'投影螢幕'" :disabled="true">
    </div>
  </div>
</template>
<script>
export default {

}
</script>
