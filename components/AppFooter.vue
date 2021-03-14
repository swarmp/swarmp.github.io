<template>
  <v-footer app>
    <v-row justify="center" no-gutters>
      <div class="text-overline" style="text-transform: none !important">
        &copy; {{ new Date().getFullYear() }} The SwarmP Team
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
