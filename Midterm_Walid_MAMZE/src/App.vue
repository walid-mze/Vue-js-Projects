<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  background-color: #d0f5ff;
  color: white;
  padding: 1rem;
  text-align: center;
}

header h1 {
  margin: 0;
  font-size: 2rem;
  color: rgb(71, 71, 71)
}

nav {
  padding: 1rem;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

nav a.router-link-exact-active {
  background-color: rgba(113, 113, 113, 0.2);
  color: rgb(71, 71, 71)
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


nav{
  border-radius:10px;
  margin-bottom:10px;
  padding:10px;
  display:flex;
}
</style>
