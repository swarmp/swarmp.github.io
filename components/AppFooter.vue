<template>
  <v-footer app>
    <v-row justify="end" no-gutters>
      <div class="text-overline" style="text-transform: none !important">
        &copy; {{ new Date().getFullYear() }} The SwarmP Team
      </div>
      <div class="pl-2">
        <code>
          {{ build.git.branch }}:{{ build.git.hash }}@{{ build.hostname }}
        </code>
      </div>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppFooter',
  data: () => ({
    build: BUILD,
  }),
})
</script>
