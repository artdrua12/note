<template>
  <div class="notes">
    <note v-for="(item, i) in dataNotes" :key="i" :obj="item" />
    <router-link exact to="/itemNote/new" tag="button" class="notes_add">&#10010;</router-link>
  </div>
</template>

<script>
import Note from "../components/Note.vue";
export default {
  data() {
    return {
      notesArray: null
    };
  },
  computed: {
    dataNotes() {
      return this.$store.state.notesArray;
    }
  },
  components: {
    Note
  }
};
</script>

<style scoped>
.notes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px 30px;
  align-content: flex-start;
}
.notes_add {
  font-size: 5rem;
  height: 170px;
}
</style>