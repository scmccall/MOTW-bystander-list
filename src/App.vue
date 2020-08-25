<template>
  <div id="app">
    <!-- Header -->
    <section class="hero is-warning is-bold">
      <div clas="hero-body">
        <div class="container">
          <h1 class="title">
            Bystander Tracker
          </h1>
          <h2 class="subtitle">
            for Monster of the Week games
          </h2>
        </div>
      </div>
      <div class="hero-foot">
        <nav class="tabs is-toggle is-medium is-fullwidth">
          <ul>
            <li class="is-active">
              <router-link to="/create">Create Bystander</router-link>
            </li>
            <li>
              <router-link to="/view">List all Bystanders</router-link>
            </li>
            <li>
              <a href="/">
                What is Monster of the week?
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    <router-view/>
    <footer class="footer">
      <div class="content has-centered-text">
        <p>
          Developed by <a href="http://smccall.com">Sam McCall</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
