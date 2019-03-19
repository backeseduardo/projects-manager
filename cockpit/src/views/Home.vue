<template>
  <div class="home container">
    <div class="home__content row">
      <div class="col">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss">
.home {
  &__content {
    min-height: calc(100vh - 73px);
    background-color: #f5f5f5;
  }
}
</style>
