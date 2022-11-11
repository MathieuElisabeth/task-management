<template>
  <div class="item">
    <div class="head">
      <span class="priority">
        <span>Priority:</span>
        <span class="badge" :style="{ backgroundColor: priorityColor }">{{ item.priority }}</span>
      </span>
      <i class="fas fa-sort handle" :style="{ color }"></i>
    </div>
    <p class="title">{{ item.title }}</p>
    <p class="text-right">
      <button class="btn delete" @click="handleItemDelete">delete</button>
    </p>
  </div>
</template>

<script>
export default {
  props: ['item', 'color', 'boardId', 'itemId'],
  computed: {
    priorityColor() {
      if (this.item.priority === 'low') {
        return '#d0c6fc';
      } else if (this.item.priority === 'medium') {
        return '#80d5db';
      } else if (this.item.priority === 'high') {
        return '#d13667';
      }
    }
  },
  methods: {
    handleItemDelete() {
      this.emitter.emit('deleteItem', {
        boardId: this.boardId,
        itemId: this.itemId
      })
    }
  }
}
</script>

<style>
.item {
  padding: 1em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .1);
  border-radius: 4px;
  margin-bottom: 1em;
}

.item .head .priority {
  font-weight: bold;
  color: rgb(85, 85, 85);
}

.badge {
  padding: .3em .75em;
  background-color: red;
  border-radius: 3px;
  margin-left: .5em;
  color: #fff;
  text-transform: uppercase;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .1);
  font-size: .8em;
  letter-spacing: 1px;
  ;
}

.fa-sort {
  cursor: move;
}

.item .title {
  margin-top: 1em;
  font-weight: bold;
  font-size: 1.2em;
  color: rgb(48, 47, 47);
}

.text-right {
  text-align: right;
}

.btn.delete {
  color: rgb(223, 16, 16);
  background-color: rgb(255, 202, 202);
}
</style>