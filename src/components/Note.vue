<template>
  <div ref="note" class="note">
    <h2>
      {{obj.title}}
      <router-link tag="span" class="app_pointer" :to="'/itemNote/'+ order">&#9998;</router-link>
      <span @click.self="remove" class="app_pointer">&#10006;</span>
    </h2>
    <ul @click.prevent class="note_list">
      <li v-for="(item,i) in obj.list" :key="i">
        <label>
          <input v-model="item.check" class="app_pointer app_checkbox" type="checkbox" />
          {{item.text}}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object
    },
    order: {}
  },
  data() {
    return {};
  },
  methods: {
    remove() {
      
      this.$store.commit("remove", this.order);
    }
  },
  mounted() {
    this.$refs.note.style.setProperty("--angleRotate", this.obj.angle + "deg");
    this.$refs.note.style.setProperty("--color", this.obj.color);
  }
};
</script>

<style scoped>
.note {
  --angleRotate: 0;
  --color: chartreuse;
  transform: rotate(var(--angleRotate));
  display: flex;
  flex-direction: column;

  height: 170px;
  padding: 2px 10px;
  background-color: var(--color);

  border-radius: 5px;
  border: 1px solid;
  box-shadow: 10px -7px 10px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.note_list {
  font-size: 1.2rem;
}
.app_pointer:first-child {
  margin: 0 10px 0 auto;
}

h2 {
  background-color: whitesmoke;
  display: flex;
  padding: 5px;
}
label {
  user-select: none;
}
</style>
