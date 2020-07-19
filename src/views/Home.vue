<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>{{appName}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <img alt="Vue logo" src="../assets/logo.png" />
      Welcome to Your Vue.js App
    </ion-content>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  mixins: [],
  data() {
    return {
      appName: process.env.VUE_APP_NAME
    };
  },
  components: {
  }
};
</script>
