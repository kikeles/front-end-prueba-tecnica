<template>
  <div id="app">
    <!-- barra de navegación -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/" style="font-family: 'Copperplate', 'Copperplate', Fantasy;">Tienda</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/juguetes" style="font-family: 'Lucida Console', Monospace, Cursive">Juguetes</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- mostrar las vistas -->
    <router-view></router-view>
  </div>
</template>

<script>
export default{
  mounted(){

  }
}
</script>
