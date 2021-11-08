<template>
  <div>
    <header>Vue Trello App</header>
<<<<<<< Updated upstream
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
    <<<<<<< Updated upstream
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
    <main>
      <p class="info-line">All: 0 tasks</p>
      <ListAdd />
    </main>
>>>>>>> list_add_component_#2
=======
    >>>>>>> Stashed changes
>>>>>>> Stashed changes
  </div>
  iii/template>

<<<<<<< Updated upstream
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
=======
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
</template>
>>>>>>> Stashed changes
