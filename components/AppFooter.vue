<template>
  <v-footer app>
    <v-row justify="end" no-gutters>
      <div class="text-overline mr-2" style="text-transform: none !important">
        &copy; {{ new Date().getFullYear() }} The SwarmP Team
      </div>
      <v-tooltip top>
        <template #activator="{ on }">
          <v-btn icon :href="COMMIT_URL" target="_blank" v-on="on">
            <v-icon>{{ mdiGit }}</v-icon>
          </v-btn>
        </template>
        <code>{{ BUILD_TEXT }}</code>
      </v-tooltip>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiGit } from '@mdi/js'

const COMMIT_URL = `https://github.com/swarmp/swarmp.github.io/commit/${BUILD.git.hash}`
const BUILD_TEXT =
  BUILD.git.hash.substr(0, 7) + `:` + BUILD.git.branch + '@' + BUILD.hostname

export default Vue.extend({
  name: 'AppFooter',
  data: () => ({
    COMMIT_URL,
    BUILD_TEXT,
    mdiGit,
  }),
})
</script>
