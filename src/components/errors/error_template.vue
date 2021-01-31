<template>
  <section class="slider d-flex align-items-center" id="slider">
    <div id="particles-js"></div>
    <div class="container text-center">
      <div class="row d-flex align-items-center mt-60">
        <div class="col-lg-12">
          <div class="text">
            <h1
              class="h1-w mb-20"
              v-text="Error.error_header + ' ' + Error.error_code"
            ></h1>
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
  </section>
</template>
<script>
export default {
  name: "error_template",
  version: 1.0,
  data() {
    return {
      //   InError: new Error(),
    };
  },
  methods: {
    setError() {
      //   this.InError = new Error();
    },
  },
  mounted() {
    this.setError();
  },
  watch: {
    // Error: function (val) {
    //   this.InError = val;
    // },
  },
  props: {
    Error: Object,
  },
};
</script>