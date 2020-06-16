<template>
  <div id="app">
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
    }
  },
  mounted() {
    //тестовые данные 3 заметок, если нет там данных
    if(JSON.parse(localStorage.getItem("notes"))) return

    const testData = [
      {
        id: 1,
        title: "Тестовый заголовок 1",
        color: "#ff0000",
        list: [
          { check: false, text: "какой то текст 1" },
          { check: true, text: "какой то текст 2" },
          { check: false, text: "какой то текст 3" }
        ],
        angle: 3
      },
      {
        id: 2,
        title: "Какой-то заголовок 2",
        color: "#d7e60e",
        list: [
          { check: true, text: "один" },
          { check: true, text: "два" },
          { check: false, text: "три" }
        ],
        angle: -2
      },
      {
        id: 3,
        title: "Еще один заголовок",
        color: "#0ed8d8",
        list: [
          { check: false, text: "Скажика Дядя" },
          { check: false, text: "ведь не даром" },
          { check: true, text: "Москва, спаленная пожаром" }
        ],
        angle: 7
      }
    ];
    localStorage.setItem("notes", JSON.stringify(testData));
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
  color: #d7e60e;
}
</style>
