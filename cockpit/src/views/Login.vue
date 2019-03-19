<template>
  <div id="login">

    <div class="panel">

      <form class="panel__form">
        <h3>You're welcome!</h3>

        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control" placeholder="Enter email" v-model="email" ref="emailInput">
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" placeholder="Password" v-model="password">
        </div>

        <!-- <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> -->

        <button type="submit" class="btn btn-primary">Login</button>
      </form>

    </div>

  </div>
</template>

<script>
export default {
  name: 'login',

  data() {
    return {
      email: '',
      password: ''
    }
  },

  mounted() {
    this.$refs.emailInput.focus()
  },

  methods: {

  }
}
</script>


<style lang="scss">
#login {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;

  .panel {
    width: calc(100vh * .7);
    // height: calc(100vh * .7);
    margin: auto;
    background-color: #f5f5f5;
    border: 1px solid #cecece;
    -webkit-box-shadow: 5px 5px 5px 0px #cecece;
       -moz-box-shadow: 5px 5px 5px 0px #cecece;
            box-shadow: 5px 5px 5px 0px #cecece;

    &__form {
      display: flex;
      flex-direction: column;
      padding: 30px;
    }
  }
}
</style>
