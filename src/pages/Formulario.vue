<template>
  <v-container class="mt-2">
    <h2>Formulario</h2>
    <v-divider></v-divider>
    <v-form style="max-width: 800px" ref="form">
      <!-- <div class="mb-5">
        <label for="myNombre">Nombre completo : </label
        ><input type="text" id="myNombre" v-model="userInfo.name" />
      </div> -->
      <div>
        <v-text-field
          dense
          color="secondary"
          label="Nombre Completo"
          outlined
          :rules="nameRules"
          v-model="userInfo.name"
        ></v-text-field>
      </div>

      <!-- <div class="mb-5">
          <label for="password">Password : </label
          ><input type="password" id="password" v-model="userInfo.password" />
        </div> -->
      <div>
        <v-text-field
          dense
          color="secondary"
          label="Contrasena"
          :rules="passwordRules"
          outlined
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          v-model="userInfo.password"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </div>

      <!-- <div class="mb-5">
          <label for="edad">edad : </label
          ><input type="number" id="edad" v-model="userInfo.age" />
        </div> -->
      <div>
        Edad {{ userInfo.age }}
        <v-slider
          color="secondary"
          v-model="userInfo.age"
          :thumb-size="24"
          thumb-label
        ></v-slider>
      </div>

      <!-- <div class="mb-5">
          <p>
            <label for="Femenino">Femenino</label
            ><input
              id="Femenino"
              type="radio"
              value="Femenino"
              name="gender"
              v-model="userInfo.gender"
            />
          </p>
          <p>
            <label for="Masculino">Masculino</label
            ><input
              type="radio"
              id="Masculino"
              value="Masculino"
              name="gender"
              v-model="userInfo.gender"
            />
          </p>
        </div> -->
      <div>
        <v-radio-group v-model="userInfo.gender" row>
          <v-radio label="Femenino" value="Femenino" color="red"></v-radio>
          <v-radio label="Masculino" value="Masculino" color="blue"></v-radio>
          <v-radio label="Otro" value="Otro" color="green"></v-radio>
        </v-radio-group>
      </div>

      <p>Entradas:</p>

      <!-- {{fase}}<input type="checkbox" :value="fase" v-model="userInfo.entradas"> -->
      <v-row>
        <v-col cols="2" v-for="(fase, j) in torneo" :key="j + 'fase'">
          <v-checkbox
            class="pa-0 ma-0"
            color="secondary"
            v-model="userInfo.entradas"
            :label="fase"
            :value="fase"
          ></v-checkbox>
        </v-col>
      </v-row>

      <!-- Equipo:<select v-model="userInfo.equipo">
        <option
          :value="equipo.team"
          v-for="equipo in equipos"
          :key="equipo.code"
        >
          {{ equipo.team }}
        </option>
      </select> -->

      <v-select
        dense
        color="secondary"
        :items="equipos"
        label="Equipo"
        outlined
        item-text="team"
        item-value="team"
        item-color="secondary"
        v-model="userInfo.equipo"
      ></v-select>

      <div>
        <v-switch
          class="ma-0 pa-0"
          v-model="userInfo.terminos"
          :rules="[(v) => !!v || 'Debes aceptar terminos y condiciones']"
          label="Acepto terminos y condiciones"
          color="secondary"
        ></v-switch>
        <v-switch
          class="ma-0 pa-0"
          v-model="userInfo.publicidad"
          label="Quiero recibir informaci&oacute;n y spam"
          color="secondary"
        ></v-switch>
      </div>
      <p>V-model</p>
      <v-textarea outlined v-model="comments"></v-textarea>

      <p>Methods</p>
      <v-textarea
        outlined
        @input="updateComments"
        :value="comments"
      ></v-textarea>

      <v-btn small class="secondary" @click="enviar()">Enviar</v-btn>
    </v-form>
    {{ comments }}
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      nameRules: [
        (v) => !!v || "El campo es obligatorio",
        (v) => v.length >= 3 || "Tu nombre debe ser mas largo",
      ],
      passwordRules: [
        (v) => v.length >= 8 || "La contrasena debe tener mas de 8 caracteres",
      ],
      torneo: [
        "Primera fase",
        "Segunda Fase",
        "Octavos Final",
        "Cuartos Final",
        "Semifinales",
        "Final",
      ],
      showPassword: false,
      userInfo: {
        name: "",
        password: "",
        age: null,
        gender: "",
        entradas: [],
        equipo: [],
        terminos: false,
        publicidad: false,
      },
    };
  },
  computed: {
    equipos() {
      return this.$store.getters.getTeams;
    },
    comments: {
      get() {
        return this.$store.getters.getComments;
      },
      set(value) {
        this.$store.dispatch("updateComments", value);
      },
    },
  },
  methods: {
    enviar() {
      console.log();
      if (this.$refs.form.validate()) {
        this.$refs.form.$el.submit();
      }
      //
    },
    updateComments(value) {
      this.$store.dispatch("updateComments", value);
    },
  },
};
</script>