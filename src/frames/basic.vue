<template>
    <div>
        <myNavigation class="fixed-top" :title="'履歷型教材'" :routeNames="routeNames"></myNavigation>
        <router-view class="mt-5"/>
    </div>
</template>
<script>
import myNavigation from "@/components/myNavigation.vue"
export default {
    data: () => ({
        routeNames: ["lesson1", "lesson2"]
    }),
    components: {
        myNavigation
    }
}
</script>
