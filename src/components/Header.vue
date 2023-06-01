<template>
  <nav class="navbar navbar-dark bg-dark">
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/" class="nav-link" active-class="active" exact
          >Home</router-link
        >
      </li>
      <li class="nav-item">
        <!-- <a class="nav-link" href="/mamiferos">Mam&iacute;feros</a> -->
        <router-link to="/matchs" class="nav-link" active-class="active"
          >Partidos</router-link
        >
      </li>
      <li class="nav-item">
        <!-- <a class="nav-link" href="/reptiles">Reptiles</a> -->
        <router-link to="/table" class="nav-link" active-class="active"
          >Tabla de posiciones</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/stats" class="nav-link" active-class="active"
          >Estadísticas</router-link
        >
      </li>
    </ul>
     <span class="text-primary">{{ nombreUsuario }}</span>
  </nav>
</template>

<script>
export default {
  computed: {
    nombreUsuario() {
      return this.$store.getters.nombreInverso;
    },
  },
};
</script>

<style scope>
.active{
    color: aliceblue;
}
</style>