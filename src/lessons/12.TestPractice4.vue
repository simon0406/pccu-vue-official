<template>
  <div class="pb-5">
    <div class="css__RWD">
      <div class="Commission-Rectangle">
        <div class="My-Commission">
          <span>MyCommission</span>
          <span class="Filter-Rectangle">
            <span class="Filter">Filter</span>
            <span class="Filter-picture"><img src="@/assets/facebook.png"></span>
          </span>
          <div class="Recent-3-months">
          <p>Recent-3-months</p>
          </div>
        </div>
      </div>
      
      <div class="MagnifierRectangle--mobile">
        <span class="Magnifier--mobile"><img src="@/assets/test2.png"></span>
      </div>
      

      <div class="Account-Rectangle">
        <span class="Account-Number">Account Number</span>
        <span class="base"><img src="@/assets/facebook.png"></span>
      </div>

      <div class="NB-Rectangle NB1-Rectangle">
        <span class="NB-Picture NB1-Picture"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name NB1-Name">NB1200202</span>
        <span class="NB-Pending NB1-Pending">Pending</span>
        <p class="NB-Fee NB1-Fee">Contribution Fee</p>
        <p class="NB-USD NB1-USD">USD $ 000,000,000,000.000000</p>
        <p class="NB-Paydate NB1-Paydate">Pay date: Jan 05,2020</p>
      </div>
      <div class="NB-Rectangle NB2-Rectangle">
        <span class="NB-Picture NB2-Picture"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name NB2-Name">NB1200209</span>
        <span class="NB-Pending NB2-Pending">Pending</span>
        <p class="NB-Fee NB2-Fee">Contribution Fee</p>
        <p class="NB-USD NB2-USD">USD $ 342.98</p>
        <p class="NB-Paydate NB2-Paydate">Pay date: Jan 05,2020</p>
      </div>
      <div class="NB-Rectangle NB3-Rectangle">
        <span class="NB-Picture NB3-Picture"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name NB3-Name">NB1200345</span>
        <span class="NB-Pending NB3-Pending">Peceived</span>
        <p class="NB-Fee NB3-Fee">Contribution Fee</p>
        <p class="NB-USD NB3-USD">USD $ 20,000.00</p>
        <p class="NB-Paydate NB3-Paydate">Pay date: Jan 05,2020</p>
      </div>
      <div class="NB-Rectangle NB4-Rectangle">
        <span class="NB-Picture NB4-Picture"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name NB4-Name">NB1200348</span>
        <span class="NB-Pending NB4-Pending">Peceived</span>
        <p class="NB-Fee NB4-Fee">Contribution Fee</p>
        <p class="NB-USD NB4-USD">USD $ 1,000.00</p>
        <p class="NB-Paydate NB4-Paydate">Pay date: Dec 05,2019</p>
      </div>
      <div class="NB-Rectangle NB5-Rectangle">
        <span class="NB-Picture NB5-Picture"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name NB5-Name">NB1200048</span>
        <span class="NB-Pending NB5-Pending">Peceived</span>
        <p class="NB-Fee NB5-Fee">Contribution Fee</p>
        <p class="NB-USD NB5-USD">USD $ 5,000.00</p>
        <p class="NB-Paydate NB5-Paydate">Pay date: Dec 05,2019</p>
      </div>
      <div class="space-Rectangle">
      </div>

      <div class="NB-Rectangle--Tablet NB1-Rectangle--Tablet">
        <span class="NB-Picture--Tablet NB1-Picture--Tablet"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name--Tablet NB1-Name--Tablet">NB1200202</span>
        <p class="NB-Cristen--Tablet NB1-Name--Tablet">Cristen Michaelson</p>
      </div>




      <div class="Button-Rectangle">
        <span class="Oval-one"><img src="@/assets/facebook.png"></span>
        <span class="Oval-two"><img src="@/assets/facebook.png"></span>
        <span class="Button-Number">2</span>
        <span class="Oval-three"><img src="@/assets/facebook.png"></span>
        <span class="Oval-four"><img src="@/assets/facebook.png"></span>
      </div>
      <div class="Button-Rectangle2">
        <span class="Button-Number2"><img src="@/assets/facebook.png"></span>
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
  .Commission-Rectangle{
      height: 40px;
      padding-top:20px;
      position: relative;
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
      width:82px;
      height: 40px;
      border-radius: 4px;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
      border: solid 1px rgba(151, 151, 151, 0.2);
      background-color: #ffffff;
      position: absolute;right:0px;    
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
      margin-left:15px;
      margin-top: 10px;
      position: absolute;      
    }
    .Filter-picture {
      height: 16px;
      object-fit: contain;
      margin-left:55px;
      margin-top: 10px;
      position: absolute;
    }
    //搜尋的小圖案
    
    .MagnifierRectangle--mobile{
      height: 24px;
      margin-top:60px;
      display:block;
    }
    .MagnifierRectangle--mobile2{
      height: 24px;
      margin-top:60px;
      display:none;
    }
    
    .Magnifier--mobile {
      height: 24px;
      object-fit: contain;
      display:block;
    }
    .Magnifier--mobile2 {
      height: 24px;
      object-fit: contain;
      display:none;
    }
    
    
    //Account Number+圖
    .Account-Rectangle{
      height: 32px;
      margin-top:0px;
      position: relative;
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
        position: absolute;
      }
      .base {
        height: 14px;
        object-fit: contain;
        position: absolute;
        padding-left: 100px;
      }
    }
    //中間
    .NB-Rectangle {
      height: 120px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      position: relative;
    }
    .NB-Rectangle--Tablet {
      height: 120px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      position: relative;
      display: none;
    }
    .space-Rectangle {
      height: 32px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
    }
    .NB-Picture{
      width: 16px;
      height: 16px;
      object-fit: contain;
      position: absolute;
      padding-top: 10px;
      padding-left:5px;
    }
    .NB-Picture--Tablet{
      width: 16px;
      height: 16px;
      object-fit: contain;
      position: absolute;
      padding-top: 10px;
      padding-left:5px;
      display: none;
    }
    //NB1內容
    .NB-Name--Tablet{
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
      position:absolute;
      padding-top:10px;
      padding-left:30px;
      display: none;
    }
    .NB-Name{
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
      position:absolute;
      padding-top:10px;
      padding-left:30px;
    }
    .NB-Fee{
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
      padding-top:40px;
      padding-left:30px;
    }
    .NB-USD{
      height: 18px;
      font-family: HelveticaNeue;
      font-size: 15px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.07;
      letter-spacing: normal;
      color: #414042;
      padding-top:7px;
      padding-left:30px;
    }
    .NB-Paydate{
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
      margin-left:30px;
    }
    .NB-Pending {
        width: 49px;
        height: 16px;
        opacity: 0.5;
        font-family: HelveticaNeue;
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.31;
        letter-spacing: normal;
        text-align: right;
        color: #414042;
        position: absolute;
        right:0px;
        padding-top:10px;
    }
    .NB-Cristen--Tablet {
      width: 255px;
      height: 16px;
      opacity: 0.4;
      font-family: HelveticaNeue;
      font-size: 13px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.08;
      letter-spacing: normal;
      color: #414042;
      display:none;
    }
    .Button-Rectangle{
        height: 32px;
        position: relative;
    }
    .Oval-one {
        height: 32px;
        background-color: #ebedee;
        position: absolute;
        right:50px;
    }
    .Oval-two {
        height: 32px;
        background-color: #ebedee;
        position: absolute;
        right:80px;
    }
    .Oval-three {
        height: 32px;
        background-color: #ebedee;
        position: absolute;
        right:207px;
    }
    .Oval-four {
        height: 32px;
        background-color: #ebedee;
        position: absolute;
        right:237px;
    }
    //綠色數字
    .Button-Number{
        width:67px;
        height: 32px;
        border-radius: 17px;
        background-color: #9aefaa;
        position:absolute;
        right:110px;
    }
    .Button-Rectangle2{
        height: 32px;
        position: relative;
    }
    .Button-Number2{
        height: 32px;
        background-color: #ebedee;
        position: absolute;
        right:237px;
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
        position: absolute;
        right:110px;
    }
  @media (min-width: 375px) {
  }
  @media (min-width: 768px) {
    
    .MagnifierRectangle--mobile{      
      display:none;
    }
    .MagnifierRectangle--mobile2{
      display:block;
    }
    .Magnifier--mobile {
      display:none;
    }
    .Magnifier--mobile2 {
      display:block;
    }
    
    .NB-Rectangle--Tablet {
      height: 120px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      position: relative;
      display: block;
    }
    .NB-Cristen--Tablet {
      width: 255px;
      height: 16px;
      opacity: 0.4;
      font-family: HelveticaNeue;
      font-size: 13px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.08;
      letter-spacing: normal;
      color: #414042;
      padding-top:40px;
      padding-left:5px;
      display:block;
    }
    
    

    .NB-Rectangle {
      display:none;
    }
    .NB-Rectangle--Tablet {
      height: 120px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      position: relative;
      display: block;
    }
    .space-Rectangle {
      display: none;
    }
    .NB-Picture--Tablet{
      display: block;      
    }
    //NB1內容
    .NB-Name--Tablet{
      display: block;
    }
    .NB-Picture{
      display:none;
    }
    .NB-Fee{
      display: none;
    }
    .NB-USD{
      display: none;
    }
    .NB-Paydate{
      display: none;
    }
    .NB-Pending {
      display: none;
    }





  }
  @media (min-width: 1440px) {

  }
}

  


</style>