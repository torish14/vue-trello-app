<template>
  <div>
    <header>Vue Trello App</header>
    <main>
      <p class="info-line">All: {{ totalCardCount }} tasks</p>
      <div class="list-index">
        <Draggable :list="lists" @end="movingList" class="list-index">
          <List
            v-for="(item, index) in lists"
            :key="item.id"
            :title="item.title"
            :cards="item.cards"
            :listIndex="index"
            @change="movingCard"
          />
          <ListAdd />
        </Draggable>
      </div>
    </main>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import ListAdd from './ListAdd'
import List from './List'
import { mapState } from 'vuex'

export default {
  components: {
    Draggable,
    ListAdd,
    List,
  },
  computed: {
    ...mapState(['lists']),
    totalCardCount() {
      return this.$store.getters.totalCardCount
    },
  },
  methods: {
    movingCard() {
      this.$store.dispatch('updateList', { lists: this.lists })
    },
    movingList() {
      this.$store.dispatch('updateList', { lists: this.lists })
    },
  },
}
</script>
