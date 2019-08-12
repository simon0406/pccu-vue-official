<template>
  <div class="pb-5">
    <div class="css__RWD">
      <div class="myactionlog__headerGroup">
        <span class="myactionlog__header">My Action Log</span>
      </div>
      <div class=""></div>
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
  .tablebody__month{
    height: 16px;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.5;
    color: #414042;
  }
  .tablebody__year{
    height: 14px;
    opacity: 0.5;
    font-size: 13px;
    line-height: 1.31;
    color: #414042;
  }
  .green__icon{
    width: 8px;
    height: 8px;
    background-color: #9aefaa;
  }
  .tablebody__icon{
    width: 16px;
    height: 16px;
    object-fit: contain;
  }
  .tablebody__name{
    height: 18px;
    font-size: 14px;
    font-weight: bold;
    color: #414042;
  }
  .tablebody__content{
    height: 18px;
    font-size: 14px;
    line-height: 1.14;
    color: #414042;
  }
  .tablebody__details{
    height: 15px;
    font-size: 13px;
    line-height: 1.38;
    color: #0043ff;
  }
}
</style>
