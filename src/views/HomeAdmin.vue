<template>

  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class=col-12>
      <img class="img" alt="tareas" src="../assets/tareas.jpg" />
      </div>
      <h1>RUTINATOR</h1>
      <button class="btn btn-light btn-lg"><router-link to="/usuarios">Ver usuarios</router-link></button>
      <button class="btn btn-light btn-lg"><router-link to="/nueva-tarea">Crear tareas</router-link></button>
      <button class="btn btn-light btn-lg">Mis notas</button>
    </div>
  </div>
</template>

<style lang="scss">
.container{
    h1{
      font-family: 'Acme', sans-serif;
      font-size: 60px;
      margin-bottom: 50px;
      font-weight: bolder;
      
    }
    .img {
  
    height: 150px;
    width: 100px;
      
    }
    .btn {
      margin: 10px;
      height: 50px;
      width: 400px;
      background-color: #a4ebf3;
      
    }
 
    a{
      text-decoration: none;
      color: black;
    }

} 
</style>>