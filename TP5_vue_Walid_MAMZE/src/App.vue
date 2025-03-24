<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/add">Add job </router-link>
  </nav>
  <router-view/>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

nav {
  padding: 30px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e7e7e7;
}
nav a.router-link-exact-active {
  background-color: #004817;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
}
nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #2c3e50;
}

nav a:hover {
  color: #42b983;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
