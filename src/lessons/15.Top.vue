<template>
  <div class="pb-5">
    <div class="css__RWD">
      <div class="top__headerGroup">
        <span class="top__header">Top 10s</span>
        <span class="model__rectangle">
          <span class="model">Model</span>
          <span class="path d-768-none"><img src="@/assets/facebook.png"></span>
        </span>
        <span class="client d-375-none d-768-block">Client</span>
        <span class="account d-375-none d-768-block">Account</span>
        <span class="asset__manager d-375-none d-768-block">Asset Manager</span>
        <span class="holding d-375-none d-768-block">Holding</span>
      </div>

      <div class="model__table">
        <div class="tableheader__rowItem">
          <div class="model__name d-768-none">Model Name</div>
          <div class="aum__icon">#</div>
          <span class="model__name d-375-none">Model Name</span>
          <span class="aum d-768-none">AUM</span>
          <span class="tableheader__client d-375-none d-768-block">Client</span>
          <div class="tableheader__aum d-375-none d-768-block">AUM</div>
          <span class="tableheader__netflow d-375-none d-768-block">Net Flow</span>
        </div>
        
        <template v-for="number in 10">
          <div class="table__rowItem" :key="number">
            <div class="oval__icon">1</div>
            <span class="tablebody__columnItem">Morningstar High Growth</span>
            <div class="tablebody__columnItem__usd__one d-375-none d-768-block">USD $2,398,700.12</div>
            <div class="tablebody__columnItem__usd ">USD $2,398,700.12</div>
            <span class="clientNumber__rectangle">
              <span class="tablebody__clientNumber d-375-none d-768-block">45</span>
            </span>
          </div>
        </template>
        
        <div class="space-rowItem">
        </div>
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
  .top__headerGroup{
    height:40px;
    padding-top:10px;
    margin-bottom:50px;
    position: relative;
  }
  .top__header{
    height:28px;
    font-size: 24px;
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
  .model__table{
    height:800px;
  }
  
  .tableheader__rowItem{
    height:40px;
    position: relative;
  }
  .model__name{
    height: 16px;
    font-size: 13px;
    font-weight: bold;
    line-height: 1.23;
    color: #414042;
    position: absolute;
    margin-left:40px;
  }
  .aum__icon{
    height: 16px;
    font-size: 13px;
    font-weight: bold;
    color: #414042;
    position: absolute;
    margin:20px 0px 0px 10px;
  }
  .aum{
    height: 16px;
    opacity: 0.35;
    font-size: 12px;
    font-weight: bold;
    color: #414042;
    position: absolute;
    margin:20px 0px 0px 40px;
  }
  .table__rowItem{
    height:64px;
    position: relative;
    box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
  }
  .oval__icon{
    width: 24px;
    height: 24px;
    background-color: #defae3;
    position: absolute;
    text-align: center;
    margin:20px 0px 0px 0px;
    -moz-border-radius: 16px;
    -webkit-border-radius: 16px;
    border-radius: 16px;
  }
  .tablebody__columnItem{
    height: 18px;
    font-size: 15px;
    font-weight: bold;
    color: #414042;
    position: absolute;
    margin:5px 0px 0px 40px;
  }
  .tablebody__columnItem__usd{
    height: 14px;
    opacity: 0.5;
    font-size: 13px;
    line-height: 1.31;
    color: #414042;
    position: absolute;
    margin:35px 0px 0px 40px;
  }
  .space-rowItem {
      height: 32px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
    }
  .d-375-none{
    display:none;
  }
  .d-375-block{
    display:block;
  }

@media (min-width: 768px) {
  .model__name{
    margin-top:20px;
    display:block;
  }
  .tableheader__client{
    height: 16px;
    font-size: 13px;
    font-weight: bold;
    color: #414042;
    position: absolute;
    margin:20px 0px 0px 400px;
  }
  .tableheader__aum{
    height: 16px;
    font-size: 13px;
    font-weight: bold;
    color: #414042;
    position: absolute;
    right:0px;
  }
  .tableheader__netflow{
    height: 14px;
    opacity: 0.4;
    font-size: 12px;
    font-weight: bold;
    color: #414042;
    position: absolute;
    right:0px;
    margin-top:20px;
  }
  .model__rectangle{
    right: unset;
    position: absolute;
    right:430px ;
  }
  .model{
    margin-left:25px;
    color: #486bff;
  }
  .client{
    height:16px;
    opacity: 0.9;
    font-size: 14px;
    font-weight: bold;
    color:#414042;
    position: absolute;
    right:360px;
    margin-top: 13px;
  }
  .account {
    height: 16px;
    opacity: 0.9;
    font-size: 14px;
    font-weight: bold;
    color: #414042;
    position: absolute;
    right: 250px;
    margin-top:13px;
  }
  .asset__manager {
    height: 16px;
    opacity: 0.9;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #414042;
    position: absolute;
    right:100px;
    margin-top:13px;
  }
  .holding {
    height: 16px;
    opacity: 0.9;
    font-size: 14px;
    font-weight: bold;
    color: #414042;
    position: absolute;
    right: 10px;
    margin-top:13px;
  }
  .tablebody__columnItem{
    margin:unset;
    margin:20px 0px 0px 40px;
  }
  .clientNumber__rectangle{
    width:40px;
    height: 16px;
    position: absolute;
    margin:20px 0px 0px 395px;
  }
  .tablebody__clientNumber{
    height: 16px;
    font-size: 14px;
    color: #414042;
    text-align: right;
  }
  .tablebody__columnItem__usd__one{
    height: 16px;
    opacity: 0.9;
    font-size: 14px;
    font-weight: bold;
    color: #414042;
    position: absolute;
    right: 0px;
    margin-top: 5px;
  }
  .tablebody__columnItem__usd{
    margin:unset;
    position: absolute;
    right: 0px;
    margin-top:40px;
  }
  .d-768-none{
    display:none;
  }
  .d-768-block{
    display:block;
  }
}
}
</style>
