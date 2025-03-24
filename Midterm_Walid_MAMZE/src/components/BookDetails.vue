<template>
  <div class="book-details" v-if="book">
    <div class="book-container">
      <div class="book-image">
        <img :src="book.cover" :alt="book.title">
      </div>
      <div class="book-info">
        <h1>{{ book.title }}</h1>
        <h2>{{ book.author }}</h2>
        <p class="category">{{ book.category }}</p>
        <p class="status" :class="book.status">Status: {{ book.status }}</p>
        <div class="details">
          <p><strong>ISBN:</strong> {{ book.isbn }}</p>
          <p><strong>Published:</strong> {{ book.publishedDate }}</p>
          <p><strong>Publisher:</strong> {{ book.publisher }}</p>
          <p><strong>Pages:</strong> {{ book.pages }}</p>
        </div>
        <div class="description">
          <h3>Description</h3>
          <p>{{ book.description }}</p>
        </div>
        <button 
          :class="book.status === 'available' ? 'borrow' : 'return'"
          @click="toggleBookStatus"
        >
          {{ book.status === 'available' ? 'Borrow Book' : 'Return Book' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import booksData from '@/data/books.json'

export default {
  name: 'BookDetails',
  data() {
    return {
      book: null
    }
  },
  created() {
    const bookId = parseInt(this.$route.params.id)
    this.book = booksData.books.find(book => book.id === bookId)
    
    if (!this.book) {
      this.$router.push('/')
    }
  },
  methods: {
    toggleBookStatus() {
      this.book.status = this.book.status === 'available' ? 'borrowed' : 'available'
    }
  }
}
</script>

<style scoped>


.book-container {
  display: flex;
  gap: 40px;
  padding: 30px;
  border-radius: 8px;
}

.book-image img {
  max-width: 300px;
  height: auto;
  border-radius: 4px;
}


.book-info h1 {
  margin: 0 0 10px 0;
}

.book-info h2 {
  margin: 0 0 20px 0;
}

.category {
  margin: 10px 0;
}

.status {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
  margin: 10px 0;
}




.details {
  padding: 20px;
}

.details p {
  margin: 10px 0;
}

.description {
  margin: 20px 0;
}

.description h3 {
  margin-bottom: 10px;
}

.description p {
  line-height: 1.6;
}

button {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 20px;
}





</style> 