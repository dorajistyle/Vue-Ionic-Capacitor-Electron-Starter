<template>
  <div id="app">
    <ion-app>
      <ion-vue-router main :animated="true" id="main-content" />
      <ion-menu-controller></ion-menu-controller>
      <ion-modal-controller></ion-modal-controller>
      <ion-toast-controller></ion-toast-controller>
      <ion-alert-controller></ion-alert-controller>
      <ion-loading-controller></ion-loading-controller>
      <ion-actionsheet-controller></ion-actionsheet-controller>
    </ion-app>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {}
};
</script>
<style src='@ionic/core/css/core.css'></style>
<style src='@ionic/core/css/ionic.bundle.css'></style>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
