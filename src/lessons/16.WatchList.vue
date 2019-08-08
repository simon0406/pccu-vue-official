<template>
  <div class="pb-5">
    <div class="css__RWD">
      <div class="watchlist__headerGroup">
        <span class="watchlist__header">Watchlist</span>
        <span class="Magnifier d-375-none d-768-block"><img src="@/assets/test2.png"></span>
        <span class="model__rectangle">
          <span class="model">Model</span>
          <span class="path d-768-none"><img src="@/assets/facebook.png"></span>
        </span>
        <span class="stork d-375-none d-768-block">Stork</span>
        <span class="mutualfund d-375-none d-768-block">Mutual Fund</span>
      </div>

      <div class="MagnifierRectangle d-768-none">
        <span class="Magnifier"><img src="@/assets/test2.png"></span>
      </div>
      <div class="tableheader__rowItem">
        <span class="tableheader__model">Model</span>
        <span class="model__icon"><img src="@/assets/facebook.png"></span>
      </div>
      
      <div class="table__rowItem">
        <div class="tablebody__columnItem__name d-768-none">EWAE</div>
        <div class="tablebody__columnItem__name d-375-none d-768-block">EWAEMF</div>
        <div class="tablebody__columnItem__allname">Evolve Wealth Asia Emerging Mark....</div>
      </div>
      
      <div class="table__rowItem__percent">
      <span class="rectangle d-768-none"></span>
      <div class="month">1 Mth</div>
      <div class="percent">0.65%</div>
      <div class="month__two">3 Mth</div>
      <div class="percent__two">1.50%</div>
      <div class="month__three">6 Mths</div>
      <div class="percent__three">7.26%</div>
      <div class="month__four">1 Yr</div>
      <div class="percent__four">16.20%</div>

      <div class="month__five d-375-none d-768-block">3 Yr</div>
      <div class="percent__five d-375-none d-768-block">24.25%</div>
      <div class="month__six d-375-none d-768-block">5 Yr</div>
      <div class="percent__six d-375-none d-768-block">43.28%</div>
      <div class="month__seven d-375-none d-768-block">Since Incept</div>
      <div class="percent__seven d-375-none d-768-block">167.12%</div>
      <div class="month__eight d-375-none d-768-block">Incept Date</div>
      <div class="percent__eight d-375-none d-768-block">Jan 25, 1996</div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.css__RWD{
  width:100%;
  padding:0 1rem;
  .watchlist__headerGroup{
    height:40px;
    padding-top:10px;
    margin-bottom:50px;
    position: relative;
  }
  .watchlist__header{
    height: 28px;
    font-size: 24px;
    font-weight: 500;
    color: #282828;
    position: absolute;
  }
  .model__rectangle{
    width:94px;
    height:50px;
    border-radius: 2px;
    background-color: #f2f4ff;
    position: absolute;
    right:0px;
  }
  .model{
    height:16px;
    opacity: 0.9;
    font-style: 14px;
    font-weight: bold;
    text-align: center;
    position: absolute;
    color:#414042;
    margin:10px 0px 0px 5px;
  }
  .path {
    height: 7px;
    background-color: #414042;
    position: absolute;
    margin:15px 0px 0px 55px;
  }
  .MagnifierRectangle{
    margin-top:60px;
    display:block;
  }
  .Magnifier{
    object-fit: contain;
    display:block;
  }
  .tableheader__rowItem{
    height:30px;
    position: relative;
    margin-top:10px;
    border-bottom: solid 1px rgba(151, 151, 151, 0.2);
  }
  .tableheader__model{
    height: 14px;
    font-size: 13px;
    font-weight: bold;
    line-height: 1.23;
    color: #414042;
  }
  .model__icon{
    width: 7px;
    height: 14px;
    object-fit: contain;
    position: absolute;
    margin:5px 0px 0px 5px;
  }
  .table__rowItem{
    height: 68px;
    position: relative;
    box-shadow: inset 0 1px 0 0 #ecedef;
  }
  .tablebody__columnItem__name{
    height: 18px;
    font-size: 15px;
    font-weight: bold;
    color: #414042;
    position: absolute;
    padding-top:10px;
  }
  .tablebody__columnItem__allname{
    height: 16px;
    opacity: 0.5;
    font-size: 13px;
    line-height: 1.31;
    color: #414042;
    position: absolute;
    padding-top: 35px;
  }
  
  .table__rowItem__percent{
    height: 68px;
    border-bottom: solid 1px rgba(151, 151, 151, 0.2);
  }
  .rectangle {
    width: 4px;
    height: 64px;
    background-color: rgba(65, 64, 66, 0.7);
    position: absolute;
  }
  .tablebody__columnItem__percent{
    width:94px;
    height: 64px;
    box-shadow: -5px 2px 14px -3px rgba(0, 0, 0, 0.13);
    background-color: #ffffff;
    position: absolute;
    margin-left: 2px;
  }
  .tablebody__columnItem__percent__two{
    width:94px;
    height: 64px;
    background-color: #ffffff;
    position: absolute;
    margin-left: 96px;
  }
  .tablebody__columnItem__percent__three{
    width:94px;
    height: 64px;
    box-shadow: -5px 2px 14px -3px rgba(0, 0, 0, 0.13);
    background-color: #ffffff;
    position: absolute;
    margin-left: 2px;
  }
  .tablebody__columnItem__percent__four{
    width:94px;
    height: 64px;
    box-shadow: -5px 2px 14px -3px rgba(0, 0, 0, 0.13);
    background-color: #ffffff;
    position: absolute;
    margin-left: 2px;
  }
  .month{
    height: 16px;
    font-size: 13px;
    font-weight: bold;
    color: #414042;
    margin:10px 0px 0px 20px;
    position: absolute;
  }
  .month__two{
    height: 16px;
    font-size: 13px;
    font-weight: bold;
    color: #414042;
    margin:10px 0px 0px 100px;
    position: absolute;
  }
  .month__three{
    height: 16px;
    font-size: 13px;
    font-weight: bold;
    color: #414042;
    margin:10px 0px 0px 180px;
    position: absolute;
  }
  .month__four{
    height: 16px;
    font-size: 13px;
    font-weight: bold;
    color: #414042;
    margin:10px 0px 0px 260px;
    position: absolute;
  }
  .percent{
    height: 16px;
    font-size: 14px;
    font-weight: bold;
    color: #00a500;
    margin:30px 0px 0px 20px;
    position: absolute;
  }
  .percent__two{
    height: 16px;
    font-size: 14px;
    font-weight: bold;
    color: #00a500;
    margin:30px 0px 0px 100px;
    position: absolute;
  }
  .percent__three{
    height: 16px;
    font-size: 14px;
    font-weight: bold;
    color: #00a500;
    margin:30px 0px 0px 180px;
    position: absolute;
  }
  .percent__four{
    height: 16px;
    font-size: 14px;
    font-weight: bold;
    color: #00a500;
    margin:30px 0px 0px 260px;
    position: absolute;
  }
  
  .d-375-none{
    display:none;
  }
  .d-375-block{
    display:block;
  }

@media (min-width: 768px) {
  .model__rectangle{
    right:170px;
  }
  .Magnifier{
    position: absolute;
    margin:8px 0px 0px 120px;
  }
  .model{
    padding-left:20px;
  }
  .stork{
    height: 16px;
    opacity: 0.9;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.29;
    color: #414042;
    position: absolute;
    right:120px;
    margin-top:15px;
  }
  .mutualfund{
    height: 16px;
    opacity: 0.9;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.29;
    color: #414042;
    position: absolute;
    right:0px;
    white-space: nowrap;
    margin-top:15px;
  }
  .table__rowItem{
    height: 50px;
  }
  .tablebody__columnItem__allname{
    padding:12px 0px 0px 80px;
  }
  .month__five{
    height: 16px;
    font-size: 13px;
    font-weight: bold;
    color: #414042;
    margin:10px 0px 0px 350px;
    position: absolute;
  }
  .percent__five{
    height: 16px;
    font-size: 14px;
    font-weight: bold;
    color: #00a500;
    margin:30px 0px 0px 350px;
    position: absolute;
  }
  .month__six{
    height: 16px;
    font-size: 13px;
    font-weight: bold;
    color: #414042;
    margin:10px 0px 0px 450px;
    position: absolute;
  }
  .percent__six{
    height: 16px;
    font-size: 14px;
    font-weight: bold;
    color: #00a500;
    margin:30px 0px 0px 450px;
    position: absolute;
  }
  .month__seven{
    height: 16px;
    font-size: 13px;
    font-weight: bold;
    color: #414042;
    margin:10px 0px 0px 550px;
    position: absolute;
  }
  .percent__seven{
    height: 16px;
    font-size: 14px;
    font-weight: bold;
    color: #00a500;
    margin:30px 0px 0px 550px;
    position: absolute;
  }
  .month__eight{
    height: 16px;
    font-size: 13px;
    font-weight: bold;
    color: #414042;
    margin:10px 0px 0px 650px;
    position: absolute;
  }
  .percent__eight{
    height: 16px;
    font-size: 14px;
    line-height: 1.14;
    color: #414042;
    margin:30px 0px 0px 650px;
    position: absolute;
  }


  .d-768-none{
    display:none;
  }
  .d-768-block{
    display:block;
  }
}
@media (min-width: 1440px) {
  .d-1440-none{
    display:none;
  }
  .d-1440-block{
    display:block;
  }
}
}
</style>