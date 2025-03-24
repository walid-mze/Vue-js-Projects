<template>
  <div class="post-card">
    <h2 class="post-title">{{ post.title }}</h2>
    <div class="post-tags">
      <span v-for="tag in post.tags" :key="tag" class="tag" @click="navigateToTag(tag)">
        #{{ tag }}
      </span>
    </div>
    <p class="post-content">{{ contentSnippet }}</p>
    <router-link :to="'/post/' + post.id" class="read-more">Read more</router-link>
  </div>
</template>

<script>
export default {
  name: 'SinglePost',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    contentSnippet() {
      return this.post.content.substring(0, 50) + (this.post.content.length > 50 ? '...' : '');
    }
  },
  methods: {
    navigateToTag(tag) {
      this.$router.push(`/tags/${tag}`);
    }
  }
}
</script>

<style scoped>
.post-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.post-title {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #333;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background-color: #e0e0e0;
  color: #555;
  font-size: 0.85rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.tag:hover {
  background-color: #d0d0d0;
}

.post-content {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.read-more {
  display: inline-block;
  color: #4a76a8;
  text-decoration: none;
  font-weight: 500;
}

.read-more:hover {
  text-decoration: underline;
}
</style> 