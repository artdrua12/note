<template>
  <div id="app">
    <input type="text" />
    <button @click="addStiky">новая стику</button>
    <img alt="Vue logo" src="./assets/logo.png" />
    <note :angle="i" v-for="i in notes" :key="i" />
    <button @click="addNote">add</button>
  </div>
</template>

<script>
import Note from "./components/Note.vue";

export default {
  name: "App",
  data() {
    return {
      notes: null
    };
  },
  methods: {
    addNote() {
      localStorage.clear();
    },
    randomAngle() {
      return Math.floor(Math.random() * (10 + 10)) - 10;
    },
    addStiky() {
      let newArray = [];
      for (let i = 0; i < 10; i++) {
        newArray.push(this.randomAngle());
      }
      console.log(newArray);

      localStorage.setItem("notes", JSON.stringify(newArray));
    }
  },
  mounted() {
    this.notes = JSON.parse(localStorage.getItem("notes"));
  },
  components: {
    Note
  }
};
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px 30px;

  align-content: flex-start;
  padding: 30px;
  min-height: 100vh;
  background: url("assets/flower.jpg") repeat;
}

.app_fullWidth {
  grid-column: -1/1;
}
.app_fullHeight {
  grid-row: -1/1;
}
</style>

<style scoped>
</style>
