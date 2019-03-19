<template>
  <div id="app">
    <div class="nav">
      <h3 class="nav__title">Project Manager</h3>

      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/clients">Clients</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";
@import "~bootstrap/scss/bootstrap";
#app {
  .nav {
    display: flex;
    flex-direction: row;
    padding: 20px;
    background-color: var(--purple);
    color: var(--white);
    &__title {
      margin-right: auto;
    }
    a {
      padding-left: 20px;
      font-weight: 900;
      color: var(--white);
      text-decoration: none;
      &.router-link-exact-active {
        color: var(--white-active);
      }
    }
  }
}
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
