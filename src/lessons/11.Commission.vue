<template>
  <div class="pb-5">
    <div class="Commission-Rectangle">
      <div class="My-Commission">
        <span>My Commission</span>
      </div>
      <div class="Recent-3-months">
        <p>Recent-3-months</p>
      </div>
    </div>

    <div class="Magnifier-Rectangle">
      <span class="Magnifier---simple-line-icons"><img src="@/assets/test3.jpg"></span>
    </div>

    <div class="Account-Rectangle">
      <span class="Account-Number">Account Number</span>
      <span class="base"><img src="@/assets/test3.jpg"></span>
    </div>

    <div class="NB1-Rectangle">
      <h4>NB1200202</h4>
      <p class="NB1-Fee">Contribution Fee</p>
      <p class="NB1-USD">USD $ 000,000,000,000.000000</p>
      <p class="NB1-Paydate">Pay date: Jan 05,2020</p>
    </div>
    <div class="NB2-Rectangle">
      <p class="NB2-Fee">Contribution Fee</p>
      <p class="NB2-USD">USD $ 342.98</p>
      <p class="NB2-Paydate">Pay date: Jan 05,2020</p>
    </div>
    

    





  </div>

</template>


<script>
export default {
  components: {
    
  },
  data: () => ({
    imageUrl: require("@/assets/temple.jpg")
  })
}
</script>


<style lang="scss" scoped>
  .Commission-Rectangle{
    width: 184px;
    height: 40px;
    .My-Commission {
      width: 184px;
      height: 28px;
      font-family: HelveticaNeue;
      font-size: 24px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
    }
    .Recent-3-months {
      width: 105px;
      height: 16px;
      opacity: 0.35;
      font-family: HelveticaNeue;
      font-size: 12px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
    }
    .Filter-Rectangle {
      width: 82px;
      height: 40px;
      border-radius: 4px;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
      border: solid 1px rgba(151, 151, 151, 0.2);
      background-color: #ffffff;
    }
    .Filter{
      width: 34px;
      height: 16px;
      opacity: 0.9;
      font-family: HelveticaNeue;
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.29;
      letter-spacing: normal;
      color: #414042;
    }
    //搜尋的小圖案
    .Magnifier-Rectangle{
      width: 24px;
      height: 24px;
      .Magnifier---simple-line-icons {
        width: 24px;
        height: 24px;
        object-fit: contain;
      }
    }

    //Account Number+圖
    .Account-Rectangle{
      width: 300px;
      height: 32px;
      .Account-Number {
        width: 300px;
        height: 16px;
        font-family: HelveticaNeue;
        font-size: 13px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.23;
        letter-spacing: -0.2px;
        color: #414042;        
      }
      .base {
        width: 7px;
        height: 14px;
        object-fit: contain;
      }
    }

    .NB1-Rectangle {
      width: 327px;
      height: 120px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
    }
    .NB2-Rectangle {
      width: 327px;
      height: 119px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
    }
    .NB3-Rectangle {
      width: 327px;
      height: 119px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
    }
    .NB4-Rectangle {
      width: 327px;
      height: 119px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
    }
    .NB5-Rectangle {
      width: 327px;
      height: 119px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
    }
    //NB1內容
    .NB1-Fee{
      width: 135px;
      height: 15px;
      opacity: 0.5;
      font-family: HelveticaNeue;
      font-size: 13px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.22px;
      color: #414042;
    }
    .NB1-USD{
      width: 218px;
      height: 18px;
      font-family: HelveticaNeue;
      font-size: 15px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.07;
      letter-spacing: normal;
      color: #414042;
    }
    .NB1-Paydate{
      width: 135px;
      height: 16px;
      opacity: 0.5;
      font-family: HelveticaNeue;
      font-size: 13px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.08;
      letter-spacing: -0.22px;
      color: #414042;
    }
    .NB2-Fee{
      width: 135px;
      height: 15px;
      opacity: 0.5;
      font-family: HelveticaNeue;
      font-size: 13px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.22px;
      color: #414042;
    }
    .NB2-USD{
      width: 184px;
      height: 18px;
      font-family: HelveticaNeue;
      font-size: 15px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.07;
      letter-spacing: normal;
      color: #414042;
    }
    .NB2-Paydate{
      width: 135px;
      height: 14px;
      opacity: 0.5;
      font-family: HelveticaNeue;
      font-size: 13px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.08;
      letter-spacing: -0.22px;
      color: #414042;
    }

  }
  
  


  @media (min-width: 375px){

  }
</style>