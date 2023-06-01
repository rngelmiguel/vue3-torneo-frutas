<template>
  <div class="col-4">
    <div class="card border-dark mb-3" style="max-width: 360px">
      <div class="card-header">Partido</div>
      <div class="card-body text-dark text-center">
        <div class="row">
          <div class="col">
            <h3>
              <span
                class="badge badge-secondary"
                :style="`background-color:${equipo1.color}; color:black;`"
                >{{ equipo1.code }}</span
              >
            </h3>
            {{ equipo1.team }}
          </div>
          <div class="col">
            <button type="button" class="btn btn-light" @click="jugar" v-if="!partidoJugado">VS</button>
            <strong v-else>VS</strong>
          </div>
          <div class="col">
            <h3>
              <span
                class="badge badge-secondary"
                :style="`background-color:${equipo2.color}; color:black;`"
                >{{ equipo2.code }}</span
              >
            </h3>
            {{ equipo2.team }}
          </div>
        </div>
        <div class="row" v-if="partidoJugado">
          <div class="col">{{ partidoJugado.score1 }}</div>
          <div class="col">-</div>
          <div class="col">{{ partidoJugado.score2 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numberGame: Number,
    grupo: String,
    title: {
      type: String,
      default: "Fecha",
    },
    equipo1: {
      type: Object,
      default: () => ({
        color: "#FF0000",
        team: "Equipo 1",
        code: "EQ1",
        id: "0",
      }),
    },
    equipo2: {
      type: Object,
      default: () => ({
        color: "#0000FF",
        team: "Equipo 2",
        code: "EQ2",
        id: "1",
      }),
    },
  },
  computed: {
    partidos() {
      return this.$store.getters.getMatchs(this.grupo);
    },
    partidoJugado() {
      var partidoJugado = this.partidos.find(
        (partido) => partido.numberGame == this.numberGame
      );
      if (partidoJugado) {
        return partidoJugado;
      } else {
        return false;
      }
    },
  },
  methods: {
    jugar() {
      let scoreTeam1 = Math.floor(Math.random() * 3);
      let scoreTeam2 = Math.floor(Math.random() * 3);

      const payload1 = {
        index: this.equipo1.id - 1,
        goals_for: scoreTeam1,
        goals_against: scoreTeam2,
        won: 0,
        losses: 0,
        draws: 0,
        points: 0,
      };

      const payload2 = {
        index: this.equipo2.id - 1,
        goals_for: scoreTeam2,
        goals_against: scoreTeam1,
        won: 0,
        losses: 0,
        draws: 0,
        points: 0,
      };

      if (scoreTeam1 > scoreTeam2) {
        payload1.points += 3;
        payload1.won += 1;
        payload2.losses += 1;
      } else if (scoreTeam1 < scoreTeam2) {
        payload2.points += 3;
        payload2.won += 1;
        payload1.losses += 1;
      } else {
        payload1.points += 1;
        payload2.points += 1;
        payload1.draws += 1;
        payload2.draws += 1;
      }
      this.$store.dispatch("finalizarPartido", payload1);
      this.$store.dispatch("finalizarPartido", payload2);

      const resultMatch = {
        numberGame: this.numberGame,
        grupo: this.grupo,
        score1: scoreTeam1,
        score2: scoreTeam2,
      };

      this.$store.commit("addPlayedGame", resultMatch);

      //console.log(scoreTeam1, " ", scoreTeam2);
    },
  },
};
</script>