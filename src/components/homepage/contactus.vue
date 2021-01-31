<template>
  <!-- ========== Start Contact ========== -->
  <section class="contact" id="contact">
    <div class="container text-center">
      <h2 class="h2 mb-15">Want to get more info?</h2>
      <p class="p-bk mb-60">
        Get in touch with us, and we will reply to you within 12 hours.
      </p>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <form>
            <div class="row">
              <div class="col-sm-12">
                <input type="text" class="form-control" placeholder="Name" />
              </div>
              <div class="col-sm-12">
                <select name="" id="" class="form-select">
                  <option selected value="-1" class="text-dark">
                    What is your enquiry about
                  </option>
                  <optgroup label="Packages">
                    <option value="11">Basic Plan</option>
                    <option value="12">Professional Plan</option>
                    <option value="13">Ultimate Plan</option>
                  </optgroup>
                  <optgroup label="Built Systems">
                    <option value="11">School Management</option>
                    <option value="11">Hotel Management</option>
                    <option value="11">Hospital Management</option>
                    <option value="11">Other Management</option>
                  </optgroup>
                  <optgroup label="Artificial Intelligence">
                    <option value="11">Face recognition software</option>
                    <option value="11">Object detection</option>
                    <option value="11">Stock predictions</option>
                    <option value="11">Data analysis</option>
                    <option value="11">Other project</option>
                  </optgroup>
                  <optgroup label="Research & Development">
                    <option value="11">Outsourcing research</option>
                    <option value="11">Research Collaboration</option>
                    <option value="11">Research Sponsorship</option>
                    <option value="11">Other matters</option>
                  </optgroup>
                </select>
              </div>
              <div class="col-sm-12">
                <input type="email" class="form-control" placeholder="Email" />
              </div>
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                rows="5"
                id="comment"
                placeholder="Message"
              ></textarea>
            </div>
            <button class="btn btn-block" type="submit">Send Now!</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- ========== End Contact ========== -->
</template>

<script>
export default {
  name: "aboutus",
  version: 1.0,
};
</script>

<style scoped>
select.form-select {
  display: block;
  width: 100%;
  border: none;
  margin: 1em 0em 1em 0em;
  padding: 1em;
  border-radius: 0.6em;
  color: #495057;
}
</style>