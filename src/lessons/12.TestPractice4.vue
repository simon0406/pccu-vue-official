<template>
  <div class="css__RWD">
    <div class="pb-5">
    <div class="Commission-Rectangle">
      <div class="My-Commission">
        <span>MyCommission</span>
        <span class="Filter-Rectangle">
          <span class="Filter">Filter</span>
        </span>
        <div class="Recent-3-months">
        <p>Recent-3-months</p>
        </div>
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
      <p class="NB1-Name">NB1200202</p>
      <p class="NB1-Fee">Contribution Fee</p>
      <p class="NB1-USD">USD $ 000,000,000,000.000000</p>
      <p class="NB1-Paydate">Pay date: Jan 05,2020</p>
    </div>
    <div class="NB2-Rectangle">
      <p class="NB1-Name">NB1200209</p>
      <p class="NB2-Fee">Contribution Fee</p>
      <p class="NB2-USD">USD $ 342.98</p>
      <p class="NB2-Paydate">Pay date: Jan 05,2020</p>
    </div>
    <div class="NB3-Rectangle">
      <p class="NB1-Name">NB1200345</p>
      <p class="NB3-Fee">Contribution Fee</p>
      <p class="NB3-USD">USD $ 20,000.00</p>
      <p class="NB3-Paydate">Pay date: Jan 05,2020</p>
    </div>
    <div class="NB4-Rectangle">
      <p class="NB1-Name">NB1200348</p>
      <p class="NB4-Fee">Contribution Fee</p>
      <p class="NB4-USD">USD $ 1,000.00</p>
      <p class="NB4-Paydate">Pay date: Dec 05,2019</p>
    </div>
    <div class="NB5-Rectangle">
      <p class="NB1-Name">NB1200048</p>
      <p class="NB5-Fee">Contribution Fee</p>
      <p class="NB5-USD">USD $ 5,000.00</p>
      <p class="NB5-Paydate">Pay date: Dec 05,2019</p>
    </div>
    <div class="space-Rectangle">
    </div>

    <div class="Button-Rectangle">
      <span class="Oval-one">5</span>
      <span class="Oval-two">6</span>
      <span class="Button-Number">2</span>
      <span class="Oval-three">7</span>
      <span class="Oval-four">8</span>
    </div>
    <div class="Button-Rectangle2">
      <span class="Button-Number2">10</span>
      <span class="Showing">Showing 1-10 of 58</span>
    </div>
      

      





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
  .css__RWD{
    width:100%;
    padding:0px 2rem;
    .Commission-Rectangle{
    width: 184px;
    height: 40px;
    padding-top:20px;
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
      padding-top:5px;
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
  }

//搜尋的小圖案
  .Magnifier-Rectangle{
    width: 24px;
    height: 24px;
    margin-top:60px;
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
    margin-top:0px;
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

  //中間
  .NB1-Rectangle {
    width: 327px;
    height: 120px;
    box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
    margin-top:20px;
  }
  .NB2-Rectangle {
    width: 327px;
    height: 119px;
    box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
    margin-top:20px;
  }
  .NB3-Rectangle {
    width: 327px;
    height: 119px;
    box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
    margin-top:20px;
  }
  .NB4-Rectangle {
    width: 327px;
    height: 119px;
    box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
    margin-top:20px;
  }
  .NB5-Rectangle {
    width: 327px;
    height: 119px;
    box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
    margin-top:20px;
  }
  .space-Rectangle {
    width: 327px;
    height: 32px;
    box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
  }
    //NB1內容
  .NB1-Name{
    width: 124px;
    height: 17px;
    opacity: 0.9;
    font-family: HelveticaNeue;
    font-size: 17px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.06;
    letter-spacing: normal;
    color: #414042;
  }
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
    .NB2-Name{
      width: 124px;
      height: 17px;
      opacity: 0.9;
      font-family: HelveticaNeue;
      font-size: 17px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.06;
      letter-spacing: normal;
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
    .NB3-Name{
      width: 124px;
      height: 17px;
      opacity: 0.9;
      font-family: HelveticaNeue;
      font-size: 17px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.06;
      letter-spacing: normal;
      color: #414042;
    }
    .NB3-Fee{
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
    .NB3-USD{
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
    .NB3-Paydate{
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
    .NB4-Name{
      width: 124px;
      height: 17px;
      opacity: 0.9;
      font-family: HelveticaNeue;
      font-size: 17px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.06;
      letter-spacing: normal;
      color: #414042;
    }
    .NB4-Fee{
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
    .NB4-USD{
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
    .NB4-Paydate{
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
    .NB5-Name{
      width: 124px;
      height: 17px;
      opacity: 0.9;
      font-family: HelveticaNeue;
      font-size: 17px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.06;
      letter-spacing: normal;
      color: #414042;
    }
    .NB5-Fee{
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
    .NB5-USD{
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
    .NB5-Paydate{
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

    .Button-Rectangle{
      width: 500px;
      height: 32px;
    }
    .Oval-one {
      width: 33px;
      height: 32px;
      background-color: #ebedee;
    }
    .Oval-two {
      width: 33px;
      height: 32px;
      background-color: #ebedee;
    }
    .Oval-three {
      width: 33px;
      height: 32px;
      background-color: #ebedee;
    }
    .Oval-four {
      width: 33px;
      height: 32px;
      background-color: #ebedee;
    }
    //綠色數字
    .Button-Number{
      width: 67px;
      height: 32px;
      border-radius: 17px;
      background-color: #9aefaa;
    }
    .Button-Rectangle2{
      width: 500px;
      height: 32px;
    }
    .Button-Number2{
      width: 375px;
      height: 32px;
      background-color: #ebedee;
    }

    .Showing {
      width: 116px;
      height: 32px;
      font-family: Inter;
      font-size: 12px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.2px;
      color: #4a4a4a;
    }





@media (min-width: 375px) {
  
}
@media (min-width: 768px) {

}
@media (min-width: 1440px) {

}
  }

  


</style>