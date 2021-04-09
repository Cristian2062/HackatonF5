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


  <img class="calendario" src="../assets/calendario.jpg" alt="...">





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
    .calendario {
  
    height: 500px;
    width: 500px;
      
    }
    .btn {
      margin: 10px;
      height: 50px;
      width: 400px;
      background-color: #a4ebf3;
      
    }
    .star1{
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
