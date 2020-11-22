<template>
  <div id="app">
    <Navbar />

    <div class="container">
      <Board />
    </div>
  </div>
</template>

<script>
import Board from "./components/Board.vue";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Board,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Itim&display=swap");

body {
  background-image: url("./assets/crissxcross.png");
  background-color: #272727;
}

</style>
