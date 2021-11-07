<template>
  <div>
    <form :class="classList" @submit.prevent="addList">
      <input
        v-model="title"
        type="text"
        class="text-input"
        placeholder="Add new list"
        @focusin="startEding"
        @focusout="finishEding"
      />
      <button class="add-button" type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      isEding: false,
    }
  },
  computed: {
    classList() {
      const classList = ['addList']
      if (this.isEding) {
        classList.push('active')
      }
      if (this.titleExists) {
        classList.push('addable')
      }
      return classList
    },
    titleExists() {
      return this.title.length > 0
    },
  },
  methods: {
    addList() {
      this.$store.dispatch('addList', {
        title: this.title,
      })
      this.title = ''
    },
    startEding() {
      this.isEding = true
    },
    finishEding() {
      this.isEding = false
    },
  },
}
</script>
