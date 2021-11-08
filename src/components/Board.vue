<template>
  <div>
    <header>Vue Trello App</header>
<<<<<<< HEAD
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
=======
    <main>
      <p class="info-line">All: 0 tasks</p>
      <ListAdd />
    </main>
>>>>>>> list_add_component_#2
  </div>
</template>

<script>
<<<<<<< HEAD
<<<<<<< Updated upstream
export default {}
=======
import ListAdd from './ListAdd'
import List from './List'
import { mapState } from 'vuex'
=======
import ListAdd from './ListAdd'
>>>>>>> list_add_component_#2

export default {
  components: {
    ListAdd,
<<<<<<< HEAD
    List,
  },
  computed: {
    ...mapState(['lists']),
  },
}
>>>>>>> Stashed changes
=======
  },
}
>>>>>>> list_add_component_#2
</script>
