<template>
  <div class="container">
    <h2>Copa mundo</h2>
    <h6>Frutas y Verduras</h6>
    <hr>
    <div class="row">
      <div class="col">
        <app-list-teams :listTeams="grupoA" name="Grupo A" />
      </div>
      <div class="col">
        <app-list-teams :listTeams="grupoB" name="Grupo B" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <app-list-teams :listTeams="grupoC" name="Grupo C" />
      </div>
      <div class="col">
        <app-list-teams :listTeams="grupoD" name="Grupo D" />
      </div>
    </div>
  </div>
</template>

<script>
import ListTeams from "../components/ListTeams";

export default {
  components: {
    appListTeams: ListTeams,
  },
  computed: {
    equipos() {
      return this.$store.getters.getTeams;
    },
    grupoA() {
      return this.$store.getters.getTeamByGroup(1);
    },
    grupoB() {
      return this.$store.getters.getTeamByGroup(2);
    },
    grupoC() {
      return this.$store.getters.getTeamByGroup(3);
    },
    grupoD() {
      return this.$store.getters.getTeamByGroup(4);
    },
  },
};
</script>