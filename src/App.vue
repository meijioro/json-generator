<template>
  <div id="app">
    <div
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow"
    >
      <h5 class="my-0 mr-md-auto font-weight-normal text-white">Company</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link class="p-2 text-white" to="/">
          Brand Style Generator
        </router-link>
        <router-link class="p-2 text-white" to="/override">
          Override Module Styles
        </router-link>
      </nav>

      <a
        class="btn btn-outline-info"
        href="https://module-generator-dist.glitch.me/"
      >
        Custom Module Generator
      </a>
    </div>
    <router-view />
  </div>
</template>

<script>
import './css/formulate.css';
import './css/style.css';

export default {
  name: 'app',
  data() {
    return {};
  },
};
</script>
