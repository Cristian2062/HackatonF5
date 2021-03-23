<template>
    <div class="acceso">
        <div class="usuario">
        <router-link to="login-usuario"><img class="user" src="../assets/OIP.png"></router-link>
        </div>
        <div class="administrador">
        <router-link to="login-admin"><img class="admin" src="../assets/OIP2.png"></router-link>
        </div>
    </div>
</template>

<style>

.acceso{
    display: flex;
    justify-content: space-around;
    padding-top: 20vh;
}

.user{
    width: 30vw;
    height: 30vh;
}

.admin{
    width: 30vw;
    height: 30vh;
}

@media only screen and (max-width: 500px){
    .user{
    width: 25vw;
    height: 25vh;
    }
    .admin{
    width: 25vw;
    height: 25vh;
    }
}
</style>



