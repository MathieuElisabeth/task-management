<template>
  <div class="board" :style="{ borderColor: board.color }">
    <div class="head">
      <span class="title">{{ board.title }}</span>
      <span>
        <AddItemBtn :boardId="id" />
        <i class="fas fa-trash" @click="handleBoardDelete"></i>
      </span>
    </div>
    <div>
      <h2 class="msg" v-if="board.items.length == 0">No Items Yet!</h2>
      <div v-else>
        <draggable 
          v-model="board.items"
          @start="drag=true" 
          @end="drag=false"
          handle=".handle"
          @sort="handleSort"
          group="items"
        >
        <TransitionGroup name="list">
          <Item
            v-for="item in board.items"
            :key="item.title"
            :item="item"
            :boardId="id"
            :itemId="index" 
            :color="board.color"
          />
        </TransitionGroup>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
 import { VueDraggableNext } from 'vue-draggable-next'
import Item from "@/components/Item.vue"
import AddItemBtn from "@/components/AddItemBtn.vue"
import { TransitionGroup } from 'vue'
export default {
  components: {
    Item,
    AddItemBtn,
    draggable: VueDraggableNext,
    TransitionGroup
},
  props: {
    board: {
      required: true,
      type: Object
    },
    id: {
      required: true,
      type: Number
    }
  },
  data() {
    return {
      drag: false,
    }
  },
  methods: {
    handleBoardDelete() {
      this.emitter.emit('deleteBoard', this.id)
    },
    handleSort() {
      this.emitter.emit('boardSorted', this.id)
    }
  }
}
</script>

<style>
  .list-move {
    transition: .3s;
  }
</style>