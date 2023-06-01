<template>
  <div class="container">
    <h2>Tabla de posiciones</h2>
    <h6>Frutas y Verduras</h6>
    <hr />
    <div class="row">
      <div class="col">
        <h4>Grupo A</h4>
        <table class="table">
          <thead>
            <tr>
              <th class="text-left">Equipo</th>
              <th class="text-left">Puntos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="equipo in posicionesA" :key="equipo.id">
              <td>{{ equipo.team }}</td>
              <td>{{ equipo.points }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col">
        <h4>Grupo B</h4>
        <table class="table">
          <thead>
            <tr>
              <th class="text-left">Equipo</th>
              <th class="text-left">Puntos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="equipo in posicionesB" :key="equipo.id">
              <td>{{ equipo.team }}</td>
              <td>{{ equipo.points }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4>Grupo C</h4>
        <table class="table">
          <thead>
            <tr>
              <th class="text-left">Equipo</th>
              <th class="text-left">Puntos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="equipo in posicionesC" :key="equipo.id">
              <td>{{ equipo.team }}</td>
              <td>{{ equipo.points }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col">
        <h4>Grupo D</h4>
        <table class="table">
          <thead>
            <tr>
              <th class="text-left">Equipo</th>
              <th class="text-left">Puntos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="equipo in posicionesD" :key="equipo.id">
              <td>{{ equipo.team }}</td>
              <td>{{ equipo.points }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["grupoA", "grupoB", "grupoC", "grupoD"]),
    posicionesA() {
      const copiaGrupo = [...this.grupoA];
      return copiaGrupo.sort((a, b) => b.points - a.points);
    },
    posicionesB() {
      const copiaGrupo = [...this.grupoB];
      return copiaGrupo.sort((a, b) => b.points - a.points);
    },
    posicionesC() {
      const copiaGrupo = [...this.grupoC];
      return copiaGrupo.sort((a, b) => b.points - a.points);
    },
    posicionesD() {
      const copiaGrupo = [...this.grupoD];
      return copiaGrupo.sort((a, b) => b.points - a.points);
    },
  },
};
</script>