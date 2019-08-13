<template>
  <div class="pb-5">
    <div class="css__RWD">
      <div class="myactionlog__headerGroup">
        <span class="myactionlog__header">My Action Log</span>
      </div>
      <div class="tablebody__group">
        <div class="tablebody__month">Nov 28</div>
        <div class="tablebody__year">2019</div>
        <div class="tablebody__line"></div>
        <div class="green__icon"></div>
        <div class="tablebody__icon"><img src="@/assets/facebook.png"></div>
        <div class="tablebody__name">NB1200178</div>
        <div class="tablebody__content">Custom Rebalance</div>
        <div class="tablebody__details">view instruction details</div>
      </div>
      <div class="tablebody__group">
        <div class="tablebody__month">Nov 28</div>
        <div class="tablebody__year">2019</div>
        <div class="tablebody__line"></div>
        <div class="green__icon"></div>
        <div class="tablebody__icon"><img src="@/assets/facebook.png"></div>
        <div class="tablebody__name">NB1200178</div>
        <div class="tablebody__content">Custom Rebalance</div>
        <div class="tablebody__details">view instruction details</div>
      </div>
      
      
      <div class="tablebody__arrow"><img src="@/assets/facebook.png"></div>
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
  .myactionlog__headerGroup{
    height:28px;
    padding-top: 10px;
    position: relative;
  }
  .myactionlog__header{
    height: 28px;
    font-size: 24px;
    font-weight: 500;
    color: #282828;
  }
  .tablebody__group{
    height:100px;
    position: relative;
    padding-top:60px;
  }
  .tablebody__month{
    height: 16px;
    font-size: 16px;
    font-weight: 300;
    color: #414042;
    position: absolute;
    margin-top: 10px;
  }
  .tablebody__year{
    height: 14px;
    opacity: 0.5;
    font-size: 13px;
    line-height: 1.31;
    color: #414042;
    position: absolute;
    margin-top:35px;
  }
  .green__icon{
    width: 8px;
    height: 8px;
    background-color: #9aefaa;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px rgba(151, 151, 151, 0.2);
    position: absolute;
    margin:20px 0px 0px 80px;
  }
  .tablebody__icon{
    width: 16px;
    height: 16px;
    object-fit: contain;
    position: absolute;
    margin:15px 0px 0px 120px;
  }
  .tablebody__name{
    height: 18px;
    font-size: 14px;
    font-weight: bold;
    color: #414042;
    position: absolute;
    margin: 10px 0px 0px 150px;
  }
  .tablebody__content{
    height: 18px;
    font-size: 14px;
    line-height: 1.14;
    color: #414042;
    position: absolute;
    margin: 35px 0px 0px 150px;
  }
  .tablebody__details{
    height: 15px;
    font-size: 13px;
    line-height: 1.38;
    color: #0043ff;
    text-decoration: underline;
    position: absolute;
    margin: 55px 0px 0px 150px;
  }
  .tablebody__arrow{
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-left:78px;
    margin-top:70px;
  }
  .tablebody__line{
    height:100px;
    position: absolute;
    opacity: 0.3;
    border: solid 1px rgba(151, 151, 151, 1);
    margin-left: 83px;
  }


@media (min-width: 768px) {
  .tablebody__group{
    height:80px;
  }
  .tablebody__line{
    height:80px;
  }
  .tablebody__content{
    margin: 12px 0px 0px 250px;
  }
  .tablebody__details{
    margin: 12px 0px 0px 400px;
  }
}
@media (min-width: 1440px) {
  .tablebody__content{
    margin: 35px 0px 0px 150px;
  }
  .tablebody__details{
    margin: 35px 0px 0px 300px;
  }
}
}
</style>
