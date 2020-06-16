<template>
  <div class="error">
    <h1>404 Страница не найдена</h1>
    <router-link tag="button" to="./">вернуться на главную</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error{
  margin: auto;
  color: red;

  display: flex;
  flex-direction: column;
}
</style>