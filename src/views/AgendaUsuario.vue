<template>
  <div class="container">
      <h1>MIS TAREAS PARA...</h1>
      <div class="btn-group btn-group-lg" role="group" aria-label="...">
          <button type="button" class="btn btn-outline-dark">HOY</button>
        <button type="button" class="btn btn-outline-dark">LA SEMANA</button>
        <button type="button" class="btn btn-outline-dark">EL MES</button>
      </div>
<br>
<a href="#" class="link-dark">Fecha 23/03/2021</a>

<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img class="img" src="../assets/deporte.png" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">¡Hoy toca deporte!</h5>
        <p class="card-text">Es hora de ponerse la ropa y las zapatillas de deporte porque hoy vamos a hacer ejercicio. ¡¡A tope!! </p>
        <p class="card-text"><small class="text-muted">Desde 9:00h. hasta 10:30h.</small></p>
        
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          <label class="form-check-label" for="flexCheckChecked">
           ¡HECHO! :)  
         </label>
        </div>
         <img class="star" src="../assets/star.png" alt="star">
      </div>
    </div>
  </div>
</div>

    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img class="img" src="../assets/cocinar.png" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Hacer la comida</h5>
        <p class="card-text">Preparar la comida en la cocina con los ingredientes adecuados que puedes ver en tu tabla de nutrición. </p>
        <p class="card-text"><small class="text-muted">Desde 13:00h. hasta 14:30h.</small></p>
        
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          <label class="form-check-label" for="flexCheckChecked">
           ¡HECHO! :)  
         </label>
        </div>
         <img class="star" src="../assets/star.png" alt="star">
      </div>
    </div>
  </div>
</div>


 <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img class="img" src="../assets/dormir.jpg" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">¡A descansar!</h5>
        <p class="card-text">Es hora de irse a dormir, para poder tener las horas de sueño diarias que necesitamos. ¡Dulces sueños! </p>
        <p class="card-text"><small class="text-muted">Desde 23:00h. hasta 7:00h.</small></p>
        
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          <label class="form-check-label" for="flexCheckChecked">
           ¡HECHO! :)  
         </label>
        </div>
         <img class="star" src="../assets/star.png" alt="star">
      </div>
    </div>
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
    .star{
        height: 40px;
        width: 40px;
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
