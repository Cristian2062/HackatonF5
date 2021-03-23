<template>
  <div class="barra-busqueda">
    <input type="search" placeholder="Buscador de Usuarios...">
    <div>
      <div class="usuarios">
        <router-link to="/cristian-martínez-alonso"><img src="../assets/OIP.png"></router-link>
        <p>Cristian Martínez Alonso</p>
        <router-link to="/jairo-garcia-chaves"><img src="../assets/OIP.png"></router-link>
        <p>Jairo Garcia Chaves</p>
        <router-link to="/edgar-costilla"><img src="../assets/OIP.png"></router-link>
        <p>Edgar Costilla</p>
        <router-link to="/francisco-javier-alcaraz-pérez"><img src="../assets/OIP.png"></router-link>
        <p>Francisco Javier Alcaraz Pérez</p>
      </div>
    </div>
  </div>
</template>

<style>

.barra-busqueda{
  padding-top: 3vh;
}

.usuarios{
  padding-top: 2vh;
  display: grid;
  grid-template-columns: 25vw 20vw 30vw 15vw;
  grid-template-rows: 40vh 40vh;
}

img{
  padding-top: 2vh;
  width: 25vw;
  height: 25vh;
  display: flex;
}

p{
  padding-top: 12vh;
}

@media only screen and (max-width:500px) {

  .usuarios{
    padding-top: 2vh;
    display: grid;
    grid-template-columns: 35vw 50vw;
    grid-template-rows: 20vh 20vh 20vh 20vh;
  }

  img{
    padding-top: 2vh;
    width: 30vw;
    height: 15vh;
    display: flex;
  }

  p{
    padding-top: 7vh;
  }
}
</style>