<template>
  <div class="container">
    <h2>Estadísticas</h2>
    <hr />
    <div>
      <h3>Grupo A</h3>
      <table class="table">
        <thead>
          <tr>
            <th class="text-left">Equipo</th>
            <th class="text-left">Puntos</th>
            <th class="text-left">Victorias</th>
            <th class="text-left">Empates</th>
            <th class="text-left">Derrotas</th>
            <th class="text-left">Goles a favor</th>
            <th class="text-left">Goles en contra</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="equipo in posicionesA" :key="equipo.id">
            <td>{{ equipo.team }}</td>
            <td>{{ equipo.points }}</td>
            <td>{{ equipo.won }}</td>
            <td>{{ equipo.draws }}</td>
            <td>{{ equipo.losses }}</td>
            <td>{{ equipo.goals_for }}</td>
            <td>{{ equipo.goals_against }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h3>Grupo B</h3>
      <table class="table">
        <thead>
          <tr>
            <th class="text-left">Equipo</th>
            <th class="text-left">Puntos</th>
            <th class="text-left">Victorias</th>
            <th class="text-left">Empates</th>
            <th class="text-left">Derrotas</th>
            <th class="text-left">Goles a favor</th>
            <th class="text-left">Goles en contra</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="equipo in posicionesB" :key="equipo.id">
            <td>{{ equipo.team }}</td>
            <td>{{ equipo.points }}</td>
            <td>{{ equipo.won }}</td>
            <td>{{ equipo.draws }}</td>
            <td>{{ equipo.losses }}</td>
            <td>{{ equipo.goals_for }}</td>
            <td>{{ equipo.goals_against }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h3>Grupo C</h3>
      <table class="table">
        <thead>
          <tr>
            <th class="text-left">Equipo</th>
            <th class="text-left">Puntos</th>
            <th class="text-left">Victorias</th>
            <th class="text-left">Empates</th>
            <th class="text-left">Derrotas</th>
            <th class="text-left">Goles a favor</th>
            <th class="text-left">Goles en contra</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="equipo in posicionesC" :key="equipo.id">
            <td>{{ equipo.team }}</td>
            <td>{{ equipo.points }}</td>
            <td>{{ equipo.won }}</td>
            <td>{{ equipo.draws }}</td>
            <td>{{ equipo.losses }}</td>
            <td>{{ equipo.goals_for }}</td>
            <td>{{ equipo.goals_against }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h3>Grupo D</h3>
      <table class="table">
        <thead>
          <tr>
            <th class="text-left">Equipo</th>
            <th class="text-left">Puntos</th>
            <th class="text-left">Victorias</th>
            <th class="text-left">Empates</th>
            <th class="text-left">Derrotas</th>
            <th class="text-left">Goles a favor</th>
            <th class="text-left">Goles en contra</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="equipo in posicionesA" :key="equipo.id">
            <td>{{ equipo.team }}</td>
            <td>{{ equipo.points }}</td>
            <td>{{ equipo.won }}</td>
            <td>{{ equipo.draws }}</td>
            <td>{{ equipo.losses }}</td>
            <td>{{ equipo.goals_for }}</td>
            <td>{{ equipo.goals_against }}</td>
          </tr>
        </tbody>
      </table>
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