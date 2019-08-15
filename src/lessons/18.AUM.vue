<template>
  <div class="css__RWD">
    <!-- aum -->
    <div class="css__RWD">
      <div class="aum__group">

        <div class="aum__headerGroup">
          <span class="aum__header">AUM</span>
          <span class="ytd__header d-768-none">+$12,765,912(ytd)</span>
          <span class="tablebody__columnItem d-375-none d-768-block d-1440-none">
            <span class="columnItem__icon"><img src="@/assets/facebook.png"></span>
            <span class="columnItem__percent">00.00%(ytd)</span>
          </span>
        </div>

        <div class="table__rowItem">
          <span class="left__icon d-768-none"><img src="@/assets/facebook.png"></span>
          <span class="tablebody__price">$10,768,773.66</span>
          <span class="right__icon d-768-none"><img src="@/assets/facebook.png"></span>
        </div>

        <div class="table__rowItem">
          <div class="tablebody__columnItem d-768-none d-1440-block">
            <span class="columnItem__icon"><img src="@/assets/facebook.png"></span>
            <span class="columnItem__percent">00.00%(ytd)</span>
          </div>
          <div class="ytd__header d-375-none d-768-block d-1440-none">+$12,765,912(ytd)</div>
        </div>
        <div class="table__rowItem d-375-none d-768-none d-1440-block">
          <div class="ytd__header">+$12,765,912(ytd)</div>
        </div>

        <div class="table__rowItem d-768-none">
          <span class="oval__one "><img src="@/assets/facebook.png"></span>
          <span class="oval__two "><img src="@/assets/facebook.png"></span>
          <span class="oval__three "><img src="@/assets/facebook.png"></span>
          <span class="oval__four "><img src="@/assets/facebook.png"></span>
          <span class="oval__five "><img src="@/assets/facebook.png"></span>
          <span class="oval__six "><img src="@/assets/facebook.png"></span>
        </div>
      </div>














    </div>

  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.css__RWD{
  width:100%;
  padding:0 2rem;
  .aum__group{
    max-width: 343px;
    height: 200px;
    border-radius: 4px;
    box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
  }
  .aum__headerGroup{
    height: 23px;
    padding-top: 10px;
    padding-bottom:30px;
  }
  .aum__header {
    height: 23px;
    opacity: 0.5;
    font-size: 20px;
    color: #282828;
    margin-left: 20px;
    position: absolute;
  }
  .ytd__header{
    height: 16px;
    opacity: 0.5;
    font-size: 15px;
    line-height: 1.07;
    color: #4a4a4a;
    margin-left: 200px;
  }
  .table__rowItem{
    height: 40px;
    position: relative;
    margin-top: 20px;
  }
  .left__icon{
    width: 24px;
    height: 24px;
    object-fit: contain;
    position: absolute;
    margin: 14px 0px 0px 35px;
  }
  .tablebody__price{
    height: 40px;
    font-size: 28px;
    font-weight: 600;
    color: #414042;
    margin-left:75px;
  }
  .right__icon{
    width: 24px;
    height: 24px;
    object-fit: contain;
    position: absolute;
    margin: 14px 0px 0px 20px;
  }
  .tablebody__columnItem{
    max-width: 120px;
    height: 28px;
    border-radius: 14px;
    background-color: rgba(235, 237, 238, 0.5);
    margin-left:120px;
  }
  .columnItem__icon{
    width: 16px;
    height: 16px;
    object-fit: contain;
    position: absolute;
    margin: 5px 0px 0px 10px;
  }
  .columnItem__percent{
    height: 16px;
    font-size: 14px;
    line-height: 1.14;
    color: rgba(65, 64, 66, 0.5);
    margin: 0px 0px 0px 35px;
  }
  .oval__one{
    width: 8px;
    height: 8px;
    background-color: #0043ff;
    position: absolute;
    margin-left:120px;
  }
  .oval__two{
    width: 8px;
    height: 8px;
    background-color: #d8d8d8;
    position: absolute;
    margin-left: 140px;
  }
  .oval__three{
    width: 8px;
    height: 8px;
    background-color: #d8d8d8;
    position: absolute;
    margin-left: 160px;
  }
  .oval__four{
    width: 8px;
    height: 8px;
    background-color: #d8d8d8;
    position: absolute;
    margin-left: 180px;
  }
  .oval__five{
    width: 8px;
    height: 8px;
    background-color: #d8d8d8;
    position: absolute;
    margin-left: 200px;
  }
  .oval__six{
    width: 8px;
    height: 8px;
    background-color: #d8d8d8;
    position: absolute;
    margin-left: 220px;
  }
  .d-375-none{
    display:none;
  }
  .d-375-block{
    display:block;
  }
  
@media (min-width: 768px) {
  .aum__group{
    max-width: 360px;
    height: 128px;
    margin-left:300px;
  }
  .tablebody__price{
    font-size: 26px;
  }
  .ytd__header{
    margin-left:130px; 
  }
  .table__rowItem{
    margin: unset;
    margin: 10px 0px 0px 100px;
  }
  .tablebody__columnItem{
    position: absolute;
    margin-left: 230px;
    
  }
  .columnItem__percent{
    margin-top:5px;

  }




  .d-768-none{
    display:none;
  }
  .d-768-block{
    display:block;
  }

}
@media (min-width: 1440px) {
  .aum__group{
    max-width: 240px;
    height: 176px;
    margin: unset;
  }
  .aum__header{
    margin:0px 0px 0px 100px; 
  }
  .table__rowItem{
    margin: unset;
  }
  .tablebody__price{
    margin: unset;
    margin: 10px 0px 0px 30px;
  }
  .ytd__header{
    margin: unset;
    margin: 20px 0px 0px 55px;
  }
  .tablebody__columnItem{
    margin: unset;
    margin: 15px 0px 0px 60px;
  }
  .d-1440-none{
    display:none;
  }
  .d-1440-block{
    display:block;
  }
}

}
</style>