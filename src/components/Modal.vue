<template>
  <div class="modal">
    <div class="content">
      <p class="title">{{ title }}</p>
      <div class="form">
        <label>{{ labelA }}</label>
        <input type="text" v-model="inputA">
        <label>{{ labelB }}</label>
        <input v-if="inputBtype !== 'select'" :type="inputBtype" v-model="inputB">
        <select v-else name="priority" v-model="inputB">
          <option value="">--Please choose an option--</option>
          <option v-for="priority in priorityList" :value="priority.value">{{ priority.name }}</option>
      </select>
      </div>
      <p class="text-right">
        <button @click="handleCloseBtnClick" class="btn cancel">cancel</button>
        <button @click="submit" class="btn add">submit</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'labelA', 'labelB', 'inputBtype', 'id'],
  data() {
    return {
      inputA: '',
      inputB: '',
      priorityList: [
        {
          name: 'High',
          value: 'high'
        },
        {
          name: 'Medium',
          value: 'medium'
        },
        {
          name: 'Low',
          value: 'low'
        },
      ]
    }
  },
  methods: {
    handleCloseBtnClick() {
      this.emitter.emit('close')
    },
    submit() {
      const type = this.inputBtype === 'color' ? 'submitBoard' : `submitItem${this.id}`
      this.emitter.emit(type, {
        inputA: this.inputA,
        inputB: this.inputB
      })
    }
  }
}
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
}

.modal .content {
  padding: 1.5em;
  background-color: #fff;
  width: 90%;
  max-width: 350px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
}

.content .title {
  font-size: 1.2em;
  font-weight: bold;
}

.form {
  margin: 1em 0;
}

.form label,
.form input {
  display: block;
  width: 100%;
  box-sizing: border-box;
}

input {
  padding: .5em;
  border-radius: 3px;
  margin-bottom: .75em;
  border: 1px solid;
}

input[type="color"] {
  padding: .1em .5em;
}

label {
  margin-bottom: .3em;
}

.btn.cancel {
  background-color: #fff;
  color: var(--primary-clr);
  padding: .75em 1em;
}
</style>