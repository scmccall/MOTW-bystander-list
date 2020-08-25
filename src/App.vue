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
              <a href="/create">
                Create new Bystander
              </a>
            </li>
            <li>
              <a href="/view">
                List all Bystanders
              </a>
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


    <div id="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/create">Create Bystander</router-link></li>
        <li><router-link to="/view">List all Bystanders</router-link></li>
        <li><router-link to="/edit">Edit Existing Bystander</router-link></li>
      </ul>
    </div>
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
