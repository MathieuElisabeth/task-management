<template>
  <h2 
    class="relative h-full w-screen p-5 min-h-[calc(100vh-64px)] max-h-[calc(100vh-64px)] overflow-auto bg-light-grey dark:bg-very-dark-grey  text-black  dark:text-white text-lg transition-all "
    :class="managerStore.sidebar ? ['sm:translate-x-[256px] lg:translate-x-[300px] max-w-[calc(100vw+256px'] : ['translate-x-[0]']">
    Hello {{$route.query.name}}, page {{$route.params.id}} is a {{ isEven($route.params.id) }} page
  </h2>
</template>

<script setup>
import { useManagerStore } from '@/stores/manager.js';

const managerStore = useManagerStore();

// const isEven = ref('')

const isEven = (num) => num % 2 === 0 ? "even" : "odd"

// export default {
//   data: () => ({
//       msg: "hello"
//   }),
//   computed: {
//       isEven(){
//           return this.$route.params.id % 2 === 0 ? "even" : "odd"
//       }
//   }
// }
</script>

<style>
.text-primary {
  color: #FFF;
}
</style>