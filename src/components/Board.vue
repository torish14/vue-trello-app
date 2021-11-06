<template>
  <div>
    <header>Vue Trello App</header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <ListAdd />
    </main>
  </div>
</template>

<script>
import ListAdd from './ListAdd'

export default {
  components: {
    ListAdd,
  },
}
</script>
