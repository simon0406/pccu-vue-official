<template>
  <div class="pb-5">
    <div class="css__RWD">
      <div class="Commission__Rectangle">
        <div class="MyCommission__header">
          <span>My Commission</span>
          <span class="Magnifier d-375-none"><img src="@/assets/test2.png"></span>
          <span class="Filter__Rectangle">
            <span class="Filter">Filter</span>
            <span class="Filter__picture"><img src="@/assets/facebook.png"></span>
          </span>
          <div class="Recent-3-months">
          <p>Recent 3 months</p>
          </div>
        </div>
      </div>
      <!--375-->
      <div class="MagnifierRectangle d-768-none">
        <span class="Magnifier"><img src="@/assets/test2.png"></span>
      </div>

      <div class="Account__Rectangle">
        <span class="Account__Number">Account Number</span>
        <span class="base"><img src="@/assets/facebook.png"></span>
        <span class="Remuneration__USD d-375-none d-1440-none">Remuneration($USD)</span>
        <span class="base__USD d-375-none d-1440-none"><img src="@/assets/facebook.png"></span>
      </div>
      
      <div class="Holder__Rectangle d-375-none">
        <span class="Account__Holder">Account Holder</span>
        <span class="Fee__Type">Fee Type</span>
        <span class="base__Fee"><img src="@/assets/facebook.png"></span>
        <span class="Remuneration__USD d-768-none">Remuneration($USD)</span>
        <span class="base__USD d-768-none"><img src="@/assets/facebook.png"></span>
        <span class="Pay__Date">Pay Date</span>
        <span class="base__PayDate d-768-none"><img src="@/assets/facebook.png"></span>
        <span class="Status">Status</span>
        <span class="base__Status"><img src="@/assets/facebook.png"></span>
      </div>

      <!--375-->
        <template v-for="number in 5">
          <div class="NB__Rectangle d-768-none d-1440-none" :key="number">
            <span class="NB__Picture"><img src="@/assets/facebook.png"></span>
            <span class="NB__Name">NB1200202</span>
            <span class="NB__Pending">Pending</span>
            <p class="NB__Fee">Contribution Fee</p>
            <p class="NB__USD">USD $ 000,000,000,000.000000</p>
            <p class="NB__Paydate">Pay date: Jan 05,2020</p>
          </div>
        </template>
        <div class="space__Rectangle d-768-none d-1440-none">
        </div>
      <!--768-->
        <template v-for="number in 5">
          <div class="NB__Rectangle d-375-none d-768-block d-1440-none" :key="number">
            <span class="NB__Picture"><img src="@/assets/facebook.png"></span>
            <span class="NB__Name">NB1200202</span>
            <p class="NB__Cristen">Cristen Michaelson</p>
            <span class="NB__Fee">Contribution Fee</span>
            <span class="NB__USD">$000,000,000.000000</span>
            <p class="NB__Date">Jan 05,2020</p>
            <span class="NB__Pending">Pending</span>
          </div>
        </template>
        <div class="space__Rectangle d-375-none d-768-block d-1440-none">
        </div>
      <!--1440-->
        <template v-for="number in 5">
          <div class="NB__Rectangle d-375-none d-768-none d-1440-block" :key="number">
            <span class="NB__Picture"><img src="@/assets/facebook.png"></span>
            <span class="NB__Name">NB1200202</span>
            <p class="NB__Cristen">Cristen Michaelson</p>
            <span class="NB__Fee">Contribution Fee</span>
            <span class="NB__USD">USD $000,000,000,000.000000</span>
            <span class="NB__Date">Jan 05,2020</span>
            <span class="NB__Pending">Pending</span>
          </div>
        </template>
        <div class="space__Rectangle d-375-none d-768-none d-1440-block">
        </div>
      <!--375-->
      <div class="Button__Rectangle d-768-none d-1440-none">
        <span class="Button__Rectangle__Change">
          <span class="Oval__one"><img src="@/assets/test3.jpg"></span>
          <span class="Oval__two"><img src="@/assets/test3.jpg"></span>
          <span class="Button__Number">2</span>
          <span class="Oval__three"><img src="@/assets/test3.jpg"></span>
          <span class="Oval__four"><img src="@/assets/test3.jpg"></span>
        </span>
      </div>
      <div class="Button__Rectangle2 d-768-none d-1440-none">
        <span class="Button__Rectangle2__Change">
          <span class="Button__Number2"><img src="@/assets/test3.jpg"></span>
          <span class="Showing">Showing 1-10 of 58</span>
        </span>
      </div>
      <!--768-->
      <div class="Button__Rectangle d-375-none d-1440-none">
        <span class="Button__Rectangle__Change">
          <span class="Oval__one"><img src="@/assets/test3.jpg"></span>
          <span class="Oval__two"><img src="@/assets/test3.jpg"></span>
          <span class="Button__Number">2</span>
          <span class="Oval__three"><img src="@/assets/test3.jpg"></span>
          <span class="Oval__four"><img src="@/assets/test3.jpg"></span>
        </span>
        <span class="EXPORT">EXPORT</span>
        <span class="Button__Number2__Tablet"><img src="@/assets/test3.jpg"></span>
        <span class="Showing__Tablet">Showing 1-10 of 58</span>
      </div>
      <!--1440-->
      <div class="Button__Rectangle d-375-none d-768-none">
        <span class="Oval__one"><img src="@/assets/test3.jpg"></span>
        <span class="Oval__two"><img src="@/assets/test3.jpg"></span>
        <span class="Oval__three">1</span>
        <span class="Button__Number">2</span>
        <span class="Oval__four">3</span>
        <span class="Oval__five">4</span>
        <span class="Oval__six">5</span>
        <span class="Oval__seven">6</span>
        <span class="Oval__eight">7</span>
        <span class="Oval__nine">8</span>
        <span class="Oval__ten">9</span>
        <span class="Oval__eleven">10</span>
        <span class="Oval__twelve"><img src="@/assets/test3.jpg"></span>
        <span class="Oval__thirteen"><img src="@/assets/test3.jpg"></span>
        <span class="Button__Number2__Desktop"><img src="@/assets/test3.jpg"></span>
        <span class="Showing__Desktop">Showing 1-10 of 58</span>
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
  .Commission__Rectangle{
      padding-top:20px;
      position: relative;
    }
    .MyCommission__header {
      font-size: 24px;
      font-weight: 500;
    }
    .Recent-3-months {
      opacity: 0.35;
      font-size: 12px;
      font-weight: bold;
      padding-top:5px;
    }
    .Filter__Rectangle {
      width:82px;
      height: 40px;
      border-radius: 4px;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
      border: solid 1px rgba(151, 151, 151, 0.2);
      background-color: #ffffff;
      position: absolute;
      right:0px;    
    }
    .Filter{
      opacity: 0.9;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.29;
      color: #414042;
      margin-left:15px;
      margin-top: 10px;
      position: absolute;      
    }
    .Filter__picture {
      object-fit: contain;
      margin-left:55px;
      margin-top: 10px;
      position: absolute;
    }
    .MagnifierRectangle{
      margin-top:60px;
      display:block;
    }
    .Magnifier{
      object-fit: contain;
      display:block;
    }
    .Account__Rectangle{
      height: 20px;
      margin-top:0px;
      position: relative; 
    }
    .Account__Number {
      height: 16px;
      font-size: 13px;
      font-weight: bold;
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
    .NB__Rectangle {
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      position: relative;
    }
    .space__Rectangle {
      height: 32px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      margin-top:20px;
    }
    .NB__Picture{
      object-fit: contain;
      position: absolute;
      padding:10px 0px 0px 5px;
    }
    .NB__Name{
      opacity: 0.9;
      font-size: 17px;
      font-weight: bold;
      line-height: 1.06;
      color: #414042;
      position:absolute;
      padding:10px 0px 0px 30px;
    }
    .NB__Fee{
      height: 15px;
      opacity: 0.5;
      font-size: 14px;
      letter-spacing: -0.22px;
      color: #414042;
      padding:40px 0px 0px 30px;
    }
    .NB__USD{
      height: 18px;
      font-size: 15px;
      line-height: 1.07;
      color: #414042;
      padding:7px 0px 0px 30px;
    }
    .NB__Paydate{
      height: 16px;
      opacity: 0.5;
      font-size: 13px;
      line-height: 1.08;
      letter-spacing: -0.22px;
      color: #414042;
      margin-left:30px;
    }
    .NB__Pending {
      height: 16px;
      opacity: 0.5;
      font-size: 13px;
      line-height: 1.31;
      text-align: right;
      color: #414042;
      position: absolute;
      right:0px;
      padding-top:10px;
      display:block;
    }
    .Button__Rectangle{
      height: 32px;
      position: relative;
      display:block;
    }
    .Button__Rectangle__Change{
      height:32px;
      position: absolute;
      left:50%;
    }
    .Oval__one {
      position: absolute;
      left:75px;
      top: calc(50% - 12px);
    }
    .Oval__two {
      position: absolute;
      left:40px;
      top: calc(50% - 12px);
    }
    .Oval__three {
      position: absolute;
      left:-70px;
      top: calc(50% - 12px);
    }
    .Oval__four {
      position: absolute;
      top: calc(50% - 12px);
      left:-105px;
    }
    .Button__Number{
      width:67px;
      height: 32px;
      border-radius: 17px;
      background-color: #9aefaa;
      position:absolute;
      left:-35px;
      padding-top:2px;
      text-align:center;
    }
    .Button__Rectangle2__Change{
      height:32px;
      position: absolute;
      left:50%;
    }
    .Button__Rectangle2{
      height: 32px;
      position: relative;
      display:blcok;
    }
    .Button__Number2{
      height: 32px;
      position: absolute;
      left:-105px;
      top: calc(50% - 12px);
    }
    .Showing {
      font-size: 12px;
      line-height: 2.5;
      letter-spacing: -0.2px;
      color: #4a4a4a;
      position: absolute;
      left:-50px;
      white-space: nowrap;
    }
    .d-375-block{
      display:block;
    }
    .d-375-none{
      display:none;
    }
  @media (min-width: 768px) {
    .Commission__Rectangle{
      height: 40px;
      padding-top:20px;
      position: relative;
      display:block;
    }
    .MyCommission__header {
      height: 28px;
      display:block;
    }
    .Magnifier{
      display:block;
      position: absolute;
      margin:-25px 0px 0px 180px;
    }
    .Account__Rectangle{
      height:32px;
      margin-top:70px;
      position: relative;
    }
    .Remuneration__USD {
      height: 16px;
      font-size: 13px;
      font-weight: bold;
      text-align: right;
      color: #414042;
      position: absolute;
      right:140px;
      display:block;
    }
    .Holder__Rectangle{
      position: relative;
      margin-top:-10px;
      display: block;
    }
    .Account__Holder {
      height: 14px;
      opacity: 0.35;
      font-size: 12px;
      font-weight: bold;
      line-height: 1.33;
      letter-spacing: -0.2px;
      color: #414042;
      position: absolute;
      display:block;
    }
    .Fee__Type {
      height: 16px;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: -0.2px;
      color: #414042;
      position: absolute;
      right:350px;
      display:block;
    }
    .base__USD{
      height: 14px;
      object-fit: contain;
      position: absolute;
      right:120px;
      display:block;
    }
    .base__Fee {
      height: 14px;
      object-fit: contain;
      position: absolute;
      right:330px;
    }
    .base__Status {
      height: 14px;
      object-fit: contain;
      position: absolute;
      right:0px;
    }
    .Pay__Date {
      height: 14px;
      opacity: 0.4;
      font-size: 12px;
      font-weight: bold;
      text-align: right;
      color: #414042;
      position: absolute;
      right:140px;
    }
    .Status {
      height: 16px;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: -0.2px;
      color: #414042;
      position: absolute;
      right:20px;
    }
    .NB__Rectangle {
      height: 50px;
      display: block;
      margin-top:20px;
    }
    .NB__Cristen {
      height: 16px;
      opacity: 0.4;
      font-size: 13px;
      line-height: 1.08;
      color: #414042;
      padding:40px 0px 0px 5px;
      position: absolute;
      display:block;
    }
    .NB__Fee {
      height: 16px;
      opacity: 1.0;
      line-height: 1.14;
      color: #414042;
      position: absolute;
      right:330px;
      margin-top:-10px;
      display:block;
    }
    .NB__USD{
      height: 16px;
      opacity: 0.9;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: -0.3px;
      text-align: right;
      position: absolute;
      right:120px;
      margin-top:10px;
      display:block;
    }
    .NB__Date{
      height: 16px;
      opacity: 0.5;
      font-size: 13px;
      text-align: right;
      color: #414042;
      position: absolute;
      right:120px;
      margin-top:40px;
      display:block;
    }
    .NB__Picture{
      display: block;      
    }
    .NB__Name{
      display: block;
    }
    .NB__Pending {
      opacity: 0.9;
      margin-top:10px;
      display: block;
    }
    .EXPORT{
      height: 16px;
      font-size: 13px;
      line-height: 1.08;
      color: #0043ff;
    }
    .Oval__one{
      position: absolute;
      right:220px;
    }
    .Oval__two{
      position: absolute;
      right:260px;
    }
    .Button__Number{
      position: absolute;
      right:295px;
    }
    .Oval__three{
      position: absolute;
      right:375px;
    }
    .Oval__four{
      position: absolute;
      right:415px;
    }
    .Button__Rectangle{
      height: 32px;
      position: relative;
      display:block;
    }
    .Button__Rectangle__Change{
      width:300px;
      height: 32px;
      position: absolute;
      left:50%;
      display:block;
    }
    .Showing__Tablet {
      height: 32px;
      font-family: Inter;
      font-size: 12px;
      line-height: 2.5;
      letter-spacing: -0.2px;
      color: #4a4a4a;
      position: absolute;
      right:10px;
    }
    .Button__Number2__Tablet{
      height: 32px;
      position: absolute;
      right:120px;
      top: calc(50% - 12px);
    }
    .d-768-block{
      display:block;
    }
    .d-768-none{
      display:none;
    }
  }
  @media (min-width: 1440px) {
    .Fee__Type {
      right:897px;
      display:block;
    }
    .Remuneration__USD {
      right:430px;
      display:block;
    }
    .base__USD{
      right:410px;
      display:block;
    }
    .base__PayDate{
      height: 14px;
      object-fit: contain;
      position: absolute;
      right:180px;
      display: block;
    }
    .base__Fee {
      right:877px;
    }
    .Pay__Date {
      opacity: 0.9;
      right:200px;
    }
    .Account__Rectangle{
      height: 32px;
      margin-top:70px;
      position: relative;
      display: block;
    }
    .Holder__Rectangle{
      position: relative;
      margin-top:-10px;
      display: block;
    }
    .NB__Rectangle {
      height: 50px;
      box-shadow: inset 0 1px 0 0 rgba(155, 155, 155, 0.2);
      position: relative;
      display: block;
      margin-top:20px;
    }
    .NB__Fee {
      right:877px;
      display:block;
    }
    .NB__USD{
      right:435px;
      margin-top:22px;
      display:block;
    }
    .NB__Date{
      opacity: 1.0;
      font-size: 14px;
      right:178px;
      margin-top:22px;
      display:block;
    }
    .NB__Picture{
      display: block;      
    }
    .NB__Name{
      display: block;
    }
    .NB__Pending {
      font-size: 14px;
      display: block;
    }
    .Account__Holder {
      display:block;
    }
    .Button__Rectangle{
      height: 32px;
      position: relative;
      display:block;
    }
    .Oval__one {
      height: 32px;
      position: absolute;
      left:0px;
      top: calc(50% - 14px);
    }
    .Oval__two {
      height: 32px;
      position: absolute;
      left:30px;
      top: calc(50% - 14px);
    }
    .Oval__three {
      height: 32px;
      position: absolute;
      left:70px;
      top: calc(50% - 14px);
    }
    .Button__Number{
      position: absolute;
      width: 32px;
      height: 32px;
      background-color: #9aefaa;
      left:90px;
      -moz-border-radius: 16px;
      -webkit-border-radius: 16px;
      border-radius: 16px;
      text-align:center;
    }
    .Oval__four{
      height: 32px;
      position: absolute;
      left:130px;
      top: calc(50% - 14px);
    }
    .Oval__five {
      height: 32px;
      position: absolute;
      left:160px;
      line-height: 1.75;
    }
    .Oval__six {
      height: 32px;
      position: absolute;
      left:190px;
      line-height: 1.75;
    }
    .Oval__seven {
      height: 32px;
      position: absolute;
      left:220px;
      line-height: 1.75;
    }
    .Oval__eight {
      height: 32px;
      position: absolute;
      left:250px;
      line-height: 1.75;
    }
    .Oval__nine {
      height: 32px;
      position: absolute;
      left:280px;
      line-height: 1.75;
    }
    .Oval__ten {
      height: 32px;
      position: absolute;
      left:310px;
      line-height: 1.75;
    }
    .Oval__eleven {
      height: 32px;
      position: absolute;
      left:340px;
      line-height: 1.75;
    }
    .Oval__twelve {
      height: 32px;
      position: absolute;
      left:380px;
      top: calc(50% - 12px);
    }
    .Oval__thirteen{
      height: 32px;
      position: absolute;
      left:410px;
      top: calc(50% - 12px);
    }
    .Button__Number{
      position: absolute;
      width: 32px;
      height: 32px;
      background-color: #9aefaa;
      left:90px;
      -moz-border-radius: 16px;
      -webkit-border-radius: 16px;
      border-radius: 16px;
      text-align:center;
    }
    .Button__Number{
      position: absolute;
      width: 32px;
      height: 32px;
      background-color: #9aefaa;
      left:90px;
      -moz-border-radius: 16px;
      -webkit-border-radius: 16px;
      border-radius: 16px;
      text-align:center;
    }
    .Showing__Desktop {
      font-size: 12px;
      line-height: 2.5;
      letter-spacing: -0.2px;
      color: #4a4a4a;
      position: absolute;
      right:10px;
    }
    .Button__Number2__Desktop{
      position: absolute;
      right:120px;
      top: calc(50% - 12px);
    }
    .d-1440-block{
      display:block;
    }
    .d-1440-none{
      display:none;
    }
  }
}
</style>