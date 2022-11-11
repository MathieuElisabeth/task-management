<template>
  <div>
      <img :src="errorImg" alt="" class="img404">
      <p class="text-center mt-20">
          <router-link to="/">Go to Home</router-link>
      </p>
  </div>
</template>

<script>
import errorImg from "@/assets/svg/404.svg"
export default {
  data() {
      return {
        errorImg
      }
  }
}
</script>

<style>
.img404 {
  width: 100%;
}
.text-center{
    text-align: center;
}
.mt-20 {
  margin-top: 20px;
}
.text-center a {
  padding: 10px;
  background: white;
  border-radius: 5px;
  font-weight: bold;
}
</style>