<template>
  <pageloader v-if="isloading"></pageloader>
  <customnavbar></customnavbar>
  <errortemplate :Error="Error"></errortemplate>
</template>

<script>
import PageLoader from "./../homepage/pageloader.vue";
import ErrorTemplate from "./../errors/error_template.vue";
import Navbar from "./../all/navbar.vue";
import Error from "./../../classes/Error";
export default {
  name: "404",
  version: 1.0,
  Error: "nothing",
  data() {
    return {
      Error: "something",
      isloading: true,
    };
  },

  components: {
    pageloader: PageLoader,
    errortemplate: ErrorTemplate,
    customnavbar: Navbar,
  },
  created() {
    console.log("mounted ", this.Error);
    this.PopulateError();
  },
  methods: {
    PopulateError() {
      this.Error = new Error();
      this.Error.error_code = 503;
      this.Error.error_header = "Under construction!";
      this.Error.error_text_one =
        "We are sorry. Drongo is still working on this page.";
      this.Error.error_text_two =
        "We are hoping to soon complete. Thank you for visiting.";
      this.Error.error_button_link = "/";
      this.Error.error_button_text = "Go to home";
      this.isloading = false;
    },
  },
};
</script>
        