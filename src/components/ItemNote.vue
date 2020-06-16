<template>
  <div class="newNote" ref="newNote">
    <input class="app_fullWidth" v-model="title" type="text" placeholder="Заголовок" />
    <h2>Цвет заметки:</h2>
    <input class="newNote_color" v-model="color" type="color" placeholder="Заголовок" />
    <h2>Список:</h2>
    <input v-model="textList" type="text" placeholder="значение" />
    <button @click="addToList">Добавить</button>
    <ul class="app_fullWidth">
      <li v-for="(item,i) in list" :key="i">
        <input v-model="list[i].check" class="app_pointer app_checkbox" type="checkbox" />
        <input
          class="newNote_input"
          type="text"
          v-model="list[i].text"
          placeholder="пустое значение"
        />
        <button @click="remove(i)">&#10006;</button>
      </li>
    </ul>
    <error-message>
      <template v-slot:title>Все несохраненные данные будут потеряны</template>
      <template v-slot:leftButt>
        <button @click="cancel">Отмена</button>
      </template>
      <template v-slot:rightButt>
        <button @click="yesMessage">Да</button>
      </template>
    </error-message>
    <button class="cancel" @click="cancel">Отмена</button>
    <button @click="save">Сохранить</button>
  </div>
</template>

<script>
import ErrorMessage from "./ErrorMessage";
export default {
  data() {
    return {
      color: "#7fff00",
      list: [],
      title: "",
      textList: "",
      updateId: this.$route.params["id"],
      updateObj: {}
    };
  },
  methods: {
    addToList() {
      let obj = { check: false, text: this.textList };
      this.list.push(obj);
      this.textList = "";
    },
    remove(i) {
      this.list.splice(i, 1);
    },
    toMainPage() {
      this.$router.push("/");
    },
    cancel() {
      this.$store.commit("showMessange");
    },
    currentData() {
      let date = new Date();
      return date.getTime();
    },
    save() {
      if (this.updateId == "new") {
        let obj = {
          id: this.currentData(),
          title: this.title,
          color: this.color,
          list: this.list,
          angle: Math.floor(Math.random() * (10 + 10)) - 10
        };
        this.$store.commit("create", obj);
      } else {
        this.updateObj.title = this.title;
        this.updateObj.color = this.color;
        this.updateObj.list = this.list;
        this.$store.commit("update", this.updateObj);
      }

      this.toMainPage();
    },
    yesMessage() {
      this.toMainPage();
      this.cancel();
    }
  },
  watch: {
    $route(toRoute) {
      this.updateId = toRoute.params["id"];
    }
  },
  mounted() {
    if (this.updateId == "new") return;
    this.updateObj = this.$store.state.notesArray.find(
      item => item.id == this.updateId
    );
    this.list = this.updateObj.list;
    this.title = this.updateObj.title;
    this.color = this.updateObj.color;
  },
  components: {
    ErrorMessage
  }
};
</script>

<style scoped>
.newNote {
  --color: chartreuse;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-template-rows: repeat(3, 50px) 1fr 50px;
  grid-gap: 20px;

  padding: 30px;
  margin: auto;

  width: 500px;
  height: 700px;
  border: 3px dashed orange;
  background-color: var(--color);
}
.newNote_input {
  background-color: var(--color);
  flex: 1 1 80%;
  align-content: center;
}
.newNote_color {
  grid-column: 2/-1;
  align-self: center;
  height: 100%;
}

input {
  border: none;
  font-size: 1.5rem;
  padding: 10px;
  outline: none;
}
.cancel {
  grid-column: 2/3;
}
h2 {
  align-self: center;
}
ul {
  overflow: auto;
}
li {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>