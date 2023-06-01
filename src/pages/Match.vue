<template>
  <div class="container">
    <h2>Partidos</h2>
    <h6>Frutas y Verduras</h6>
    <hr />
    <h4>Grupo A</h4>
    <div class="row">
      <app-partido
        v-for="(partido, i) in partidos"
        :key="i + 'GRUPO A'"
        :equipo1="grupoA[partido[0]]"
        :equipo2="grupoA[partido[1]]"
        grupo="grupoA"
        :numberGame="i"
      ></app-partido>
    </div>
    <h4>Grupo B</h4>
    <div class="row">
      <app-partido
        v-for="(partido, i) in partidos"
        :key="i + 'Grupo B'"
        :equipo1="grupoB[partido[0]]"
        :equipo2="grupoB[partido[1]]"
        grupo="grupoB"
        :numberGame="i"
      ></app-partido>
    </div>
    <h4>Grupo C</h4>
    <div class="row">
      <app-partido
        v-for="(partido, i) in partidos"
        :key="i + 'Grupo C'"
        :equipo1="grupoC[partido[0]]"
        :equipo2="grupoC[partido[1]]"
        grupo="grupoC"
        :numberGame="i"
      ></app-partido>
    </div>
    <h4>Grupo D</h4>
    <div class="row">
      <app-partido
        v-for="(partido, i) in partidos"
        :key="i + 'Grupo D'"
        :equipo1="grupoD[partido[0]]"
        :equipo2="grupoD[partido[1]]"
        grupo="grupoD"
        :numberGame="i"
      ></app-partido>
    </div>
  </div>
</template>

<script>
import Partido from "../components/Partido";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      partidos: [
        [0, 1],
        [2, 3],
        [0, 2],
        [1, 3],
        [0, 3],
        [1, 2],
      ],
    };
  },
  components: {
    "app-partido": Partido,
  },
  computed: {
    ...mapGetters(["grupoA", "grupoB", "grupoC", "grupoD", "getMatch"]),
  },
};
</script>

31124596