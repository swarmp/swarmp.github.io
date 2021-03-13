<template>
  <v-app-bar app>
    <v-btn icon tile x-large @click="$emit('change', !value)">
      <v-avatar tile size="48">
        <img src="/icon.png" alt="site logo" />
      </v-avatar>
    </v-btn>
    <div class="px-2 text-h5">SwarmP</div>
    <v-spacer />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppBar',
  model: {
    prop: 'value',
    event: 'change',
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['value'],
})
</script>
