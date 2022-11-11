<template>
  <button @click="handleClick" class="btn">
    <i class="fas fa-plus"></i>Add Board
  </button>
  <Modal
    v-if="showModal"
    title="Add board"
    labelA="Board Title"
    labelB="Board color"
    inputBtype="color"
  />
</template>

<script>
import Modal from '@/components/Modal.vue'
export default {
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
    this.emitter.on('submitBoard',this.handleSubmit)
  },
  methods: {
    handleClick() {
      this.showModal = true
    },
    handleSubmit(data) {
      this.emitter.emit('addBoard', data)
      this.showModal = false
    },
    handleClose() {
      this.showModal = false
      
    }
  }
}
</script>