<template>
  <article>
    <v-container>
      <v-row class="flex-column">
        <v-col>
    <v-btn color="info" @click="$router.go(-1)">
      Back
    </v-btn>
        </v-col>
        <v-col v-if=article.author>
          By {{article.author.name}}
          </v-col>
        <v-col>
  <p>Post last updated: {{ article.updatedAt }}</p>
        </v-col>
    <nuxt-content :document="article" />
      </v-row>
    </v-container>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  }
}
</script>