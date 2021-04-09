<template>
  <form action="login-user">
    <h1 class="login">Acceso</h1>
    <br />
    <br />
    <span>Introduce tu email</span>
    <br />
    <input class="email" placeholder="Correo" />
    <br />
    <br />
    <span>Introduce tu contraseña</span>
    <br />
    <input class="password" placeholder="Contraseña" />
    <br />
    <br />
    <router-link to="/homeusuario">
      <button class="submit">Entrar</button>
    </router-link>
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
</style>>
