<template>
  <!-- Navigation -->
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
    id="mainNav"
  >
    <a
      class="navbar-brand js-scroll-trigger"
      href="#page-top"
    >{{title}}</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse"
      id="navbarResponsive"
    >
      <ul class="navbar-nav ml-auto">
        <!-- <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#lesson1">Lesson1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#lesson2">Lesson2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#lesson3">Lesson3</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#lesson4">Lesson 4</a>
          </li> -->
      </ul>
    </div>
  </nav>
</template>
<script>
const $ = require("jquery");
export default {
  created() {
    // Watch scroll behavior
    $("body").scrollspy({
      target: "#mainNav",
      offset: 54
    });
    // Add event to button
    const navItems = document.querySelectorAll("#mainNav a");
    navItems.forEach(navItem => {
      navItem.onclick = function(event) {
        const tag = this.hash;
        event.preventDefault();
        $(".navbar-collapse").collapse("hide");
        if (tag === "#page-top") {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        } else {
          document.querySelector(tag).scrollIntoView();
        }
      };
    });
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);
}
</style>
