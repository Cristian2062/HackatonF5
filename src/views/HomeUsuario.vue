<template>
  <div class="container">
      <h1>¿Qué tengo que hacer ahora?</h1>
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img class="img" src="../assets/cocinar.png" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Hacer la comida</h5>
        <p class="card-text">Preparar la comida en la cocina con los ingredientes adecuados, que puedes ver en tu tabla de nutrición. </p>
        <p class="card-text"><small class="text-muted">Desde 13:00h. hasta 14:30h.</small></p>
      </div>
    </div>
    <div class="col-md-12">
    <button class="btn btn-warning" @click="showAlert">¡Hecho!:) <img class="star" src="../assets/star.png" alt="star"></button>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal('¡¡¡Enhorabuena!!! Has conseguido una estrella *');
    },
  },
};
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
      margin-bottom: 50px;
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
} 
</style>>
