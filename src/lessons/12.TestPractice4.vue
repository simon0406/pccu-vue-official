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
        <span class="Remuneration-USD--Tablet">Remuneration(SUSD)</span>
        <span class="base-SUSD--Tablet"><img src="@/assets/facebook.png"></span>
      </div>
      <div class="Holder-Rectangle--Tablet">
        <span class="Account-Holder--Tablet">Account Holder</span>
        <span class="Fee-Type--Tablet">Fee Type</span>
        <span class="base-Holder--Tablet"><img src="@/assets/facebook.png"></span>
        <span class="Pay-Date--Tablet">Pay Date</span>
        <span class="Status--Tablet">Status</span>
        <span class="base-Status--Tablet"><img src="@/assets/facebook.png"></span>
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
        <span class="NB-Fee--Tablet NB1-Fee--Tablet">Contribution Fee</span>
        <span class="NB-USD--Tablet NB1-USD--Tablet">$000,000,000.000000</span>
        <p class="NB-Date--Tablet NB1-Date--Tablet">Jan 05,2020</p>
        <span class="NB-Pending NB1-Pending--Tablet">Pending</span>
      </div>
      <div class="NB-Rectangle--Tablet NB2-Rectangle--Tablet">
        <span class="NB-Picture--Tablet NB2-Picture--Tablet"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name--Tablet NB2-Name--Tablet">NB1200209</span>
        <p class="NB-Cristen--Tablet NB2-Name--Tablet">Abcdefg Hijkl Mnopqrs TuvwxYz</p>
        <span class="NB-Fee--Tablet NB2-Fee--Tablet">Advisor Service Fee</span>
        <span class="NB-USD--Tablet NB2-USD--Tablet">$342.98</span>
        <p class="NB-Date--Tablet NB2-Date--Tablet">Jan 05,2020</p>
        <span class="NB-Pending NB2-Pending--Tablet">Pending</span>
      </div>
      <div class="NB-Rectangle--Tablet NB3-Rectangle--Tablet">
        <span class="NB-Picture--Tablet NB3-Picture--Tablet"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name--Tablet NB3-Name--Tablet">NB1200345</span>
        <p class="NB-Cristen--Tablet NB3-Name--Tablet">Michael Chang</p>
        <span class="NB-Fee--Tablet NB3-Fee--Tablet">One-off Advisor Fee</span>
        <span class="NB-USD--Tablet NB3-USD--Tablet">$20,000.00</span>
        <p class="NB-Date--Tablet NB3-Date--Tablet">Jan 05,2020</p>
        <span class="NB-Pending NB3-Pending--Tablet">Pending</span>
      </div>
      <div class="NB-Rectangle--Tablet NB4-Rectangle--Tablet">
        <span class="NB-Picture--Tablet NB4-Picture--Tablet"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name--Tablet NB4-Name--Tablet">NB1200348</span>
        <p class="NB-Cristen--Tablet NB4-Name--Tablet">Josh Cheung, Lucie Kwan, Chien Hong</p>
        <span class="NB-Fee--Tablet NB4-Fee--Tablet">Establishment Fee</span>
        <span class="NB-USD--Tablet NB4-USD--Tablet">$1,000.00</span>
        <p class="NB-Date--Tablet NB4-Date--Tablet">Jan 05,2020</p>
        <span class="NB-Pending NB4-Pending--Tablet">Peceived</span>
      </div>
      <div class="NB-Rectangle--Tablet NB5-Rectangle--Tablet">
        <span class="NB-Picture--Tablet NB5-Picture--Tablet"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name--Tablet NB5-Name--Tablet">NB5200202</span>
        <p class="NB-Cristen--Tablet NB5-Name--Tablet">Frank Collyn Woods Company</p>
        <span class="NB-Fee--Tablet NB5-Fee--Tablet">Research Fee</span>
        <span class="NB-USD--Tablet NB5-USD--Tablet">$5,000.00</span>
        <p class="NB-Date--Tablet NB5-Date--Tablet">Jan 05,2019</p>
        <span class="NB-Pending NB5-Pending--Tablet">Received</span>
      </div>
      <div class="space-Rectangle">
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
    .base--Tablet {
      display: none;
    }
    .Remuneration-USD--Tablet {
      display:none;
    }
    //中間
    .NB-Rectangle {
      height: 120px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      position: relative;
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




    .NB-Cristen--Tablet {
      display:none;
    }
    
    .NB-Rectangle--Tablet {
      display: none;
    }
    .NB-Picture--Tablet{
      display: none;
    }
    //NB1內容
    .NB-Name--Tablet{
      display: none;
    }
    .Holder-Rectangle--Tablet{
      display:none;
    }
    .Account-Holder--Tablet {
      display:none;
    }
    .Fee-Type--Tablet {
      display:none;
    }
    .base-SUSD--Tablet{
      display:none;
    }
    .base-Holder--Tablet {
      display:none;
    }
    .base-Status--Tablet {
      display:none;
    }
    .Pay-Date--Tablet {
      display:none;
    }
    .Status--Tablet {
      display:none;
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
    
    

    .Account-Rectangle{
      margin-top:50px;
      position: relative;
    }
    .Remuneration-USD--Tablet {
      width: 136px;
      height: 16px;
      font-family: HelveticaNeue;
      font-size: 13px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: right;
      color: #414042;
      position: absolute;
      right:200px;
      display:block;
    }
    .Holder-Rectangle--Tablet{
      position: relative;
      margin-top:-10px;
      display: block;
    }
    .Account-Holder--Tablet {
      width: 104px;
      height: 14px;
      opacity: 0.35;
      font-family: HelveticaNeue;
      font-size: 12px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.33;
      letter-spacing: -0.2px;
      color: #414042;
      position: absolute;
      display:block;
    }
    .Fee-Type--Tablet {
      width: 57px;
      height: 16px;
      font-family: HelveticaNeue;
      font-size: 13px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.2px;
      color: #414042;
      position: absolute;
      right:400px;
      display:block;
    }
    .base-SUSD--Tablet{
      height: 14px;
      object-fit: contain;
      position: absolute;
      right:180px;
      display:block;
    }
    .base-Holder--Tablet {
      height: 14px;
      object-fit: contain;
      position: absolute;
      padding-left: 100px;
      display:block;
    }
    .base-Status--Tablet {
      height: 14px;
      object-fit: contain;
      position: absolute;
      right:0px;
      display:block;
    }
    .Pay-Date--Tablet {
      width: 104px;
      height: 14px;
      opacity: 0.4;
      font-family: HelveticaNeue;
      font-size: 12px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: right;
      color: #414042;
      position: absolute;
      right:200px;
      display:block;
    }
    .Status--Tablet {
      width: 43px;
      height: 16px;
      font-family: HelveticaNeue;
      font-size: 13px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.2px;
      color: #414042;
      position: absolute;
      right:10px;
      display:block;
    }


    .NB-Rectangle--Tablet {
      height: 50px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      position: relative;
      display: block;
      margin-top:20px;
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
      position: absolute;
      display:block;
    }
    
    .NB-Fee--Tablet {
      height: 16px;
      font-family: HelveticaNeue;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.14;
      letter-spacing: normal;
      color: #414042;
      position: absolute;
      right:363px;
      margin-top:22px;
      display:block;
    }
    .NB-USD--Tablet{
      height: 16px;
      opacity: 0.9;
      font-family: HelveticaNeue;
      font-size: 14px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.3px;
      text-align: right;
      color: #414042;
      position: absolute;
      right:180px;
      margin-top:10px;
      display:block;
    }
    .NB-Date--Tablet{
      height: 16px;
      opacity: 0.5;
      font-family: HelveticaNeue;
      font-size: 13px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: right;
      color: #414042;
      position: absolute;
      right:180px;
      margin-top:40px;
      display:block;
    }

    .NB-Pending {
      margin-top:10px;
    }










    .NB-Rectangle {
      display:none;
    }
    
    .space-Rectangle {
      display: none;
    }
    .NB-Picture--Tablet{
      width: 16px;
      height: 16px;
      object-fit: contain;
      position: absolute;
      padding-top: 10px;
      padding-left:5px;
      display: block;      
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
    





  }
  @media (min-width: 1440px) {

  }
}

  


</style>