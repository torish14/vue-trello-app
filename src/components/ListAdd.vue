<template>
  <div>
    <form :class="classList" @submit.prevent="addList">
      <input
        v-model="title"
        type="text"
        class="text-input"
        placeholder="Add new list"
        @focusin="startEditing"
        @focusout="finishEditing"
      />
      <button
        v-if="isEditing || titleExists"
        class="add-button"
        type="submit"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      isEditing: false,
    }
  },
  computed: {
    classList() {
      const classList = ['addList']

      if (this.isEditing) {
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
    startEditing() {
      this.isEditing = true
    },
    finishEditing() {
      this.isEditing = false
    },
  },
}
</script>
