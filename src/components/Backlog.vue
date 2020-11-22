<template>
  <div class="backlog">
    <button
      @click.prevent="showBacklog(move)"
      v-for="move in moves"
      :key="move"
      class="backlog-button"
    >
      Move #{{ move }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Backlog",
  props: ["moves", "backlog"],
  methods: {
    showBacklog(move) {
      move = move - 1;
      this.$store.state.cells = this.$store.state.backlog[move];
      this.$store.commit('restartMoves', move)
    
    },
  },
};
</script>

<style lang="scss" scoped>
.backlog {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
}
.backlog-button {
  margin-top: 10px;
}
</style>