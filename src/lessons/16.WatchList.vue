<template>
  <div class="pb-5">
    <div class="css__RWD">
      <div class="watchlist__headerGroup">
        <span class="watchlist__header">Watchlist</span>
        <span class="magnifier d-375-none d-768-block">
          <img src="@/assets/test2.png" />
        </span>
        <span class="model__rectangle">
          <span class="model">Model</span>
          <span class="path d-768-none">
            <img src="@/assets/facebook.png" />
          </span>
        </span>
        <span class="stork d-375-none d-768-block">Stork</span>
        <span class="mutualfund d-375-none d-768-block">Mutual Fund</span>
      </div>

      <div class="magnifierRectangle d-768-none">
        <span class="magnifier">
          <img src="@/assets/test2.png" />
        </span>
      </div>
      <div class="tableheader__rowItem">
        <span class="tableheader__model d-1440-none">Model</span>
        <span class="tableheader__model d-375-none d-768-none d-1440-block">Model Name</span>
        <span class="model__icon">
          <img src="@/assets/facebook.png" />
        </span>
        <span class="month d-375-none d-768-none d-1440-block">1 Mth</span>
        <span class="month__icon d-375-none d-768-none d-1440-block">
          <img src="@/assets/facebook.png" />
        </span>
        <span class="month__two d-375-none d-768-none d-1440-block">3 Mth</span>
        <span class="month__icon__two d-375-none d-768-none d-1440-block">
          <img src="@/assets/facebook.png" />
        </span>
        <span class="month__three d-375-none d-768-none d-1440-block">6 Mth</span>
        <span class="month__icon__three d-375-none d-768-none d-1440-block">
          <img src="@/assets/facebook.png" />
        </span>
        <span class="month__four d-375-none d-768-none d-1440-block">1 Yr</span>
        <span class="month__icon__four d-375-none d-768-none d-1440-block">
          <img src="@/assets/facebook.png" />
        </span>
        <span class="month__five d-375-none d-768-none d-1440-block">3 Yrs</span>
        <span class="month__icon__five d-375-none d-768-none d-1440-block">
          <img src="@/assets/facebook.png" />
        </span>
        <span class="month__six d-375-none d-768-none d-1440-block">5 Yrs</span>
        <span class="month__icon__six d-375-none d-768-none d-1440-block">
          <img src="@/assets/facebook.png" />
        </span>
        <span class="month__seven d-375-none d-768-none d-1440-block">Since Incept</span>
        <span class="month__icon__seven d-375-none d-768-none d-1440-block">
          <img src="@/assets/facebook.png" />
        </span>
        <span class="month__eight d-375-none d-768-none d-1440-block">Incept Date</span>
        <span class="month__icon__eight d-375-none d-768-none d-1440-block">
          <img src="@/assets/facebook.png" />
        </span>
      </div>
      
      <template v-for="number in 10">
        <div class="table__rowItem d-375-none d-1440-block" :key="number">
          <div
            class="tablebody__columnItem__allname d-375-none d-768-none d-1440-block"
          >Evolve Wealth Asia Emerging Market Finance</div>
          <div class="percent d-375-none d-1440-block">0.65%</div>
          <div class="percent__two d-375-none d-1440-block">1.50%</div>
          <div class="percent__three d-375-none d-1440-block">7.26%</div>
          <div class="percent__four d-375-none d-1440-block">16.20%</div>
          <div class="percent__five d-375-none d-1440-block">24.25%</div>
          <div class="percent__six d-375-none d-1440-block">43.28%</div>
          <div class="percent__seven d-375-none d-1440-block">167.12%</div>
          <div class="percent__eight d-375-none d-1440-block">Jan 25, 1996</div>
        </div>
      </template>

      <div class="space__Rectangle d-375-none d-1440-block"></div>

      <template v-for="number in 6">
        <div class="table__rowItem__all" :key="number">
          <div class="table__rowItem d-1440-none">
            <div class="tablebody__columnItem__name d-768-none">EWAE</div>
            <div class="tablebody__columnItem__name d-375-none d-768-block d-1440-none">EWAEMF</div>
            <div class="tablebody__columnItem__allname">Evolve Wealth Asia Emerging Market Finance</div>
          </div>
          <div class="table__rowItem__percent d-1440-none">
            <span class="rectangle d-768-none"></span>
            <div class="month d-1440-none">1 Mth</div>
            <div class="percent">0.65%</div>
            <div class="month__two d-1440-none">3 Mth</div>
            <div class="percent__two">1.50%</div>
            <div class="month__three d-1440-none">6 Mths</div>
            <div class="percent__three">7.26%</div>
            <div class="month__four d-1440-none">1 Yr</div>
            <div class="percent__four">16.20%</div>
            <div class="month__five d-375-none d-768-block d-1440-none">3 Yr</div>
            <div class="percent__five d-375-none d-768-block">24.25%</div>
            <div class="month__six d-375-none d-768-block d-1440-none">5 Yr</div>
            <div class="percent__six d-375-none d-768-block">43.28%</div>
            <div class="month__seven d-375-none d-768-block d-1440-none">Since Incept</div>
            <div class="percent__seven d-375-none d-768-block">167.12%</div>
            <div class="month__eight d-375-none d-768-block d-1440-none">Incept Date</div>
            <div class="percent__eight d-375-none d-768-block">Jan 25, 1996</div>
          </div>
        </div>
      </template>


      <div class="Button__Rectangle d-768-none d-1440-none">
        <span class="Button__Rectangle__Change">
          <span class="Oval__one">
            <img src="@/assets/test3.jpg" />
          </span>
          <span class="Oval__two">
            <img src="@/assets/test3.jpg" />
          </span>
          <span class="Button__Number">2</span>
          <span class="Oval__three">
            <img src="@/assets/test3.jpg" />
          </span>
          <span class="Oval__four">
            <img src="@/assets/test3.jpg" />
          </span>
        </span>
      </div>

      <div class="Button__Rectangle2 d-768-none d-1440-none">
        <span class="Button__Rectangle2__Change">
          <span class="Button__Number2">
            <img src="@/assets/test3.jpg" />
          </span>
          <span class="Showing">Showing 1-10 of 58</span>
        </span>
      </div>

      <div class="Button__Rectangle d-375-none d-1440-none">
        <span class="Button__Rectangle__Change">
          <span class="Oval__one">
            <img src="@/assets/test3.jpg" />
          </span>
          <span class="Oval__two">
            <img src="@/assets/test3.jpg" />
          </span>
          <span class="Button__Number">2</span>
          <span class="Oval__three">
            <img src="@/assets/test3.jpg" />
          </span>
          <span class="Oval__four">
            <img src="@/assets/test3.jpg" />
          </span>
        </span>
        <span class="Button__Number2__Tablet">
          <img src="@/assets/test3.jpg" />
        </span>
        <span class="Showing__Tablet">Showing 1-10 of 58</span>
      </div>

      <div class="Button__Rectangle d-375-none d-768-none">
        <span class="Oval__one">
          <img src="@/assets/test3.jpg" />
        </span>
        <span class="Oval__two">
          <img src="@/assets/test3.jpg" />
        </span>
        <span class="Oval__three">1</span>
        <span class="Button__Number">2</span>
        <span class="Oval__four">3</span>
        <span class="Oval__five">4</span>
        <span class="Oval__six">5</span>
        <span class="Oval__seven">6</span>
        <span class="Oval__eight">7</span>
        <span class="Oval__nine">8</span>
        <span class="Oval__ten">9</span>
        <span class="Oval__eleven">10</span>
        <span class="Oval__twelve">
          <img src="@/assets/test3.jpg" />
        </span>
        <span class="Oval__thirteen">
          <img src="@/assets/test3.jpg" />
        </span>
        <span class="Button__Number2__Desktop">
          <img src="@/assets/test3.jpg" />
        </span>
        <span class="Showing__Desktop">Showing 1-10 of 58</span>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.css__RWD {
  width: 100%;
  padding: 0 1rem;
  .watchlist__headerGroup {
    height: 40px;
    padding-top: 10px;
    margin-bottom: 50px;
    position: relative;
  }
  .watchlist__header {
    height: 28px;
    font-size: 24px;
    font-weight: 500;
    color: #282828;
    position: absolute;
  }
  .model__rectangle {
    width: 94px;
    height: 50px;
    border-radius: 2px;
    background-color: #f2f4ff;
    position: absolute;
    right: 0px;
  }
  .model {
    height: 16px;
    opacity: 0.9;
    font-style: 14px;
    font-weight: bold;
    text-align: center;
    position: absolute;
    color: #414042;
    margin: 10px 0px 0px 5px;
  }
  .path {
    height: 7px;
    background-color: #414042;
    position: absolute;
    margin: 15px 0px 0px 55px;
  }
  .magnifierRectangle {
    margin-top: 60px;
    display: block;
  }
  .magnifier {
    object-fit: contain;
    display: block;
  }
  .tableheader__rowItem {
    height: 30px;
    position: relative;
    margin-top: 10px;
    border-bottom: solid 1px rgba(151, 151, 151, 0.2);
  }
  .tableheader__model {
    height: 14px;
    font-size: 13px;
    font-weight: bold;
    line-height: 1.23;
    color: #414042;
    position: absolute;
    margin-top: 5px;
  }
  .model__icon {
    width: 7px;
    height: 14px;
    object-fit: contain;
    position: absolute;
    margin: 5px 0px 0px 40px;
  }
  .table__rowItem {
    height: 68px;
    position: relative;
    box-shadow: inset 0 1px 0 0 #ecedef;
  }
  .tablebody__columnItem__name {
    height: 18px;
    font-size: 15px;
    font-weight: bold;
    color: #414042;
    position: absolute;
    padding-top: 10px;
  }
  .tablebody__columnItem__allname {
    height: 16px;
    opacity: 0.5;
    font-size: 13px;
    line-height: 1.31;
    color: #414042;
    position: absolute;
    padding-top: 35px;
  }

  .table__rowItem__percent {
    height: 68px;
    border-bottom: solid 1px rgba(151, 151, 151, 0.2);
  }
  .rectangle {
    width: 4px;
    height: 64px;
    background-color: rgba(65, 64, 66, 0.7);
    position: absolute;
  }
  .tablebody__columnItem__percent {
    width: 94px;
    height: 64px;
    box-shadow: -5px 2px 14px -3px rgba(0, 0, 0, 0.13);
    background-color: #ffffff;
    position: absolute;
    margin-left: 2px;
  }
  .tablebody__columnItem__percent__two {
    width: 94px;
    height: 64px;
    background-color: #ffffff;
    position: absolute;
    margin-left: 96px;
  }
  .tablebody__columnItem__percent__three {
    width: 94px;
    height: 64px;
    box-shadow: -5px 2px 14px -3px rgba(0, 0, 0, 0.13);
    background-color: #ffffff;
    position: absolute;
    margin-left: 2px;
  }
  .tablebody__columnItem__percent__four {
    width: 94px;
    height: 64px;
    box-shadow: -5px 2px 14px -3px rgba(0, 0, 0, 0.13);
    background-color: #ffffff;
    position: absolute;
    margin-left: 2px;
  }
  .month {
    height: 16px;
    font-size: 13px;
    font-weight: bold;
    color: #414042;
    margin: 10px 0px 0px 20px;
    position: absolute;
  }
  .month__two {
    height: 16px;
    font-size: 13px;
    font-weight: bold;
    color: #414042;
    margin: 10px 0px 0px 100px;
    position: absolute;
  }
  .month__three {
    height: 16px;
    font-size: 13px;
    font-weight: bold;
    color: #414042;
    margin: 10px 0px 0px 180px;
    position: absolute;
  }
  .month__four {
    height: 16px;
    font-size: 13px;
    font-weight: bold;
    color: #414042;
    margin: 10px 0px 0px 260px;
    position: absolute;
  }
  .percent {
    height: 16px;
    font-size: 14px;
    font-weight: bold;
    color: #00a500;
    margin: 30px 0px 0px 20px;
    position: absolute;
  }
  .percent__two {
    height: 16px;
    font-size: 14px;
    font-weight: bold;
    color: #00a500;
    margin: 30px 0px 0px 100px;
    position: absolute;
  }
  .percent__three {
    height: 16px;
    font-size: 14px;
    font-weight: bold;
    color: #00a500;
    margin: 30px 0px 0px 180px;
    position: absolute;
  }
  .percent__four {
    height: 16px;
    font-size: 14px;
    font-weight: bold;
    color: #00a500;
    margin: 30px 0px 0px 260px;
    position: absolute;
  }
  .space__Rectangle {
    height: 32px;
    box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
    padding-top: 20px;
  }

  .Button__Rectangle {
    height: 32px;
    position: relative;
    display: block;
    padding-top: 10px;
  }

  .Button__Rectangle__Change {
    height: 32px;
    position: absolute;
    left: 50%;
  }
  .Oval__one {
    position: absolute;
    left: 75px;
    top: calc(50% - 12px);
  }
  .Oval__two {
    position: absolute;
    left: 40px;
    top: calc(50% - 12px);
  }
  .Oval__three {
    position: absolute;
    left: -70px;
    top: calc(50% - 12px);
  }
  .Oval__four {
    position: absolute;
    top: calc(50% - 12px);
    left: -105px;
  }

  .Button__Number {
    width: 67px;
    height: 32px;
    border-radius: 17px;
    background-color: #9aefaa;
    position: absolute;
    left: -35px;
    padding-top: 2px;
    text-align: center;
  }
  .Button__Rectangle2__Change {
    height: 32px;
    position: absolute;
    left: 50%;
  }
  .Button__Rectangle2 {
    height: 32px;
    position: relative;
    display: blcok;
    padding-top: 10px;
  }
  .Button__Number2 {
    height: 32px;
    position: absolute;
    left: -105px;
    top: calc(50% - 12px);
  }
  .Showing {
    font-size: 12px;
    line-height: 2.5;
    letter-spacing: -0.2px;
    color: #4a4a4a;
    position: absolute;
    left: -50px;
    white-space: nowrap;
  }

  .d-375-none {
    display: none;
  }
  .d-375-block {
    display: block;
  }

  @media (min-width: 768px) {
    .model__rectangle {
      right: 170px;
    }
    .magnifier {
      position: absolute;
      margin: 8px 0px 0px 120px;
    }
    .model {
      padding-left: 20px;
      color: #486bff;
    }
    .stork {
      height: 16px;
      opacity: 0.9;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.29;
      color: #414042;
      position: absolute;
      right: 120px;
      margin-top: 15px;
    }
    .mutualfund {
      height: 16px;
      opacity: 0.9;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.29;
      color: #414042;
      position: absolute;
      right: 0px;
      white-space: nowrap;
      margin-top: 15px;
    }
    .table__rowItem {
      height: 50px;
    }
    .tablebody__columnItem__allname {
      padding: 12px 0px 0px 80px;
    }
    .month__five {
      height: 16px;
      font-size: 13px;
      font-weight: bold;
      color: #414042;
      margin: 10px 0px 0px 350px;
      position: absolute;
    }
    .percent__five {
      height: 16px;
      font-size: 14px;
      font-weight: bold;
      color: #00a500;
      margin: 30px 0px 0px 350px;
      position: absolute;
    }
    .month__six {
      height: 16px;
      font-size: 13px;
      font-weight: bold;
      color: #414042;
      margin: 10px 0px 0px 450px;
      position: absolute;
    }
    .percent__six {
      height: 16px;
      font-size: 14px;
      font-weight: bold;
      color: #00a500;
      margin: 30px 0px 0px 450px;
      position: absolute;
    }
    .month__seven {
      height: 16px;
      font-size: 13px;
      font-weight: bold;
      color: #414042;
      margin: 10px 0px 0px 550px;
      position: absolute;
    }
    .percent__seven {
      height: 16px;
      font-size: 14px;
      font-weight: bold;
      color: #00a500;
      margin: 30px 0px 0px 550px;
      position: absolute;
    }
    .month__eight {
      height: 16px;
      font-size: 13px;
      font-weight: bold;
      color: #414042;
      margin: 10px 0px 0px 650px;
      position: absolute;
    }
    .percent__eight {
      height: 16px;
      font-size: 14px;
      line-height: 1.14;
      color: #414042;
      margin: 30px 0px 0px 650px;
      position: absolute;
    }
    .Oval__one {
      position: absolute;
      right: 220px;
    }
    .Oval__two {
      position: absolute;
      right: 260px;
    }
    .Button__Number {
      position: absolute;
      right: 295px;
    }
    .Oval__three {
      position: absolute;
      right: 375px;
    }
    .Oval__four {
      position: absolute;
      right: 415px;
    }
    .Button__Rectangle {
      height: 32px;
      position: relative;
      display: block;
    }

    .Button__Rectangle__Change {
      width: 300px;
      height: 32px;
      position: absolute;
      left: 50%;
      display: block;
    }
    .Showing__Tablet {
      height: 32px;
      font-family: Inter;
      font-size: 12px;
      line-height: 2.5;
      letter-spacing: -0.2px;
      color: #4a4a4a;
      position: absolute;
      right: 10px;
    }
    .Button__Number2__Tablet {
      height: 32px;
      position: absolute;
      right: 120px;
      top: calc(50% - 4px);
    }

    .d-768-none {
      display: none;
    }
    .d-768-block {
      display: block;
    }
  }
  @media (min-width: 1440px) {
    .month {
      margin: 5px 0px 0px 400px;
    }
    .month__two {
      margin: 5px 0px 0px 520px;
    }
    .month__three {
      margin: 5px 0px 0px 640px;
    }
    .month__four {
      margin: 5px 0px 0px 760px;
    }
    .month__five {
      margin: 5px 0px 0px 880px;
    }
    .month__six {
      margin: 5px 0px 0px 1000px;
    }
    .month__seven {
      margin: 5px 0px 0px 1100px;
    }
    .month__eight {
      margin: 5px 0px 0px 1250px;
    }
    .model__icon {
      position: absolute;
      margin-left: 90px;
    }
    .month__icon {
      height: 14px;
      object-fit: contain;
      position: absolute;
      margin: 5px 0px 0px 435px;
    }
    .month__icon__two {
      height: 14px;
      object-fit: contain;
      position: absolute;
      margin: 5px 0px 0px 555px;
    }
    .month__icon__three {
      height: 14px;
      object-fit: contain;
      position: absolute;
      margin: 5px 0px 0px 675px;
    }
    .month__icon__four {
      height: 14px;
      object-fit: contain;
      position: absolute;
      margin: 5px 0px 0px 785px;
    }
    .month__icon__five {
      height: 14px;
      object-fit: contain;
      position: absolute;
      margin: 5px 0px 0px 910px;
    }
    .month__icon__six {
      height: 14px;
      object-fit: contain;
      position: absolute;
      margin: 5px 0px 0px 1030px;
    }
    .month__icon__seven {
      height: 14px;
      object-fit: contain;
      position: absolute;
      margin: 5px 0px 0px 1180px;
    }
    .month__icon__eight {
      height: 14px;
      object-fit: contain;
      position: absolute;
      margin: 5px 0px 0px 1325px;
    }
    .tablebody__columnItem__allname {
      height: 16px;
      font-size: 14px;
      opacity: 1;
      line-height: 1.14;
      color: #414042;
      padding: unset;
      padding: 18px 0px 0px 0px;
    }
    .percent {
      margin: unset;
      margin: 15px 0px 0px 400px;
    }
    .percent__two {
      margin: unset;
      margin: 15px 0px 0px 520px;
    }
    .percent__three {
      margin: unset;
      margin: 15px 0px 0px 640px;
    }
    .percent__four {
      margin: unset;
      margin: 15px 0px 0px 760px;
    }
    .percent__five {
      margin: unset;
      margin: 15px 0px 0px 880px;
    }
    .percent__six {
      margin: unset;
      margin: 15px 0px 0px 1000px;
    }
    .percent__seven {
      margin: unset;
      margin: 15px 0px 0px 1100px;
    }
    .percent__eight {
      margin: unset;
      margin: 15px 0px 0px 1250px;
    }
    .Button__Rectangle {
      height: 32px;
      position: relative;
      display: block;
      padding-top: 10px;
    }
    .Oval__one {
      height: 32px;
      position: absolute;
      left: 0px;
      top: calc(50% - 14px);
      padding-top: 10px;
    }
    .Oval__two {
      height: 32px;
      position: absolute;
      left: 30px;
      top: calc(50% - 14px);
      padding-top: 10px;
    }
    .Oval__three {
      height: 32px;
      position: absolute;
      left: 70px;
      top: calc(50% - 14px);
      padding-top: 10px;
    }
    .Button__Number {
      position: absolute;
      width: 32px;
      height: 32px;
      background-color: #9aefaa;
      left: 90px;
      -moz-border-radius: 16px;
      -webkit-border-radius: 16px;
      border-radius: 16px;
      text-align: center;
    }
    .Oval__four {
      height: 32px;
      position: absolute;
      left: 130px;
      top: calc(50% - 14px);
      padding-top: 10px;
    }
    .Oval__five {
      height: 32px;
      position: absolute;
      left: 160px;
      line-height: 1.75;
    }
    .Oval__six {
      height: 32px;
      position: absolute;
      left: 190px;
      line-height: 1.75;
    }
    .Oval__seven {
      height: 32px;
      position: absolute;
      left: 220px;
      line-height: 1.75;
    }
    .Oval__eight {
      height: 32px;
      position: absolute;
      left: 250px;
      line-height: 1.75;
    }
    .Oval__nine {
      height: 32px;
      position: absolute;
      left: 280px;
      line-height: 1.75;
    }
    .Oval__ten {
      height: 32px;
      position: absolute;
      left: 310px;
      line-height: 1.75;
    }
    .Oval__eleven {
      height: 32px;
      position: absolute;
      left: 340px;
      line-height: 1.75;
    }
    .Oval__twelve {
      height: 32px;
      position: absolute;
      left: 380px;
      top: calc(50% - 12px);
      padding-top: 10px;
    }
    .Oval__thirteen {
      height: 32px;
      position: absolute;
      left: 410px;
      top: calc(50% - 12px);
      padding-top: 10px;
    }
    .Button__Number {
      position: absolute;
      width: 32px;
      height: 32px;
      background-color: #9aefaa;
      left: 90px;
      -moz-border-radius: 16px;
      -webkit-border-radius: 16px;
      border-radius: 16px;
      text-align: center;
    }
    .Showing__Desktop {
      font-size: 12px;
      line-height: 2.5;
      letter-spacing: -0.2px;
      color: #4a4a4a;
      position: absolute;
      right: 10px;
    }
    .Button__Number2__Desktop {
      position: absolute;
      right: 120px;
      top: calc(50% - 12px);
      padding-top: 10px;
    }

    .d-1440-none {
      display: none;
    }
    .d-1440-block {
      display: block;
    }
  }
}
</style>