<template>
    <h1 class="text-primary bold title">About Us Page</h1>
    <p class="text-primary">This project aims to test what is possible with Vue Js and to discover Vue-router, vuedraggable and event emitter with mitt.</p>
    <br/>
    <p class="text-primary">For this I decided to make a task management app, to be able to use vuedraggable and learn how to use the event bus.
      I added routes to test vue-router but they are not essential to the project.</p>
      <br/>
    <p class="text-primary"> The difficulty was to manage the event emitter which was called several times because the component with the listener was repeated.
      I also encountered complications with the vuedraggable setup, which didn't work and crashed the app.</p>
</template>

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