<template>
  <div class="notes">
    <note v-for="item in dataNotes" @remove="remove" :key="item.id" :obj="item" />
    <router-link exact to="/itemNote/new" tag="button" class="notes_add">&#10010;</router-link>
    <error-message>
      <template
        v-slot:title
      >Вы действительно хотите удалить выбранную заметку, с айди {{removeId}} ?</template>
      <template v-slot:leftButt>
        <button @click="cancel">Отмена</button>
      </template>
      <template v-slot:rightButt>
        <button @click="yesMessage">Да</button>
      </template>
    </error-message>
  </div>
</template>

<script>
import Note from "../components/Note.vue";
import ErrorMessage from "./ErrorMessage";
export default {
  data() {
    return {
      notesArray: null,
      removeId: null
    };
  },
  methods: {
    remove(value) {
      this.removeId = value;
      this.$store.commit("showMessange");
    },
    cancel() {
      this.$store.commit("showMessange");
    },
    yesMessage() {
      this.$store.commit("remove", this.removeId);
      this.cancel();
    }
  },
  computed: {
    dataNotes() {
      return this.$store.state.notesArray;
    }
  },
  components: {
    Note,
    ErrorMessage
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