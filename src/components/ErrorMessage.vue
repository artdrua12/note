<template>
  <div v-if="show" class="app-messange">
    <!-- <h3 class="app_fullWidth">Вы действительно хотите удалить выбранную заметку, с айди {{id}} ?</h3>
      <button @click="remove">да</button>
    <button @click="cancel">Нет</button>-->
    <h3 class="app_fullWidth">
      <slot name="title" :show="show"></slot>
    </h3>
    <slot name="leftButt"></slot>
    <slot name="rightButt"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    show() {
      return this.$store.state.show;
    }
  }
};
</script>

<style scoped>
.app-messange {
  width: 400px;
  height: 200px;
  border: 7px double;
  position: absolute;

  margin: auto;
  padding: 20px;
  z-index: 10;
  text-align: center;

  top: 40%;
  right: 40%;
  font-size: 1.2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  color: white;
  background: rgba(223, 55, 55, 0.9);
}
.app-messange button {
  font-size: 1.2rem;
  color: red;
}
</style>