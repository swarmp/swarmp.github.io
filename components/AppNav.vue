<template>
  <v-navigation-drawer :value="value" app @input="$emit('change', $event)">
    <v-list nav dense>
      <v-list-item v-for="(link, i) of links" :key="i" :to="link.to" nuxt>
        <v-list-item-avatar tile size="24">
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-overline" v-text="link.text" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiHome } from '@mdi/js'

export default Vue.extend({
  name: 'AppNav',
  model: {
    prop: 'value',
    event: 'change',
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['value'],
  data() {
    return {
      links: [{ to: '/', icon: mdiHome, text: 'Home' }],
    }
  },
})
</script>
