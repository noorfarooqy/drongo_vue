<template>
  <router-view />
  <!-- <customfooter></customfooter> -->
</template>

<script>
// import Footer from "./components/all/footer.vue";
export default {
  name: "App",
  components: {
    // customfooter: Footer,
  },
  mounted() {
    const plugins = [
      "/assets/js/plugins/jquery-3.3.1.min.js",
      "/assets/js/plugins/popper.min.js",
      "/assets/js/plugins/bootstrap.min.js",
      "/assets/js/plugins/particles.min.js",
      "/assets/js/plugins/app.js",
      "/assets/js/plugins/jquery.smoothscroll.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js",
      "/assets/js/main.js",
    ];

    // var scripts = [];
    plugins.forEach((plugin) => {
      var script = document.createElement("script");
      script.setAttribute("src", plugin);
      script.async = true;
      document.head.appendChild(script);
    });
  },
};
</script>



<style lang='css'>
</style>
