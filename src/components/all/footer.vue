<template>
  <!-- ========== Start Footer ========== -->
  <footer class="footer">
    <div class="container text-center text-white">
      <img src="/assets/img/drongo_logo.png" height="56" alt="" />
      <h2>
        Copyright © <span v-text="getYear()"></span> Drongo Technology - All
        Rights Reserved.
      </h2>
    </div>
  </footer>
  <!-- ========== End Footer ========== -->
</template>

<script>
export default {
  name: "footer",
  version: 1.0,
  methods: {
    getYear() {
      var dt = new Date();
      return dt.getFullYear();
    },
  },
};
</script>