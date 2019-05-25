<template>
    <div>
        <myNavigation class="fixed-top" :title="'履歷型教材'" :routeNames="routeNames"></myNavigation>
        <router-view class="marginForNavigation"/>
        <myFooter></myFooter>
    </div>
</template>
<script>
import myNavigation from "@/components/myNavigation.vue"
import myFooter from "@/components/myFooter.vue"
export default {
    data: () => ({
        routeNames: ["lesson1", "lesson2"]
    }),
    components: {
        myNavigation,
        myFooter
    }
}
</script>
<style lang="scss">
.marginForNavigation {
    margin-top: 55px;
}
</style>
