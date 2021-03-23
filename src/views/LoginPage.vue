<template>
  <form action="login">
    <h1 class="login">Acceso</h1>
    <br />
    <br />
    <span>Introduce tu email</span>
    <br />
    <input class="email" value="Correo" />
    <br />
    <br />
    <span>Introduce tu contraseña</span>
    <br />
    <input class="password" value="Contraseña" />
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
