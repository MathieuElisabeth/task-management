<template>
  <div>
    <h2 class="msg" v-if="boards.length === 0">You don't have Board</h2>
    <div class="boards-container" v-else>
      <Board v-for="(board, index) in boards" :key="index" :id="index" :board="board" />
    </div>
  </div>
</template>

<script>
import Board from '@/components/Board.vue'

export default {
  components: {
    Board
  },
  mounted() {
    let temp = localStorage.getItem("boards")
    if(temp){
        this.boards = JSON.parse(temp)
    }

    this.emitter.on('addBoard', data => {
      this.boards.push({
        title: data.inputA,
        color: data.inputB || '#000',
        items: []
      })
    })
    this.emitter.on('addItem', data => {
      this.boards[data.boardId].items.push({
        title: data.inputA,
        priority: data.inputB || 'low',
      })
      localStorage.setItem("boards", JSON.stringify(this.boards))
    })
    this.emitter.on('deleteBoard', boardId => {
      this.boards.splice(boardId, 1)
      localStorage.setItem("boards", JSON.stringify(this.boards))
    })
    this.emitter.on('deleteItem', data => {
      this.boards[data.boardId].items.splice(data.itemId, 1)
      localStorage.setItem("boards", JSON.stringify(this.boards))
    })
    this.emitter.on('boardSorted', () => {
      localStorage.setItem("boards", JSON.stringify(this.boards))
    })
  },
  data() {
    return {
      boards: [
        {
          title: 'To Do',
          color: 'red',
          items: []
        }
      ]
    }
  },
  watch: {
    boards() {
      localStorage.setItem("boards", JSON.stringify(this.boards))
    }
  }
}
</script>

<style>
.msg {
  color: rgb(255, 255, 255);
  text-align: center;
}

.boards-container {
  display: flex;
  gap: 1.5em;
  overflow: auto;
}

.board {
  padding: 1em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .15);
  border-top: 5px solid red;
  border-radius: 4px;
  background-color: #fff;
  min-width: 300px;
}

.board .head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5em;
}

.head .title {
  font-size: 1.1em;
  font-weight: bold;
}

.fa-trash {
  color: rgb(223, 16, 16);
  margin-left: .74em;
  cursor: pointer;
}
</style>