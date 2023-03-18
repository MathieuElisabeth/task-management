<template>
  <header class="bg-white dark:bg-dark-grey top-0 left-0 w-full flex items-center sm:pr-4">
    <div 
      class="hidden items-center sm:flex pl-6 h-20 border-r border-r-lines-light dark:border-r-lines-dark md:h-24"
      :class="managerStore.sidebar ? ['min-w-[256px]', 'lg:min-w-[300px]'] : ['min-w-[200px]']"
    >
      <a 
        class="mr-auto flex text-3xl font-bold leading-none dark:text-white text-dark-grey"
        :class="managerStore.sidebar ? ['text-3xl'] : ['text-xl']"
        href="#"
      >
					<img class="mx-2" src="@/assets/icons/logo-mobile.svg" alt="logo">
          Taskphase
				</a>
    </div>
    <div 
      class="mx-auto max-w-sm w-11/12 flex items-center h-16 gap-4
      sm:h-20"
    >
      <div>
        <img class="sm:hidden" src="@/assets/icons/logo-mobile.svg" height="25" width="24" alt="logo">
      </div>
      <div @click="showMobileBar" class="flex items-center gap-2 group cursor-pointer sm:hidden">
        <h1 class="text-black dark:text-white font-bold text-lg cursor-pointer">
          {{ boardsStore.getCurrentBoard?.name }}
        </h1>
        <IconArrowDown v-if="!managerStore.sidebarMobile" />
        <IconArrowUp v-else />
      </div>
      <h1 class="text-black dark:text-white font-bold hidden text-2xl sm:block">
        {{ boardsStore.getCurrentBoard?.name }}
      </h1>
      <div  class="flex items-center gap-4 ml-auto">
        <router-link
          v-for="(link, index) in links"
          :to="link.path"
          :key="index"
          :class="{ active: link.path === $route.path }"
          class="text-black hover:text-main-purple dark:text-white dark:hover:text-main-purple 
            text-sm font-bold py-3 px-4 rounded-3xl transition ease-out delay-150 hidden lg:block"
        >
          {{ link.name }}
        </router-link>
        <AddButtonMobile v-if="boardsStore.boards.length"  />
        <PrimarySmall
          v-if="boardsStore.boards.length"
          @click="addTask"
          class="hidden sm:block"
        >
          + Add New Task
        </PrimarySmall>
        <Dropdown
          v-if="boardsStore.boards.length"
          target="Board"
          @onClickEdit="editTask"
          @onClickDelete="deleteTask"
        />
        <IconBurgerMenu 
          class="lg:hidden dark:text-white text-dark-grey cursor-pointer hover:text-gray-500 hover:dark:text-light-grey"
          @click="openMenu"
        />
      </div>
    </div>
  </header>
  <Menu />
</template>
<script setup>
import AddButtonMobile from '@/components/buttons/AddTaskMobile.vue'
import { useBoardsStore } from '@/stores/boards';
import { useManagerStore } from '@/stores/manager';
import Dropdown from '@/components/manager/Dropdown.vue';
import Menu from '@/components/manager/Menu.vue';
import IconArrowDown from './icons/IconArrowDown.vue';
import IconArrowUp from './icons/IconArrowUp.vue';
import IconBurgerMenu from './icons/IconBurgerMenu.vue';
import PrimarySmall from './buttons/PrimarySmall.vue';

const boardsStore = useBoardsStore()
const managerStore = useManagerStore()

const links = [
  {
    name: 'Board',
    path: '/'
  },
  {
    name: 'Facts',
    path: '/facts/20'
  },
  {
    name: 'About',
    path: '/about'
  }
]

const editTask = () => {
  managerStore.overlay = true
  managerStore.boardForm = { edit: true, visible: true }
}
const deleteTask = () => {
  managerStore.overlay = true
  managerStore.delete = { board: true, visible: true }
}
const addTask = () => {
  managerStore.overlay = true
  managerStore.taskForm = { visible: true, edit: false };
}
const showMobileBar = () => {
  managerStore.sidebarMobile = true;
  managerStore.overlay = true
}
const openMenu = () => {
  managerStore.burgerMenu = true;
  // managerStore.overlay = true
}

</script>