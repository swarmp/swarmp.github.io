<template>
  <v-app>
    <app-bar v-model="drawer" />
    <app-nav v-model="drawer" />
    <v-main>
      <nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data: () => ({
    drawer: false,
  }),
})
</script>
