<template>
  <form action="tasks">
    <h1 class="title">Formulario de tareas</h1>
    <br />
    <br />
    <input class="titulo" placeholder="Titulo" />
    <br />
    <br />
    <input class="frecuency" placeholder="Frecuencia" />
    <br />
    <br />
    <input class="time" placeholder="Hora" />
    <br />
    <br />
    <input class="description" placeholder="Descripción" />
    <br />
    <br />
    <input class="file" type="file" value="Imagen" />
    <br />
    <br />
    <button class="submit"><router-link to="/homeadmin">Guardar</router-link></button>
    
  </form>
</template>

<script>
export default {};
</script>

<style scoped>

h1 {
  padding-top: 5vh;
}
input {
  color: grey;
}
button {
  border-radius: 5px;
}
a {
  text-decoration: none;
  color: black;
}
.file {
  border-radius: 5px;
}
</style>>