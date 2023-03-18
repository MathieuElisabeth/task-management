<template>
  <div 
    v-dragscroll:nochilddrag
    class="relative h-full w-screen min-h-[calc(100vh-64px)] max-h-[calc(100vh-64px)] overflow-auto bg-light-grey dark:bg-very-dark-grey transition-all "
    :class="managerStore.sidebar ? ['sm:translate-x-[256px] lg:translate-x-[300px] max-w-[calc(100vw+256px'] : ['translate-x-[0]']"
  >
    <div data-dragscroll class="mx-auto w-11/12 pt-6 pb-24 ">
      <div data-dragscroll v-if="boardsStore.getColumns" class="flex">
        <Board data-dragscroll />
        <AddNewColumn class="hidden md:flex" />
      </div>
      <NoBoards v-else-if="boardsStore.boards.length === 0" />
      <EmptyBoard v-else />
    </div>
  </div>
</template >
  
<script setup>
import EmptyBoard from '@/components/board/Empty.vue';
import Board from '@/components/board/Board.vue'

import { onMounted } from 'vue';
import { useBoardsStore } from '@/stores/boards.js';
import { useManagerStore } from '@/stores/manager.js';
import NoBoards from '@/components/board/NoBoards.vue';
import AddNewColumn from '@/components/board/AddNewColumn.vue';

const boardsStore = useBoardsStore();
const managerStore = useManagerStore();

onMounted(async () => {
  //INIT STORAGE
  boardsStore.$subscribe((mutations, state) => {
    if (!managerStore.dragging) {
      localStorage.setItem('boards', JSON.stringify(state))
    } else {
      console.log("You are not saving")
    }
  })
  const storageData = localStorage.getItem("boards")
  if (storageData === null) {
    const jsonData = await import("@/assets/json/data.json")
    boardsStore.boards = jsonData.boards;
  } else {
    boardsStore.$state = JSON.parse(storageData)
  }
  
}) 
</script>
