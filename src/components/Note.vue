<template>
  <div ref="note" class="note">
    <h1>
      Title
      <span class="note_button">&#9998;</span>
      <span class="note_button">&#10006;</span>
    </h1>
    <ul class="app-fullWidth note_list">
      <item v-for="i in 5" :key="i"></item>
    </ul>
  </div>
</template>

<script>
import Item from "../components/Item";
export default {
  props:{
    angle:{
      default: 0
    },
    title:{
      default: 'default Title'
    }
  },
  data() {
    return {
      full: false
    };
  },
  methods: {
    randomAngle() {
      return Math.floor(Math.random() * (9 + 9)) - 9;
    },
  },
  mounted() {
   this.$refs.note.style.setProperty("--angleRotate", this.angle + "deg")
  },
  components: {
    Item
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.note {
  --dynamicHeight: 170px;
  --angleRotate: 0;
  transform: rotate(var(--angleRotate));
  display: flex;
  flex-direction: column;

  height: var(--dynamicHeight);
  border-radius: 5px;
  background-color: chartreuse;
  border: 3px solid;

  overflow: hidden;
}
/* .note:hover {
  z-index: 100;
  transition: height 0.5s;
  --dynamicHeight: 100%;
} */
.note_button {
  cursor: pointer;
  background-color: chartreuse;
}
.note_list {
  font-size: 1.2rem;
}
h1 {
  background-color: chartreuse;
}
</style>
