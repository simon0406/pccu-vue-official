<template>
  <div class="pb-5">
    <div class="css__RWD">
      <!--Mobile-->
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

      <!--Tablet-->
      <div class="Commission-Rectangle--Tablet">
        <div class="My-Commission--Tablet">
          <span>MyCommission</span>
          <span class="Magnifier--Tablet"><img src="@/assets/test2.png"></span>
          <span class="Filter-Rectangle--Tablet">
            <span class="Filter--Tablet">Filter</span>
            <span class="Filter-picture--Tablet"><img src="@/assets/facebook.png"></span>
          </span>
          <div class="Recent-3-months--Tablet">
          <p>Recent-3-months</p>
          </div>
        </div>
      </div>

      <!--Mobile-->
      <div class="MagnifierRectangle">
        <span class="Magnifier"><img src="@/assets/test2.png"></span>
      </div>
      
      <!--Mobile+Tablet-->
      <div class="Account-Rectangle">
        <span class="Account-Number">Account Number</span>
        <span class="base"><img src="@/assets/facebook.png"></span>
        <span class="Remuneration-USD--Tablet">Remuneration(SUSD)</span>
        <span class="base-SUSD--Tablet"><img src="@/assets/facebook.png"></span>
      </div>
      <!--Desktop-->
      <div class="Account-Rectangle--Desktop">
        <span class="Account-Number">Account Number</span>
        <span class="base"><img src="@/assets/facebook.png"></span>
      </div>


      <!--Tablet-->
      <div class="Holder-Rectangle--Tablet">
        <span class="Account-Holder--Tablet">Account Holder</span>
        <span class="Fee-Type--Tablet">Fee Type</span>
        <span class="base-Fee--Tablet"><img src="@/assets/facebook.png"></span>
        <span class="Pay-Date--Tablet">Pay Date</span>
        <span class="Status--Tablet">Status</span>
        <span class="base-Status--Tablet"><img src="@/assets/facebook.png"></span>
      </div>
      <!--Desktop-->
      <div class="Holder-Rectangle--Desktop">
        <span class="Account-Holder--Desktop">Account Holder</span>
        <span class="Fee-Type--Desktop">Fee Type</span>
        <span class="base-Fee--Desktop"><img src="@/assets/facebook.png"></span>
        <span class="Remuneration-USD--Desktop">Remuneration(SUSD)</span>
        <span class="base-SUSD--Desktop"><img src="@/assets/facebook.png"></span>
        <span class="Pay-Date--Desktop">Pay Date</span>
        <span class="Status--Desktop">Status</span>
        <span class="base-Status--Desktop"><img src="@/assets/facebook.png"></span>
      </div>
      <!--Mobile-->
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

      <!--Tablet-->
      <div class="NB-Rectangle--Tablet NB1-Rectangle--Tablet">
        <span class="NB-Picture--Tablet NB1-Picture--Tablet"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name--Tablet NB1-Name--Tablet">NB1200202</span>
        <p class="NB-Cristen--Tablet NB1-Name--Tablet">Cristen Michaelson</p>
        <span class="NB-Fee--Tablet NB1-Fee--Tablet">Contribution Fee</span>
        <span class="NB-USD--Tablet NB1-USD--Tablet">$000,000,000.000000</span>
        <p class="NB-Date--Tablet NB1-Date--Tablet">Jan 05,2020</p>
        <span class="NB-Pending--Tablet NB1-Pending--Tablet">Pending</span>
      </div>
      <div class="NB-Rectangle--Tablet NB2-Rectangle--Tablet">
        <span class="NB-Picture--Tablet NB2-Picture--Tablet"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name--Tablet NB2-Name--Tablet">NB1200209</span>
        <p class="NB-Cristen--Tablet NB2-Name--Tablet">Abcdefg Hijkl Mnopqrs TuvwxYz</p>
        <span class="NB-Fee--Tablet NB2-Fee--Tablet">Advisor Service Fee</span>
        <span class="NB-USD--Tablet NB2-USD--Tablet">$342.98</span>
        <p class="NB-Date--Tablet NB2-Date--Tablet">Jan 05,2020</p>
        <span class="NB-Pending--Tablet NB2-Pending--Tablet">Pending</span>
      </div>
      <div class="NB-Rectangle--Tablet NB3-Rectangle--Tablet">
        <span class="NB-Picture--Tablet NB3-Picture--Tablet"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name--Tablet NB3-Name--Tablet">NB1200345</span>
        <p class="NB-Cristen--Tablet NB3-Name--Tablet">Michael Chang</p>
        <span class="NB-Fee--Tablet NB3-Fee--Tablet">One-off Advisor Fee</span>
        <span class="NB-USD--Tablet NB3-USD--Tablet">$20,000.00</span>
        <p class="NB-Date--Tablet NB3-Date--Tablet">Jan 05,2020</p>
        <span class="NB-Pending--Tablet NB3-Pending--Tablet">Pending</span>
      </div>
      <div class="NB-Rectangle--Tablet NB4-Rectangle--Tablet">
        <span class="NB-Picture--Tablet NB4-Picture--Tablet"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name--Tablet NB4-Name--Tablet">NB1200348</span>
        <p class="NB-Cristen--Tablet NB4-Name--Tablet">Josh Cheung, Lucie Kwan, Chien Hong</p>
        <span class="NB-Fee--Tablet NB4-Fee--Tablet">Establishment Fee</span>
        <span class="NB-USD--Tablet NB4-USD--Tablet">$1,000.00</span>
        <p class="NB-Date--Tablet NB4-Date--Tablet">Jan 05,2020</p>
        <span class="NB-Pending--Tablet NB4-Pending--Tablet">Peceived</span>
      </div>
      <div class="NB-Rectangle--Tablet NB5-Rectangle--Tablet">
        <span class="NB-Picture--Tablet NB5-Picture--Tablet"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name--Tablet NB5-Name--Tablet">NB5200202</span>
        <p class="NB-Cristen--Tablet NB5-Name--Tablet">Frank Collyn Woods Company</p>
        <span class="NB-Fee--Tablet NB5-Fee--Tablet">Research Fee</span>
        <span class="NB-USD--Tablet NB5-USD--Tablet">$5,000.00</span>
        <p class="NB-Date--Tablet NB5-Date--Tablet">Jan 05,2019</p>
        <span class="NB-Pending--Tablet NB5-Pending--Tablet">Received</span>
      </div>
      <div class="space-Rectangle--Tablet">
      </div>

      <!--Desktop-->
      <div class="NB-Rectangle--Desktop NB1-Rectangle--Desktop">
        <span class="NB-Picture--Desktop NB1-Picture--Desktop"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name--Desktop NB1-Name--Desktop">NB1200202</span>
        <p class="NB-Cristen--Desktop NB1-Name--Desktop">Cristen Michaelson</p>
        <span class="NB-Fee--Desktop NB1-Fee--Desktop">Contribution Fee</span>
        <span class="NB-USD--Desktop NB1-USD--Desktop">$000,000,000.000000</span>
        <span class="NB-Date--Desktop NB1-Date--Desktop">Jan 05,2020</span>
        <span class="NB-Pending--Desktop NB1-Pending--Desktop">Pending</span>
      </div>
      <div class="NB-Rectangle--Desktop NB2-Rectangle--Desktop">
        <span class="NB-Picture--Desktop NB2-Picture--Desktop"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name--Desktop NB2-Name--Desktop">NB1200209</span>
        <p class="NB-Cristen--Desktop NB2-Name--Desktop">Abcdefg Hijkl Mnopqrs TuvwxYz</p>
        <span class="NB-Fee--Desktop NB2-Fee--Desktop">Advisor Service Fee</span>
        <span class="NB-USD--Desktop NB2-USD--Desktop">$342.98</span>
        <p class="NB-Date--Desktop NB2-Date--Desktop">Jan 05,2020</p>
        <span class="NB-Pending--Desktop NB2-Pending--Desktop">Pending</span>
      </div>
      <div class="NB-Rectangle--Desktop NB3-Rectangle--Desktop">
        <span class="NB-Picture--Desktop NB3-Picture--Desktop"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name--Desktop NB3-Name--Desktop">NB1200345</span>
        <p class="NB-Cristen--Desktop NB3-Name--Desktop">Michael Chang</p>
        <span class="NB-Fee--Desktop NB3-Fee--Desktop">One-off Advisor Fee</span>
        <span class="NB-USD--Desktop NB3-USD--Desktop">$20,000.00</span>
        <p class="NB-Date--Desktop NB3-Date--Desktop">Jan 05,2020</p>
        <span class="NB-Pending--Desktop NB3-Pending--Desktop">Pending</span>
      </div>
      <div class="NB-Rectangle--Desktop NB4-Rectangle--Desktop">
        <span class="NB-Picture--Desktop NB4-Picture--Desktop"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name--Desktop NB4-Name--Desktop">NB1200348</span>
        <p class="NB-Cristen--Desktop NB4-Name--Desktop">Josh Cheung, Lucie Kwan, Chien Hong</p>
        <span class="NB-Fee--Desktop NB4-Fee--Desktop">Establishment Fee</span>
        <span class="NB-USD--Desktop NB4-USD--Desktop">$1,000.00</span>
        <p class="NB-Date--Desktop NB4-Date--Desktop">Jan 05,2020</p>
        <span class="NB-Pending--Desktop NB4-Pending--Desktop">Peceived</span>
      </div>
      <div class="NB-Rectangle--Desktop NB5-Rectangle--Desktop">
        <span class="NB-Picture--Desktop NB5-Picture--Desktop"><img src="@/assets/facebook.png"></span>
        <span class="NB-Name--Desktop NB5-Name--Desktop">NB5200202</span>
        <p class="NB-Cristen--Desktop NB5-Name--Desktop">Frank Collyn Woods Company</p>
        <span class="NB-Fee--Desktop NB5-Fee--Desktop">Research Fee</span>
        <span class="NB-USD--Desktop NB5-USD--Desktop">$5,000.00</span>
        <p class="NB-Date--Desktop NB5-Date--Desktop">Jan 05,2019</p>
        <span class="NB-Pending--Desktop NB5-Pending--Desktop">Received</span>
      </div>
      <div class="space-Rectangle--Desktop">
      </div>




      <!--mobile-->
      <div class="Button-Rectangle">
        <span class="Oval-one"><img src="@/assets/test3.jpg"></span>
        <span class="Oval-two"><img src="@/assets/test3.jpg"></span>
        <span class="Button-Number">2</span>
        <span class="Oval-three"><img src="@/assets/test3.jpg"></span>
        <span class="Oval-four"><img src="@/assets/test3.jpg"></span>
      </div>
      <div class="Button-Rectangle2">
        <span class="Button-Number2"><img src="@/assets/test3.jpg"></span>
        <span class="Showing">Showing 1-10 of 58</span>
      </div>
      <!--Tablet-->
      <div class="Button-Rectangle--Tablet">
        <span class="EXPORT--Tablet">EXPORT</span>
        <span class="Oval-one"><img src="@/assets/test3.jpg"></span>
        <span class="Oval-two"><img src="@/assets/test3.jpg"></span>
        <span class="Button-Number">2</span>
        <span class="Oval-three"><img src="@/assets/test3.jpg"></span>
        <span class="Oval-four"><img src="@/assets/test3.jpg"></span>
        <span class="Button-Number2"><img src="@/assets/test3.jpg"></span>
        <span class="Showing">Showing 1-10 of 58</span>
      </div>
      <!--Desktop-->
      <div class="Button-Rectangle--Desktop">
        <span class="Oval-one"><img src="@/assets/test3.jpg"></span>
        <span class="Oval-two"><img src="@/assets/test3.jpg"></span>
        <span class="Oval-three">1</span>
        <span class="Button-Number--Desktop">2</span>
        <span class="Oval-four">3</span>
        <span class="Oval-five">4</span>
        <span class="Oval-six">5</span>
        <span class="Oval-seven">6</span>
        <span class="Oval-eight">7</span>
        <span class="Oval-nine">8</span>
        <span class="Oval-ten">9</span>
        <span class="Oval-eleven">10</span>
        <span class="Oval-twelve"><img src="@/assets/test3.jpg"></span>
        <span class="Oval-thirteen"><img src="@/assets/test3.jpg"></span>
        <span class="Oval-fourteen"><img src="@/assets/test3.jpg"></span>
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
    
    .MagnifierRectangle{
      height: 24px;
      margin-top:60px;
      display:block;
    }
    
    .Magnifier{
      height: 24px;
      object-fit: contain;
      display:block;
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
        display:block;
    }
    .Button-Rectangle{
        height: 32px;
        position: relative;
        display:block;
    }
    .Oval-one {
        height: 32px;
        position: absolute;
        right:50px;
    }
    .Oval-two {
        height: 32px;
        position: absolute;
        right:80px;
    }
    .Oval-three {
        height: 32px;
        position: absolute;
        right:207px;
    }
    .Oval-four {
        height: 32px;
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
        right:120px;
        text-align:center;
    }
    .Button-Rectangle2{
        height: 32px;
        position: relative;
        display:blcok;
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





    .Commission-Rectangle--Tablet{
      display:none;
    }
    .My-Commission--Tablet {
      display:none;
    }
    .Recent-3-months--Tablet {
      display:none;
    }
    .Filter-Rectangle--Tablet {
      display:none;
    }
    .Filter--Tablet{
      display:none;     
    }
    .Filter-picture--Tablet {
      display:none;
    }
    //搜尋的小圖案
    
    .Magnifier--Tablet{
      display:none;
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
    .base-Fee--Tablet {
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
    .space-Rectangle--Tablet{
      display:none;
    }
    .NB-Pending--Tablet{
      display:none;
    }
    .NB-Pending--Desktop{
      display:none;
    }
    .Fee-Type--Desktop{
      display:none;
    }
    .Remuneration-USD--Desktop{
      display:none;
    }
    .base-SUSD--Desktop{
      display:none; 
    }
    .base-Fee--Desktop{
      display:none;
    }
    .base-Status--Desktop{
      display:none;
    }
    .Pay-Date--Desktop{
      display:none;
    }
    .Status--Desktop{
      display:none;
    }
    .Account-Rectangle--Desktop{
      display:none;
    }
    .Holder-Rectangle--Desktop{
      display:none;
    }
    .NB-Rectangle--Desktop{
      display:none;
    }
    .NB-Cristen--Desktop{
      display:none;
    }
    .NB-Fee--Desktop{
      display:none;
    }
    .NB-USD--Desktop{
      display:none;
    }
    .NB-Date--Desktop{
      display:none;
    }
    .NB-Picture--Desktop{
      display:none;
    }
    .NB-Name--Desktop{
      display:none;
    }
    .space-Rectangle--Desktop{
      display:none;
    }
    .Account-Holder--Desktop{
      display:none;
    }
    
    .Button-Rectangle--Tablet{
      display:none;
    }
    .Button-Rectangle--Desktop{
      display:none;
    }




  @media (min-width: 375px) {
  }
  @media (min-width: 768px) {
    .Commission-Rectangle--Tablet{
      height: 40px;
      padding-top:20px;
      position: relative;
      display:block;
    }
    .My-Commission--Tablet {
      height: 28px;
      font-family: HelveticaNeue;
      font-size: 24px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      display:block;
    }
    .Recent-3-months--Tablet {
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
      display:block;
    }
    .Filter-Rectangle--Tablet {
      height: 40px;
      border-radius: 4px;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
      border: solid 1px rgba(151, 151, 151, 0.2);
      background-color: #ffffff;
      position: absolute;
      right:0px;    
      margin-top:-30px;
      display:block;
    }
    .Filter--Tablet{
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
      display:block;
    }
    .Filter-picture--Tablet {
      height: 16px;
      object-fit: contain;
      margin-left:55px;
      margin-top: 10px;
      position: absolute;
      display:block;
    }
    //搜尋的小圖案
    
    .Magnifier--Tablet{
      height: 24px;
      object-fit: contain;
      display:block;
      position: absolute;
      margin:-25px 0px 0px 160px;
    }


    .Account-Rectangle{
      margin-top:70px;
      position: relative;
    }
    .Remuneration-USD--Tablet {
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
      right:140px;
      display:block;
    }
    .Holder-Rectangle--Tablet{
      position: relative;
      margin-top:-10px;
      display: block;
    }
    .Account-Holder--Tablet {
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
      right:340px;
      display:block;
    }
    .base-SUSD--Tablet{
      height: 14px;
      object-fit: contain;
      position: absolute;
      right:120px;
      display:block;
    }
    .base-Fee--Tablet {
      height: 14px;
      object-fit: contain;
      position: absolute;
      right:330px;
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
      right:140px;
      display:block;
    }
    .Status--Tablet {
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
      right:303px;
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
      right:120px;
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
      right:120px;
      margin-top:40px;
      display:block;
    }
    .NB-Picture--Tablet{
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
    .NB-Pending--Tablet {
      height: 16px;
      opacity: 0.9;
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
      margin-top:10px;
      display: block;
    }
    .space-Rectangle--Tablet{
      margin-top:20px;
      height: 48px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      display:block;
    }

    .EXPORT--Tablet{
      height: 16px;
      font-family: HelveticaNeue;
      font-size: 13px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.08;
      letter-spacing: normal;
      color: #0043ff;
    }
    .Oval-one{
      position: absolute;
      right:220px;
    }
    .Oval-two{
      position: absolute;
      right:260px;
    }
    .Button-Number{
      position: absolute;
      right:295px;
    }
    .Oval-three{
      position: absolute;
      right:370px;
    }
    .Oval-four{
      position: absolute;
      right:410px;
    }
    .Button-Rectangle--Tablet{
        height: 32px;
        position: relative;
        display:block;
    }
    .Button-Number2{
      position: absolute;
      right:100px;
    }
    .Showing{
      position: absolute;
      right:0px;
    }





    .Commission-Rectangle{
      display:none;
    }
    .My-Commission {
      display:none;
    }
    .Recent-3-months {
      display:none;
    }
    .Filter-Rectangle {
      display:none;
    }
    .Filter{
      display:none;  
    }
    .Filter-picture {
      display:none;
    }
    //搜尋的小圖案
    
    .MagnifierRectangle{
      display:none;
    }
    
    .Magnifier{
      display:none;
    }

    .NB-Rectangle {
      display:none;
    }
    
    .space-Rectangle {
      display: none;
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
    .NB-Pending{
      display:none;
    }
    .NB-Pending--Desktop{
      display:none;
    }
    .Fee-Type--Desktop{
      display:none;
    }
    .Remuneration-USD--Desktop{
      display:none;
    }
    .base-SUSD--Desktop{
      display:none; 
    }
    .base-Fee--Desktop{
      display:none;
    }
    .base-Status--Desktop{
      display:none;
    }
    .Pay-Date--Desktop{
      display:none;
    }
    .Status--Desktop{
      display:none;
    }
    .Account-Rectangle--Desktop{
      display:none;
    }
    .Holder-Rectangle--Desktop{
      display:none;
    }
    .NB-Rectangle--Desktop{
      display:none;
    }
    .NB-Cristen--Desktop{
      display:none;
    }
    .NB-Fee--Desktop{
      display:none;
    }
    .NB-USD--Desktop{
      display:none;
    }
    .NB-Date--Desktop{
      display:none;
    }
    .NB-Picture--Desktop{
      display:none;
    }
    .NB-Name--Desktop{
      display:none;
    }
    .space-Rectangle--Desktop{
      display:none;
    }
    .Account-Holder--Desktop{
      display:none;
    }
    .Button-Rectangle{
      display: none;
    }
    .Button-Rectangle2{
      display: none;
    }
    .Button-Rectangle--Desktop{
      display:none;
    }
    




  }
  @media (min-width: 1440px) {
    
    .Fee-Type--Desktop {
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
      right:880px;
      display:block;
    }
    .Remuneration-USD--Desktop {
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
      right:430px;
      display:block;
    }
    .base-SUSD--Desktop{
      height: 14px;
      object-fit: contain;
      position: absolute;
      right:410px;
      display:block;
    }
    .base-Fee--Desktop {
      height: 14px;
      object-fit: contain;
      position: absolute;
      right:870px;
      display:block;
    }
    .base-Status--Desktop {
      height: 14px;
      object-fit: contain;
      position: absolute;
      right:0px;
      display:block;
    }
    .Pay-Date--Desktop {
      height: 14px;
      opacity: 0.9;
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
    .Status--Desktop {
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



    .Account-Rectangle--Desktop{
      height: 32px;
      margin-top:70px;
      position: relative;
      display: block;
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
        display: block;
      }
      .base {
        height: 14px;
        object-fit: contain;
        position: absolute;
        padding-left: 100px;
        display: block;
      }
    }
    .Holder-Rectangle--Desktop{
      position: relative;
      margin-top:-10px;
      display: block;
    }
    
    .NB-Rectangle--Desktop {
      height: 50px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      position: relative;
      display: block;
      margin-top:20px;
    }
    .NB-Cristen--Desktop {
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
    
    .NB-Fee--Desktop {
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
      right:873px;
      margin-top:22px;
      display:block;
    }
    .NB-USD--Desktop{
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
      right:435px;
      margin-top:22px;
      display:block;
    }
    .NB-Date--Desktop{
      height: 16px;
      opacity: 0.9;
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
      right:182px;
      margin-top:22px;
      display:block;
    }
    .NB-Picture--Desktop{
      height: 16px;
      object-fit: contain;
      position: absolute;
      padding-top: 10px;
      padding-left:5px;
      display: block;      
    }
    //NB1內容
    .NB-Name--Desktop{
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
    .NB-Pending--Desktop {
      height: 16px;
      opacity: 0.9;
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
      margin-top:10px;
      display: block;
    }
    .space-Rectangle--Desktop{
      margin-top:20px;
      height: 48px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      display:block;
    }
    .Account-Holder--Desktop {
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
    .Button-Rectangle--Desktop{
        height: 32px;
        position: relative;
        display:block;
    }
    .Oval-one {
        height: 32px;
        position: absolute;
        left:0px;
        z-index: 0;
    }
    .Oval-two {
        height: 32px;
        position: absolute;
        left:30px;
        z-index: 1;
    }
    .Oval-three {
        height: 32px;
        position: absolute;
        left:70px;
        z-index: 2;
    }
    .Button-Number--Desktop{
      position: absolute;
      width: 32px;
      height: 32px;
      background-color: #9aefaa;
      left:100px;
      z-index: 3;
    }
    .Oval-four{
      position: absolute;
      left:130px;
      z-index: 4;
    }
    .Oval-five {
        height: 32px;
        position: absolute;
        left:160px;
        z-index: 5;
    }
    .Oval-six {
        height: 32px;
        position: absolute;
        left:190px;
        z-index: 6;
    }
    .Oval-seven {
        height: 32px;
        position: absolute;
        left:220px;
        z-index: 7;
    }
    .Oval-eight {
        height: 32px;
        position: absolute;
        left:250px;
        z-index: 8;
    }
    .Oval-nine {
        height: 32px;
        position: absolute;
        left:280px;
        z-index: 9;
    }
    .Oval-ten {
        height: 32px;
        position: absolute;
        left:310px;
        z-index: 10;
    }
    .Oval-eleven {
        height: 32px;
        position: absolute;
        left:340px;
        z-index: 11;
    }
    .Oval-twelve {
        height: 32px;
        position: absolute;
        left:380px;
        z-index: 12;
    }
    .Oval-thirteen{
        height: 32px;
        position: absolute;
        left:410px;
        z-index: 13;
    }
    .Oval-fourteen{
        height: 32px;
        position: absolute;
        right:100px;
    }








    .Account-Rectangle{
      display: none;
    }
    .Holder-Rectangle--Tablet{
      display: none;
    }
    .NB-Rectangle--Tablet {
      display: none;
    }
    .NB-Cristen--Tablet {
      display: none;
    }
    
    .NB-Fee--Tablet {
      display: none;
    }
    .NB-USD--Tablet{
      display: none;
    }
    .NB-Date--Tablet{
      display: none;
    }
    .NB-Picture--Tablet{
      display: none;     
    }
    //NB1內容
    .NB-Name--Tablet{
      display: none;
    }
    .space-Rectangle--Tablet{
      display: none;
    }


    .Remuneration-USD--Tablet {
      display:none;
    }
    .Fee-Type--Tablet {
      display:none;
    }
    .base-SUSD--Tablet{
      display:none;
    }
    .base-Fee--Tablet {
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
    .Account-Holder--Tablet {
      display:none;
    }
    .NB-Pending{
      display: none;
    }
    .NB-Pending--Tablet{
      display: none;
    }

    .Button-Rectangle{
      display: none;
    }
    .Button-Rectangle2{
      display: none;
    }
    .Button-Rectangle--Tablet{
      display:none;
    }
    


  }
}

  


</style>