<template>
  <nav class="navbar">
    <div class="container">
      <h1 class="navbar-brand">Blog App</h1>
      <div class="navbar-links">
        <router-link to="/">Home</router-link>
        <router-link to="/add-post">Add Post</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  background-color: #4a76a8;
  color: white;
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  margin: 0;
  font-size: 1.5rem;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.navbar-links a:hover {
  text-decoration: underline;
}
</style> 