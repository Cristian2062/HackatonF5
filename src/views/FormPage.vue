<template>
  <form action="tasks">
    <h1 class="title">Formulario de tareas</h1>
    <br />
    <br />
    <input class="titulo" value="Titulo" />
    <br />
    <br />
    <input class="frecuency" value="Frecuencia" />
    <br />
    <br />
    <input class="time" value="Hora" />
    <br />
    <br />
    <input class="description" value="Descripción" />
    <br />
    <br />
    <input class="image" type="img" value="Imagen" />
    <br />
    <br />
    <router-link to="/HomeAdmin">
      <button class="submit">Entrar</button>
    </router-link>
  </form>
</template>

<script>
export default {};
</script>

<style>
h1 {
  padding-top: 5vh;
}
input {
  color: grey;
}
button {
  border-radius: 5px;
}
</style>