<template>
  <div class="list">
    <p class="list-title">{{ title }}</p>
    <p class="list-counter">total: {{ totalCardInList }}</p>
    <div class="deleteList" @click="removeList">✕</div>
    <Draggable group="cards" :list="cards" @end="$emit('change')">
      <Card
        v-for="(item, index) in cards"
        :body="item.body"
        :key="item.id"
        :cardIndex="index"
        :listIndex="listIndex"
      />
      <CardAdd :listIndex="listIndex" />
    </Draggable>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import CardAdd from './CardAdd'
import Card from './Card'

export default {
  components: {
    CardAdd,
    Card,
    Draggable,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    listIndex: {
      type: Number,
      required: true,
    },
    cards: {
      type: Array,
      required: true,
    },
  },
  computed: {
    totalCardInList() {
      return this.cards.length
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
