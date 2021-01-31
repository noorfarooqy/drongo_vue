<template>
  <!-- ========== Start Navbar ========== -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><img src="/assets/img/drongo_logo.png" alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/publications" class="nav-link"
              >Publications</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/r&d" class="nav-link">R & D</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/security" class="nav-link"
              >Software security</router-link
            >
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#team">Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- ========== End Navbar ========== -->
</template>

<script>
export default {
  name: "navbar",
  version: 1.0,
};
</script>