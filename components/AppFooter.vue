<template>
  <v-footer app>
    <v-row justify="center" no-gutters>
      <div class="text-overline">
        &copy; {{ new Date().getFullYear() }} SwarmP Org
      </div>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppFooter',
})
</script>
