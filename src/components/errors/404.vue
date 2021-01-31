<template>
  <pageloader v-if="isloading"></pageloader>
  <customnavbar></customnavbar>
  <errortemplate :Error="Error"></errortemplate>
  <!-- <section class="slider d-flex align-items-center" id="slider">
    <div id="particles-js"></div>
    <div class="container text-center">
      <div class="row d-flex align-items-center mt-60">
        <div class="col-lg-12">
          <div class="text">
            <h1 class="h1-w mb-20" v-text="Error.error_header"></h1>
            <p class="p-w mb-30">
              <span v-text="Error.error_text_one"></span>
              <br />
              <span v-text="Error.error_text_two"></span>
            </p>
            <a
              :href="Error.error_button_link"
              class="btn-white d-inline-block"
              v-text="Error.error_button_text"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section> -->
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
      this.Error.error_code = 404;
      this.Error.error_header = "Sorry!";
      this.Error.error_text_one = "The page is either still under construction";
      this.Error.error_text_two = "Or its not currently available for viewing";
      this.Error.error_button_link = "/";
      this.Error.error_button_text = "Go to home";
      this.isloading = false;
    },
  },
};
</script>
        