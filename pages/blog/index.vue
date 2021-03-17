<template>
  <v-container>
    <v-row>
      <template v-if="$fetchState.pending">
        <v-col cols="12">
          <v-card>
            <v-skeleton-loader type="article" />
          </v-card>
        </v-col>
      </template>
      <template v-else-if="$fetchState.error">
        <v-col cols="12">
          <app-error-card :error="$fetchState.error" @reload="$fetch" />
        </v-col>
      </template>
      <template v-else>
        <v-col v-for="(post, i) of posts" :key="i" cols="12">
          <v-card hover :to="post.path" nuxt>
            <v-card-title>{{ post.title }}</v-card-title>
            <v-divider />
            <v-card-text>{{ post.description }}</v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { IBlogPost } from '~/common/types'

export default Vue.extend({
  name: 'Blog',
  data: () => ({
    posts: [] as IBlogPost[],
  }),
  async fetch() {
    const posts: any = await this.$content('/blog').fetch()
    this.posts = posts
  },
  head() {
    return {
      title: 'Index',
    }
  },
})
</script>
