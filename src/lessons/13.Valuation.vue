<template>
  <div class="css__RWD">
    <div class="option__header"><img src="@/assets/facebook.png"></div>
    <h1 class="Valuation__header">Valuation History</h1>
    <div class="M__copy">($M)</div>
    <div class="Number">12</div>
    <div class="Number">10</div>
    <div class="Number">8</div>
    <div class="Number">6</div>
    <div class="Number">4</div>
    <div class="Number">2</div>
    <div class="Number">0</div>
    <div class="Date__Rectangle">
      <div class="Nov__2019">Aug.2019</div>
      <div class="AUM">AUM</div>
      <div class="Oval"><img src="@/assets/facebook.png"></div>
      <div class="Date__Number">$700,521,331,000.010000</div>
      <div class="Net__Contribution">Net Contribution</div>
      <div class="Oval__Copy"><img src="@/assets/facebook.png"></div>
      <div class="Date__Number">$00,000,000</div>
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
  padding:0 1rem;
  
  .Valuation__header{
    height:28px;
    font-size: 24px;
    color: #282828;
    padding:20px 0px 0px 0px;
  }
  .option__header{
    height: 24px;
    position: absolute;
    right:0px;
    object-fit: contain;
    padding:25px 10px 0px 0px;

  }
  .M__copy{
    height:19px;
    opacity: 0.6;
    font-size: 13px;
    color: #282828;
    margin-top: 100px;
  }
  .Number{
    height: 16px;
    opacity: 0.6;
    font-size: 13px;
    color: #282828;
    margin-top: 10px;
    
  }
  .Date__Rectangle{
    max-width: 232px;
    height: 134px;
    opacity: 0.3;
    border-radius: 4px;
    background-color: #000000;
    padding: 0 1rem;
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

}
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
</style>