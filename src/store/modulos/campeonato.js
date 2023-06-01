import teams from '../../assets/teams.json'

const moduloCampeonato = {
    state: () => ({
        teams,
        partidos: {
            grupoA: [],
            grupoB: [],
            grupoC: [],
            grupoD: [],
        }
    }),
    getters: {
        getMatch: state => {
            return state.partidos
        },
        getMatchs: state => grupo => {
            return state.partidos[grupo]
        },
        getTeams: state => {
            return state.teams
        },
        getTeamByGroup: (state) => (group) => {
            return state.teams.filter(equipo => equipo.group_id == group)
        },
        grupoA: state => {
            return state.teams.filter(equipo => equipo.group_id == 1)
        },
        grupoB: state => {
            return state.teams.filter(equipo => equipo.group_id == 2)
        },
        grupoC: state => {
            return state.teams.filter(equipo => equipo.group_id == 3)
        },
        grupoD: state => {
            return state.teams.filter(equipo => equipo.group_id == 4)
        }
    },
    mutations: {
        resultadoFinal: (state, payload) => {
            state.teams[payload.index].points += payload.points
            state.teams[payload.index].goals_for += payload.goals_for
            state.teams[payload.index].goals_against += payload.goals_against
            state.teams[payload.index].won += payload.won
            state.teams[payload.index].losses += payload.losses
            state.teams[payload.index].draws += payload.draws
        },
        addPlayedGame: (state, payload) => {
            if (state.partidos[payload.grupo].find(partido => partido.numberGame == payload.numberGame) == undefined) {
                state.partidos[payload.grupo].push({
                    numberGame: payload.numberGame,
                    score1: payload.score1,
                    score2: payload.score2
                })
            }


        }
    },
    actions: {
        finalizarPartido: (context, payload) => {
            context.commit('resultadoFinal', payload)
        }
    }
}

export default moduloCampeonato