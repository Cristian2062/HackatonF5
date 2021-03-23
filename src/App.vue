<template>
  <div id="app" class="app">
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page">Home Admin</router-link>
        </li>
   
      </ul>
     
    </div>
  </div>
</nav>
  <router-view />
  
  </div>
 
</template>

<style lang="scss">
#color{ 
  font-weight: bold;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar{background-color: rgb(202, 229, 247);

li{
  margin-right: 40px;
}
}
#nav {
  padding: 30px;

} 
</style>
