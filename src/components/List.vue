<template>
  <div class="list">
    <div class="listHeader">
      <p class="list-title">{{ title }}</p>
      <div class="deleteList" @click="removeList">✕</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    listIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    removeList() {
      if (confirm('本当にこのリストを削除しますか？')) {
        this.$store.dispatch('removeList', {
          listIndex: this.listIndex,
        })
      }
    },
  },
}
</script>
