<template>
    <button @click="showModal = true" class="btn">
      <i class="fas fa-plus"></i>Add Item
    </button>
  <Modal
    v-if="showModal"
    title="Add item"
    labelA="Enter item"
    labelB="Enter priority"
    inputBtype="select"
    :id="boardId"
  />
</template>

<script>
import Modal from '@/components/Modal.vue'
export default {
  props: ['boardId'],
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  },
  created() {
    this.emitter.on('close',this.handleClose)
    this.emitter.on(`submitItem${this.boardId}`,this.handleSubmit)
  },
  methods: {
    handleClick() {
      this.showModal = true
    },
    handleSubmit(data) {
      this.emitter.emit('addItem', {
        ...data,
        boardId: this.boardId
      })
      this.showModal = false
    },
    handleClose() {
      this.showModal = false
      
    }
  }
}
</script>