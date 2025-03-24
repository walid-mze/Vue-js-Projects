<template>
  <div class="library">
    <header class="library-header" >
      <h1>University Library Management</h1>
      <div class="search-bar">
        <h4>filter by title or author </h4>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search by title or author..."
          @input="handleSearch"
        >
      </div>
      <div class="view-controls">


      </div>
      <div class="filters">
        <h4>filter by status </h4>

        <select v-model="statusFilter" @change="applyFilters">
          <option value="all">All </option>
          <option value="available">Available</option>
          <option value="borrowed">Borrowed</option>
        </select>
      </div>
    </header>

    <main :class="['library-content', viewMode]">
      <div>
        <h1>liste de livres dans la bibliotheque </h1>
      </div>

      <table  >
        <tbody>
          <div class="hhh">
            <td>image </td>
            <td>Title</td>
            <td>Author</td>
            <td>Category</td>
            <td>Status</td>
            <td>Actions</td>
          </div>
        </tbody>
        <tbody>
          <tr v-for="book in filteredBooks" :key="book.id">
            <td>
              <div class="book-title-cell">
                <img :src="book.cover" :alt="book.title" class="small-cover">
                {{ book.title }}
              </div>
            </td>
            <td>{{ book.author }}</td>
            <td>{{ book.category }}</td>
            <td>
              <span class="status" :class="book.status">
                {{ book.status.charAt(0).toUpperCase() + book.status.slice(1) }}
              </span>
            </td>
            <td>
              <button @click="viewBookDetails(book)" class="details-btn">View Details</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
import booksData from '@/data/books.json'

export default {
  name: 'Library',
  data() {
    return {
      books: booksData.books,
      searchQuery: '',
      filterbynm:"",
      statusFilter: 'all',
      viewMode: 'list', 
      filteredBooks: []
    }
  },
  created() {
    this.filteredBooks = this.books
  },
  methods: {
    handleSearch() {
      this.applyFilters()
    },
    applyFilters() {
      this.filteredBooks = this.books.filter(book => {
        const matchesSearch = 
          book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(this.searchQuery.toLowerCase())
        
        const matchesStatus = this.statusFilter === 'all' || book.status === this.statusFilter

        return matchesSearch && matchesStatus
      })
    },
    viewBookDetails(book) {
      this.$router.push(`/book/${book.id}`)
    }
  }
}
</script>

<style scoped>
.library {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}



.library-header h1 {
  color: #0c0c0c;
  margin-bottom: 20px;
  text-align: center;
}

.search-bar {
  margin-bottom: 20px;
  text-align: center;
}

.search-bar input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
}

.view-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.view-controls button {
  padding: 8px 16px;
  border: 1px solid #42b983;
  background: white;
  color: #42b983;
  border-radius: 4px;
  cursor: pointer;
}

.view-controls button.active {
  background: #42b983;
  color: white;
}

.filters {
  text-align: center;
  margin-bottom: 20px;
}

.filters select {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}



.book-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  transition: transform 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.book-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.book-info {
  padding: 15px;
}

.book-info h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.1em;
}

.author {
  color: #666;
  margin: 5px 0;
  font-size: 0.9em;
}

.category {
  font-size: 0.9em;
  margin: 5px 0;
}

.books-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.books-table th,
.books-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.books-table th {
  font-weight: 600;
  color: #2c3e50;
}

.book-title-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}

.small-cover {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
}

.status {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9em;
  font-weight: 500;
}

.status.available {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.status.borrowed {
  background-color: #ffebee;
  color: #c62828;
}

.details-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}


.library-header {
  margin-bottom: 30px;
  background-color: #ffffff;
}
h4{
  color: #0c0c0c;
}
.hhh{
  display: flex;
  gap: 40px;
}

</style> 