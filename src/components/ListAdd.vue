<template>
  <div>
    <form class="addList" @submit.prevent="addList">
      <input
        v-model="title"
        type="text"
        class="text-input"
        placeholder="Add new list"
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
    }
  },
  methods: {
    addList() {
      this.$store.dispatch('addList', {
        title: this.title,
      })
      this.title = ''
    },
  },
}
</script>
