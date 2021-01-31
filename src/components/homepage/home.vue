<template>
  <pageloader v-if="isloading"></pageloader>
  <navbar></navbar>
  <slider></slider>
  <startabout></startabout>
  <features></features>
  <getstarted></getstarted>
  <startwork></startwork>
  <benefits></benefits>
  <homevideo></homevideo>
  <portfolio></portfolio>
  <team></team>
  <contactus></contactus>
</template>

<script>
import PageLoader from "./pageloader.vue";
import Navbar from "./../all/navbar.vue";
import Slider from "./slider.vue";
import StartAbout from "./startabout.vue";
import Features from "./features.vue";
import GetStarted from "./getstarted.vue";
import StartWork from "./startwork.vue";
import Benefits from "./benefits.vue";
import HomeVideo from "./video.vue";
import PortFolio from "./portfolio.vue";
import Team from "./team.vue";
import ContactUs from "./contactus.vue";
export default {
  name: "home",
  version: 1.0,
  data() {
    return {
      isloading: true,
    };
  },
  mounted() {
    this.isloading = false;
  },
  components: {
    pageloader: PageLoader,
    navbar: Navbar,
    slider: Slider,
    startabout: StartAbout,
    features: Features,
    getstarted: GetStarted,
    startwork: StartWork,
    benefits: Benefits,
    homevideo: HomeVideo,
    portfolio: PortFolio,
    team: Team,
    contactus: ContactUs,
  },
};
</script>