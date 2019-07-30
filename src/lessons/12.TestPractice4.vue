<template>
  <div class="pb-5">
    <div class="css__RWD">
      <div class="Commission-Rectangle">
        <div class="My-Commission">
          <span>MyCommission</span>
          <span class="Filter-Rectangle">
            <span class="Filter">Filter</span>
            <span class="Filter-picture">1</span>
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
  padding:0 2rem;
  @media (min-width: 375px) {
    .Commission-Rectangle{
      height: 40px;
      padding-top:20px;
      //將title內容移出Commission-Rectangle
    }
    .My-Commission {
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
      height: 40px;
      border-radius: 4px;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
      border: solid 1px rgba(151, 151, 151, 0.2);
      background-color: #ffffff;
    }
    .Filter{
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
    .Filter-picture {
      height: 16px;
      object-fit: contain;
    }

  //搜尋的小圖案
    .Magnifier-Rectangle{
      height: 24px;
      margin-top:60px;
      .Magnifier---simple-line-icons {
        height: 24px;
        object-fit: contain;
      }
    }

      //Account Number+圖
    .Account-Rectangle{
      height: 32px;
      margin-top:0px;
      .Account-Number {
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
        height: 14px;
        object-fit: contain;
      }
    }

    //中間
    
    .NB1-Rectangle {
      height: 120px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      margin-top:20px;
    }
    .NB2-Rectangle {
      height: 119px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      margin-top:20px;
    }
    .NB3-Rectangle {
      height: 119px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      margin-top:20px;
    }
    .NB4-Rectangle {
      height: 119px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      margin-top:20px;
    }
    .NB5-Rectangle {
      height: 119px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      margin-top:20px;
    }
    .space-Rectangle {
      height: 32px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
    }

      //NB1內容
    .NB1-Name{
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
        height: 32px;
      }
      .Oval-one {
        height: 32px;
        background-color: #ebedee;
      }
      .Oval-two {
        height: 32px;
        background-color: #ebedee;
      }
      .Oval-three {
        height: 32px;
        background-color: #ebedee;
      }
      .Oval-four {
        height: 32px;
        background-color: #ebedee;
      }
      //綠色數字
      .Button-Number{
        height: 32px;
        border-radius: 17px;
        background-color: #9aefaa;
      }
      .Button-Rectangle2{
        height: 32px;
      }
      .Button-Number2{
        height: 32px;
        background-color: #ebedee;
      }

      .Showing {
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
  }
  @media (min-width: 768px) {

  }
  @media (min-width: 1440px) {

  }
}

  


</style>