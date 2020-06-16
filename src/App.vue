<template>
  <div id="app">
    <div v-if="show" class="app-messange">
      <h3 class="app_fullWidth">Вы действительно хотите удалить выбранную заметку, с айди {{id}} ?</h3>
      <button @click="remove">да</button>
      <button @click="cancel">Нет</button>
      <slot></slot>
    </div>
    <img
      alt="Vue logo"
      @click="clearStorage"
      class="app_logo"
      title="очистка LocalStorage"
      src="./assets/logo.png"
    />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    clearStorage() {
      this.$store.commit("clearStorage");
    },
    remove() {
      this.$store.commit("remove");
      this.cancel();
    },
    cancel() {
      this.$store.commit("showMessange", null);
    }
  },
  computed: {
    show() {
      return this.$store.state.show;
    },
    id() {
      return this.$store.state.removeId;
    }
  }
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  background: url("assets/flower.jpg") repeat;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 30px;
  max-width: 1230px;
  min-height: 100vh;
  margin: auto;
  padding: 0px 50px;

  background-color: cornsilk;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.8), 23px 0 20px -23px rgba(0, 0, 0, 0.8),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.app_pointer {
  cursor: pointer;
}
.app_checkbox {
  transform: scale(1.5);
}
.app_fullWidth {
  grid-column: 1/-1;
}
</style>

<style scoped>

.app_logo {
  width: 50px;
  height: 50px;
  justify-self: center;
  margin-top: 10px;
}
</style>
