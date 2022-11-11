<template>
  <Navbar />
  <div class="container main">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
.container {
  padding: 0 10vw;
}

.main {
  margin: 1.5em 0;
}

@media screen and (max-width: 1000px) {
  .container {
    padding: 0 6vw;
  }
}

@media screen and (max-width: 650px) {
  .container {
    padding: 0 3vw;
  }
}
</style>