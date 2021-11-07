<template>
  <div>
    <header>Vue Trello App</header>
<<<<<<< Updated upstream
    <main><p class="info-line">All: 0 tasks</p></main>
=======
    <main>
      <p class="info-line">All: 0 tasks</p>
      <div class="list-index">
        <list
          v-for="(item, index) in lists"
          :key="item.id"
          :title="item.title"
          :listIndex="index"
        ></list>
        <ListAdd />
      </div>
    </main>
>>>>>>> Stashed changes
  </div>
</template>

<script>
<<<<<<< Updated upstream
export default {}
=======
import ListAdd from './ListAdd'
import List from './List'
import { mapState } from 'vuex'

export default {
  components: {
    ListAdd,
    List,
  },
  computed: {
    ...mapState(['lists']),
  },
}
>>>>>>> Stashed changes
</script>
