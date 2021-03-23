<template>
    <div class="acceso">
        <div class="usuario">
        <a href=""> <img class="user" src="../assets/user.png"></a>
        </div>
        <div class="administrador">
        <a href=""> <img class="admin" src="../assets/user-admin.png"></a>
        <HelloAcceso/>
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



