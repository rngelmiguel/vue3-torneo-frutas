<template>
  <div>
    <app-header class="mb-3" />
    <div class="container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    "app-header": Header,
  },
};
</script>
