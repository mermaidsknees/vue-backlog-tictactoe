<template>
  <div class="HelloWorld">
    <div class="board-container">
      <div class="board" id="board">
        <div
          class="cell"
          v-for="(cell, index) in cells"
          :key="index"
          @click.stop="strike(index)"
          :style="{ 'background-color': cellColor[index] ? color : '' }"
        >
          {{ cell }}
        </div>
      </div>
      <Backlog :moves="moves" />
    </div>
    <div
      class="winning-message-text"
      :style="{ visibility: isVisible ? 'visible' : 'hidden' }"
    >
      {{ endgameText }}
    </div>
    <div class="winning-message" id="winningMessage">
      <div class="button">
        <button @click="reset()">Restart</button>
      </div>
    </div>
  </div>
</template>



<script>
import Backlog from "./Backlog.vue";
import Vue from "vue";

export default {
  components: {
    Backlog,
  },
  data() {
    return {
      winConditions: [
        [1, 2, 3],
        [4, 5, 6],
        [2, 5, 8],
        [7, 8, 9],
        [1, 4, 7],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
      ],
      activePlayer: "O",
      moves: this.$store.state.moves,
      matches: 0,
      xValues: [],
      yValues: [],
      cellColor: [Array(9).fill(null)],
      color: '',
      gameWon: { status: false, player: null },
      endgameText: '',
      isVisible: false,
    };
  },
  methods: {
    strike(index) {
      if (this.cells[index] == "" && !this.gameWon.status) {
        this.cells[index] = this.activePlayer;
        this.moves++;
        this.createBacklog();
        this.changePlayer();
        this.checkForWin(index);
        this.checkTie();
      }
    },
    changePlayer() {
      this.activePlayer = this.nonActivePlayer;
    },

    sortArrays(index) {
      if (this.cells[index] == "O") {
        this.yValues.push(index);
      } else if (this.cells[index] == "X") {
        this.xValues.push(index);
      }
    },

    checkForWin(index) {
      this.sortArrays(index);
      var yPlays = JSON.parse(JSON.stringify(this.yValues));
      var xPlays = JSON.parse(JSON.stringify(this.xValues));
      var winCombos = JSON.parse(JSON.stringify(this.winConditions));
      for (let i = 0; i < winCombos.length; i++) {
        if (
          winCombos[i].every(
            (element) => yPlays.indexOf("" + element + "") > -1
          )
        ) {
          this.gameWon = { status: true, player: this.nonActivePlayer };
          var combo = winCombos[i];
          this.gameOver(combo);
          break;
        } else if (
          winCombos[i].every(
            (element) => xPlays.indexOf("" + element + "") > -1
          )
        ) {
          this.gameWon = { status: true, player: this.nonActivePlayer };
          var combo = winCombos[i];
          this.gameOver(combo);
          break;
        }
      }
    },

    checkTie() {
      if (this.moves == 9 && !this.gameWon.status) {
        this.isVisible = true;
        this.endgameText = "Tie";
        for (let i = 0; i <= 9; i++) {
          this.cellColor[i] = true;
        }
        this.color = "#77dd77";
      }
    },
    gameOver(combo) {
      this.isVisible = true;
      this.endgameText = `${this.nonActivePlayer} wins`;

      if ((this.gameWon.player = "O")) {
        for (let i of combo) {
          this.cellColor[i] = true;
          this.color = "#ff6961";
        }
      } else if ((this.gameWon.player = "X")) {
        for (let i of combo) {
          this.cellColor[i] = true;
          this.color = "#aec6cf";
        }
      }
    },
      createBacklog() {
        let index = this.moves;
        let cells = Object.assign(index, this.cells);
  
        this.$store.state.backlog.push(cells);
      },
    reset() {
      let cellsReset = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
      };

      this.$store.state.cells = cellsReset;
      (this.gameWon = { status: false, player: null }), (this.yValues = []);
      this.xValues = [];
      this.moves = 0;
      this.matches = 0;
      this.color = "";
      this.activePlayer = "O";
      this.cellColor = [Array(9).fill(null)];
      this.endgameText = "";
    },
  },
  computed: {
    cells() {
      return this.$store.state.cells;
    },
    nonActivePlayer() {
      if (this.activePlayer == "O") {
        return "X";
      } else if (this.activePlayer == "X") {
        return "O";
      }
    },
  },
};
</script>

<style lang='scss'>
*,
::after,
*::before {
  box-sizing: border-box;
  font-family: "Itim", cursive;
}
:root {
  --cell-size: 100px;
}
body {
  margin: 0;
}

.backlog {
  position: absolute;
  right: 10%;
  top: 19vh;
}

.board {
  margin: 0 auto;
  width: 600px;
  height: 600px;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, auto);
  position: relative;
}


/* Cells */

.cell {
  width: var(--cell-size);
  height: var(--cell-size);
  border: 3px solid #272727;
  background-color: white;
  color: #272727;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: 90px;
}
.cell:first-child,
.cell:nth-child(2),
.cell:nth-child(3) {
  border-top: none;
}
.cell:nth-child(3n + 1) {
  border-left: none;
}
.cell:nth-child(3n + 3) {
  border-right: none;
}
.cell:last-child,
.cell:nth-child(8),
.cell:nth-child(7) {
  border-bottom: none;
}

/* Win */

.winning-message {
  color: white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  text-align: center;
  vertical-align: top;
}

.winning-message-text {
  display: block;
  color: white;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  font-size: 50px;
}

//Button

button {
  width: 200px;
  height: 50px;
  font-size: 20px;
  color: #17a2b8;
  border: 1px solid #17a2b8;
  background-color: inherit;
  border-radius: 15px;
  padding: 0;
  outline: none;
  transition: all 0.2s linear;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: #17a2b8;
  }
}
</style>
