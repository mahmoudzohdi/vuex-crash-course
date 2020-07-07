<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Users</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a:visited,
a:focus {
  color: #fff;
}
body {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e91e63;
}

#nav {
  padding: 30px;
  color: #fff;
}

#nav a {
  font-weight: bold;
  font-size: 18px;
}

#nav a.router-link-exact-active {
  padding: 3px 10px;
  border-radius: 3px;
  background-color: #fff;
  color: #E91E63;
}
</style>
