<template>
  <div class="card">
    <h5 class="card-header">{{name}}</h5>
    <div class="card-body">
      <ul class="list-group">
        <li
          v-for="equipo in listTeams"
          :key="equipo.id"
          class="list-group-item d-flex align-items-center border-white"
        >
          <span class="badge mr-5" :style="`background-color:${equipo.color};`"
            >{{ equipo.code }}
          </span>
          {{ equipo.team }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        name:{
            type:String,
            default:"Title"
        },
        listTeams:{
            type:Array,
            default:() =>([])
        }
    }
};
</script>