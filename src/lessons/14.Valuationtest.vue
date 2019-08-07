<template>
  <div class="css__RWD">
    <div class="Monthly__header">
      <span class="Monthly">Monthly</span>
      <span class="Monthly__icon"><img src="@/assets/facebook.png"></span>
    </div>
    <h1 class="Valuation__header">Valuation History</h1>
    <div class="Number__Rectangle">
      <div class="M__copy">($M)</div>
      <div class="Number">12</div>
      <div class="Number">10</div>
      <div class="Number">8</div>
      <div class="Number">6</div>
      <div class="Number">4</div>
      <div class="Number">2</div>
      <div class="Number">0</div>
    </div>
    <div class="Date__Rectangle">
      <div class="Nov__2019">Aug.2019</div>
      <div class="AUM">AUM</div>
      <div class="Oval"><img src="@/assets/facebook.png"></div>
      <div class="Date__Number">$700,521,331,000.010000</div>
      <div class="Net__Contribution">Net Contribution</div>
      <div class="Oval__Copy"><img src="@/assets/facebook.png"></div>
      <div class="Date__Number">$00,000,000</div>
    </div>
    <div class="Month__rowItem">
      <div class="Month__columnItem__Jul">Jul 19'</div>
      <div class="Month__columnItem__Aug">Aug 19'</div>
      <div class="Month__columnItem__Sep">Sep 19'</div>
      <div class="Month__columnItem__Oct">Oct 19'</div>
      <div class="Month__columnItem__Nov">Nov 19'</div>
      <div class="Month__columnItem__Dec">Dec 19'</div>
    </div>
    <div class="slide__rowItem">     
      <div class="slide__icon__one"><img src="@/assets/facebook.png"></div>
      <div class="slide__icon__two"><img src="@/assets/facebook.png"></div>
      <div class="slide__columnItem"></div>
    </div>

  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.css__RWD{
  width:100%;
  padding:0 1rem;
  
  .Valuation__header{
    height:28px;
    font-size: 24px;
    color: #282828;
    padding:20px 0px 0px 0px;
  }
  .Monthly__header{
    width: 106px;
    height: 40px;
    border-radius: 2px;
    background-color: #f2f4ff;
    margin:20px 10px 0px 0px;
    position: absolute;
    right:0px;
  }
  .Monthly__icon{
    margin:5px 0px 0px 5px;
    position: absolute;
    background-color: #414042;
  }
  .Monthly{
    height: 16px;
    opacity: 0.9;
    font-size: 14px;
    color: #414042;
    position: absolute;
    margin:10px 0px 0px 5px;
  }
  .M__copy{
    height:19px;
    opacity: 0.6;
    font-size: 13px;
    color: #282828;
    margin-top:100px;
  }
  .Number{
    height: 16px;
    opacity: 0.6;
    font-size: 13px;
    color: #282828;
    margin-top: 20px;
    
  }
  .Date__Rectangle{
    max-width: 232px;
    height: 134px;
    opacity: 0.3;
    border-radius: 4px;
    background-color: #000000;
    margin-bottom:80px;
    padding: 0 1rem;
    margin:-280px 0px 0px 80px;
  }
  .Nov__2019{
    height: 16px;    
    font-size: 13px;
    font-weight: bold;
    color: #ffffff;
    padding:10px 0px 0px 0px;
  }
  .Oval {
    width: 6px;
    height: 6px;
    background-color: var(--sun-yellow);
  }
  .AUM {
    height: 16px;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: -0.22px;
    color: #ffffff;
    padding-left:30px;
    padding:25px 0px 0px 20px;
  }
  .Date__Number {
    height: 16px;
    font-size: 13px;
    text-align: right;
    color: #ffffff;
    padding-top:15px;
  }
  .Oval__Copy{
    width: 6px;
    height: 6px;
    background-color: #ffffff;
  }
  .Net__Contribution {
    height: 16px;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: -0.22px;
    color: #ffffff;
    padding:20px 0px 0px 20px;
  }
  .Number__Rectangle{
    max-width: 25px;
    text-align: right;
  }
  .Month__rowItem{
    height: 50px;
    margin:160px 0px 0px 60px;
    position: relative;
  }
  .Month__columnItem__Jul{
    position: absolute;
    max-width: 5px;
    height: 50px;
    opacity: 0.6;
    font-size: 12px;
    color: #282828;
    
  }
  .Month__columnItem__Aug{
    position: absolute;
    left:40px;
    max-width: 5px;
    height: 50px;
    opacity: 0.6;
    font-size: 12px;
    color: #282828;
  }
  .Month__columnItem__Sep{
    position: absolute;
    left:80px;
    max-width: 5px;
    height: 50px;
    opacity: 0.6;
    font-size: 12px;
    color: #282828;
    
  }
  .Month__columnItem__Oct{
    position: absolute;
    left:120px;
    max-width: 5px;
    height: 50px;
    opacity: 0.6;
    font-size: 12px;
    color: #282828;
    
  }
  .Month__columnItem__Nov{
    position: absolute;
    left:160px;
    max-width: 5px;
    height: 50px;
    opacity: 0.6;
    font-size: 12px;
    color: #282828;
    
  }
  .Month__columnItem__Dec{
    position: absolute;
    left:200px;
    max-width: 5px;
    height: 50px;
    opacity: 0.6;
    font-size: 12px;
    color: #282828;
  }
  .slide__rowItem{
    max-width: 271px;
    height: 32px;
    border: solid 1px #bacaff;
    position: relative;
    margin:auto;
  }
  .slide__columnItem{
    max-width: 195px;
    height: 32px;
    opacity: 0.3;
    background-color: #bacaff;
    margin-left:auto;
    z-index: 1;
  }
  .slide__icon__one{
    max-width: 20px;
    height:20px;
    box-shadow: 0 2px 4px 0 rgba(155, 155, 155, 0.28);
    border: solid 1px rgba(74, 74, 74, 0.09);
    background-color: #ffffff;
    position:absolute;
    margin:5px 0px 0px -10px;
    z-index: 2;
  }
  .slide__icon__two{
    max-width: 20px;
    height:20px;
    box-shadow: 0 2px 4px 0 rgba(155, 155, 155, 0.28);
    border: solid 1px rgba(74, 74, 74, 0.09);
    background-color: #ffffff;
    position:absolute;
    margin:5px 0px 0px 260px;
    z-index: 2;
  }
}
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
</style>