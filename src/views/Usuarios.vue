<template>
  <div class="barra-busqueda">
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

<style scoped>

.usuarios{
  padding-top: 5vh;
  padding-left: 5vw;
  display: grid;
  grid-template-columns: 25vw 20vw 25vw 15vw;
  grid-template-rows: 40vh 40vh;
}

img{
  padding-top: 2vh;
  width: 25vw;
  height: 35vh;
  display: flex;
}

p{
  padding-top: 12vh;
}

@media only screen and (max-width:600px) {

  .usuarios{
    padding-top: 2vh;
    display: grid;
    grid-template-columns: 30vw 50vw;
    grid-template-rows: 20vh 20vh 20vh 20vh;
  }

  img{
    padding-top: 2vh;
    width: 25vw;
    height: 20vh;
    display: flex;
  }

  p{
    padding-top: 7vh;
  }
}
</style>