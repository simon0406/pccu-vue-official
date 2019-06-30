<template>
  <nav id="myNavigation" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand js-scroll-trigger" @click="closeMenu" :href="`#/`">{{title}}</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li
          v-for="(route, index) in routes"
          :key="index"
          ref="nav-item"
          class="nav-item active"
          @click="switchItem($event, index)"
        >
          <router-link
            class="nav-link"
            :class="{'active':activeRouteName===route.name}"
            :to="{name:route.name}"
          >{{route.text}}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import $ from "jquery";
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    routes: {
      type: Array,
      required: true
    },
  },
  mounted () {
    document.addEventListener("click", this.detectClickOutside);
  },
  destroyed () {
    document.removeEventListener("click", this.detectClickOutside);
  },
  computed: {
    activeRouteName () {
      return this.$route.name
    }
  },
  methods: {
    switchItem (event, index) {
      const navItems = this.$refs["nav-item"];
      navItems.forEach(item => {
        item.classList.remove("active");
      });
      navItems[index].classList.add("active");
      this.closeMenu();
    },
    detectClickOutside (event) {
      const myNavigation = document.querySelector("#myNavigation");
      const isClickInside = myNavigation.contains(event.target);
      if (!isClickInside) {
        this.closeMenu();
      }
    },
    closeMenu () {
      $(".navbar-collapse").collapse("hide");
    }
  }
};
</script>
