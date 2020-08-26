<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar is-warning is-bold">
      <div class="navbar-brand">
        <a class="navbar-burger"
          :class="{ 'is-active' : navBarIsActive }"
          @click="navBarIsActive = !navBarIsActive">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <!-- Right-hand side -->
      <div class="navbar-menu is-warning"
          :class="{ 'is-active' : navBarIsActive }">
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link to="/">
              Home
            </router-link>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Bystanders
            </a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/create">
                Create new Bystander
              </router-link>
              <router-link class="navbar-item" to="/view">
                View all Bystanders
              </router-link>
            </div>
          </div>
          <div class="navbar-item">
            <router-link to="/what-is-motw">
              What is MOTW?
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <section class="hero is-warning">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Bystander Tracker
          </h1>
          <h2 class="subtitle">
            for Monster of the Week games
          </h2>
        </div>
      </div>
    </section>

    <!-- Component View -->
    <router-view/>

    <!-- Footer -->
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Developed by <a href="http://smccall.com">Sam McCall</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data : function () {
    return {
      navBarIsActive: false,
    }
  }
}
</script>

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

.hero {
  margin-bottom: 20px;
  padding: 10px;
}

.navbar {
  padding-right: 80px;
}
</style>
