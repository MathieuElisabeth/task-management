<template>
  <h2 class="text-primary">Hello {{$route.query.name}}, page {{$route.params.id}} is a {{isEven}} page</h2>
</template>

<script>
export default {
  data: () => ({
      msg: "hello"
  }),
  computed: {
      isEven(){
          return this.$route.params.id % 2 === 0 ? "even" : "odd"
      }
  }
}
</script>

<style>
.text-primary {
  color: #FFF;
}
</style>