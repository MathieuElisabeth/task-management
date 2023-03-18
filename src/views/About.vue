<template>
  <div
    class="relative h-full w-screen p-5 min-h-[calc(100vh-64px)] max-h-[calc(100vh-64px)] overflow-auto bg-light-grey dark:bg-very-dark-grey transition-all "
    :class="managerStore.sidebar ? ['sm:translate-x-[256px] lg:translate-x-[300px] max-w-[calc(100vw+256px'] : ['translate-x-[0]']">
    <h1 class="dark:text-white text-dark-grey bold title">About Us Page</h1>
    <div class="w-4/5 dark:text-white text-dark-grey">
      
      <p class="my-2">
        When I created my task management application with the Vue.js 
        framework and the Vue-router, Vuedraggable and Pinia libraries, I learned several things. 
        First, I learned to use Vue.js to create an interactive and dynamic user interface that could be easily 
        updated to reflect changes in tasks and projects.
      </p>

      <p class="my-2">
        I also learned how to use Vuedraggable components to create tables and columns, 
        which allowed users to drag and drop tasks between different tables and columns depending on the state of the project. 
        This has simplified task management and streamlined workflows for users.
      </p>

      <p>
        Using Pinia, a lightweight state management library for Vue.js, 
        I learned how to create a dataflow to store and manage task and project information. 
        Pinia uses the concept of stores to store data, which made it easier to manage my application's state.
      </p>

      <p class="my-2">Creating routes with Vue-router was also a useful skill to learn, although it wasn't necessary for my project. 
        Routes helped to easily navigate between different views of the app, such as tables and task columns. 
        Routes also allowed deep links to specific views of the application, which improved the user experience.
      </p>

      <p class="my-2">
        However, there were also some challenges while building my task manager app. 
        For example, managing the state of my application could become complex if it was not well organized. 
        There could also be performance issues if the app grows too large or requires real-time interaction between multiple users.
      </p>

      <p class="my-2">In the end, building my task manager app with Vue.js, Vuedraggable, Pinia, and Vue-router 
        was a good experience while exploring the benefits and challenges of building interactive and dynamic apps.
      </p>

      <p class="my-2">This is an exercise that comes from Frontend Mentor.</p>
    </div>
  </div>
</template>
<script setup>
import { useManagerStore } from '@/stores/manager.js';

const managerStore = useManagerStore();
</script>

<style>
.title {
  margin-bottom: 20px;
}
.text-primary {
  color: #FFF;
}
.bold {
  font-weight: bold;
}
</style>