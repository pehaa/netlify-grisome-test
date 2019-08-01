<template>
  <div class="font-body border-b">
    <h2 class="text-2xl font-bold font-display" v-html="post.title" />
    <div v-html="post.excerpt" />
    <g-link class="inline-block bg-primary hover:bg-secondary text-white font-bold my-4 py-2 px-4 rounded" :to="post.path">
      En savoir plus
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
