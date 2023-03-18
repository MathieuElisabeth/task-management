<template>
  <HeaderVue />
  <main>
    <div class="flex w-full ">
      <SideBar />
      <router-view></router-view>
    </div>
    <ShowSidebar v-if="!managerStore.SideBar" />
  </main>
  <bgOverlay data-no-dragscroll />
  <div class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 max-w-xs w-11/12 sm:max-w-md">
    <TaskView v-if="managerStore.taskView" />
    <TaskForm v-if="managerStore.taskForm.visible" />
    <Delete v-if="managerStore.delete.visible" />
    <BoardForm v-if="managerStore.boardForm.visible" />
    <SidebarMobile v-if="managerStore.sidebarMobile" />
  </div>
</template>

<script setup>
import HeaderVue from '@/components/Header.vue';
import bgOverlay from '@/components/bgOverlay.vue';
import TaskView from '@/components/manager/TaskView.vue'
import TaskForm from '@/components/manager/TaskForm.vue';
import Delete from '@/components/manager/Delete.vue';
import BoardForm from '@/components/manager/BoardForm.vue';
import SideBar from '@/components/manager/Sidebar.vue';
import SidebarMobile from '@/components/manager/SidebarMobile.vue';
import ShowSidebar from '@/components/manager/sidebar/ShowSidebar.vue';

import { onMounted } from 'vue';
import { useManagerStore } from '@/stores/manager.js';

const managerStore = useManagerStore();

onMounted(async () => {
  //DARK MODE
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      managerStore.darkmode = true;
    } else {
      localStorage.setItem('theme', 'light')
      managerStore.darkmode = false;
    }
    managerStore.$subscribe((mutations, state) => {
      localStorage.setItem('theme', (state.darkmode ? 'dark' : 'light'))
      if (state.darkmode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    })
})

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