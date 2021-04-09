<template>
    <div class="acceso">
        <div class="usuario">
        <router-link to="login-usuario"><img class="user" src="../assets/OIP.png"></router-link>
        <figcaption>Usuario</figcaption>
        </div>
        <div class="administrador">
        <router-link to="login-admin"><img class="admin" src="../assets/OIP2.png"></router-link>
        <figcaption>administrador</figcaption>
        </div>
    </div>
</template>

<style scoped>

.acceso{
    display: flex;
    justify-content: space-around;
    padding-top: 20vh;
}

figcaption{
    padding-top: 1.5vh;
}

.user{
    width: 20vw;
    height: 30vh;
}

.admin{
    width: 20vw;
    height: 30vh;
}

@media only screen and (max-width: 600px){
    .user{
    width: 30vw;
    height: 25vh;
    }
    .admin{
    width: 30vw;
    height: 25vh;
    }
}
</style>>



