<template>
  <div class="post-list">
    <h1 v-if="title" class="list-title">{{ title }}</h1>
    <div v-if="posts.length === 0" class="no-posts">
      No posts found.
    </div>
    <SinglePost v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue';

export default {
  name: 'PostList',
  components: {
    SinglePost
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.post-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem;
}

.list-title {
  margin-bottom: 1.5rem;
  color: #333;
}

.no-posts {
  text-align: center;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  color: #666;
}
</style> 