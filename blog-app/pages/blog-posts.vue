<template>
  <div class="text-center">
    <div class="text-h1 pa-8 text-capitalize">
      blog posts
    </div>
    <v-row v-for="article in articles" :key="article.slug" class="blue-grey darken-4 my-4" justify="center" align="center">
      <v-col class="text-capitalize">
        {{article.slug}}
      </v-col>
        <v-col class="text-overline">
          By {{article.author ? article.author.name : 'Unknown'}}
          </v-col>
          <v-col>
        <v-btn class="primary" :to="`blog/${article.slug}`">
          Open
        </v-btn>
          </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles').fetch()

    return { articles }
  }
}
</script>