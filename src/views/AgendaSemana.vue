<template>
  <div class="container">
      <h1>MIS TAREAS PARA...</h1>
      <div class=" row btn-group btn-group-lg" role="group" aria-label="...">
        <div class="col-12">
        <button type="button" class="btn btn-outline-dark"><router-link to="/agendausuario" class="nav-link active" aria-current="page">HOY</router-link></button>
        <button type="button" class="btn btn-outline-dark"><router-link to="/agendasemana" class="nav-link active" aria-current="page">LA SEMANA</router-link></button>
        <button type="button" class="btn btn-outline-dark"><router-link to="/agendames" class="nav-link active" aria-current="page">EL MES</router-link></button>

      </div>
      </div>
<br>
<div class=row>
<div class="card" style="width: 18rem;">
  <div class="card-header">
    <h5>Lunes</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">8:00h | Desayunar  <img class="star21" src="../assets/star.png" alt="star"></li>
    <li class="list-group-item"> 9:00h | Ducharse  <img class="star21" src="../assets/star.png" alt="star"></li>
    <li class="list-group-item"> 10:00h | Coger el autobús 47  <img class="star21" src="../assets/star.png" alt="star"></li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-header">
    <h5>Martes</h5>
  </div>
  <ul class="list-group list-group-flush">
   <li class="list-group-item">8:00h | Desayunar  <img class="star21" src="../assets/star.png" alt="star"></li>
    <li class="list-group-item"> 9:00h | Ducharse  <img class="star21" src="../assets/star.png" alt="star"></li>
    <li class="list-group-item"> 10:00h | Coger el autobús 47  <img class="star21" src="../assets/star.png" alt="star"></li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-header">
    <h5>Miercoles</h5>
  </div>
  <ul class="list-group list-group-flush">
   <li class="list-group-item">8:00h | Desayunar  <img class="star21" src="../assets/star.png" alt="star"></li>
    <li class="list-group-item"> 9:00h | Ducharse  <img class="star21" src="../assets/star.png" alt="star"></li>
    <li class="list-group-item"> 10:00h | Coger el autobús 47  <img class="star21" src="../assets/star.png" alt="star"></li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-header">
    <h5>Jueves</h5>
  </div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">8:00h | Desayunar  <img class="star21" src="../assets/star.png" alt="star"></li>
    <li class="list-group-item"> 9:00h | Ducharse  <img class="star21" src="../assets/star.png" alt="star"></li>
    <li class="list-group-item"> 10:00h | Coger el autobús 47  <img class="star21" src="../assets/star.png" alt="star"></li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-header">
    <h5>Viernes</h5>
  </div>
  <ul class="list-group list-group-flush">
     <li class="list-group-item">8:00h | Desayunar  <img class="star21" src="../assets/star.png" alt="star"></li>
    <li class="list-group-item"> 9:00h | Ducharse  <img class="star21" src="../assets/star.png" alt="star"></li>
    <li class="list-group-item"> 10:00h | Coger el autobús 47  <img class="star21" src="../assets/star.png" alt="star"></li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-header">
    <h5>Sábado</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">8:00h | Desayunar  <img class="star21" src="../assets/star.png" alt="star"></li>
    <li class="list-group-item"> 9:00h | Ducharse  <img class="star21" src="../assets/star.png" alt="star"></li>
    <li class="list-group-item"> 10:00h | Coger el autobús 47  <img class="star21" src="../assets/star.png" alt="star"></li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-header">
    <h5>Domingo</h5>
  </div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">8:00h | Desayunar  <img class="star21" src="../assets/star.png" alt="star"></li>
    <li class="list-group-item"> 9:00h | Ducharse  <img class="star21" src="../assets/star.png" alt="star"></li>
    <li class="list-group-item"> 10:00h | Coger el autobús 47  <img class="star21" src="../assets/star.png" alt="star"></li>
  </ul>
</div>
 </div>
        
      
     

    





  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
}; */
</script>
<style lang="scss">
.container{
    margin-top: 50px;
    .card{
        border: solid;
        margin:10px;

    }
    .form-check-input{
        margin-left: 200px;
    }
    h1{
      font-family: 'Acme', sans-serif;
      font-size: 30px;
      margin-bottom: 20px;
      font-weight: bolder;
      
    }
    h5{
    font-family: 'Acme', sans-serif;
      font-size: 20px;
      font-weight: bolder;

    }
    .img {
  
    height: 200px;
    width: 200px;
      
    }
    .btn {
      margin: 10px;
      height: 50px;
      width: 400px;
      background-color: #a4ebf3;
      
    }
    .star21{
        height: 20px;
        width: 20px;
        margin-left: 235px;
    }
    .link-dark{
    font-family: 'Acme', sans-serif;
      font-size: 20px;
      font-weight: bolder;
      margin-right: 1050px;
    }
 
} 
</style>>
