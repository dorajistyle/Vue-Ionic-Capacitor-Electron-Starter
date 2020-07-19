# vue-ionic-electron-starter
It is a starter project to build a desktop application using Vue and Ionic through Electron desktop app packager. 

# Predecessors

## Install yarn
```sh
curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
```

## Install vue-cli
Tested @vue/cli version is 4.4.6.
```sh
yarn global add @vue/cli
```

## (Optional) Install serve
```sh
yarn global add serve 
```

##  Create vue project

```sh
vue create PROJECT-NAME
```

 ◉ Babel
 ◉ TypeScript
 ◉ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◉ CSS Pre-processors
 ◉ Linter / Formatter
 ◉ Unit Testing
 ◉ E2E Testing
 
 ## Create .env
 ```
 VUE_APP_NAME=PROJECT-NAME
 ```
 ## Create .env.dev
 ```
 VUE_APP_NAME=PROJECT-NAME DEV
 ```

 ## Install Ionic/vue
 ```sh
 yarn add  @ionic/core @ionic-native/core @ionic/pwa-elements @ionic/vue@0.0.9 core-js
 ```
 
 ## Install Capacitor
 ```sh
 yarn add @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android @capacitor/electron
 ```
 
 ## Add ./vue.config.js (https://cli.vuejs.org/config/#global-cli-config)
```javascript
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/'
}
```

## Update src/router/index.ts
```javascript
import { IonicVueRouter } from '@ionic/vue'; // add this
// Replace all 'VueRouter' to 'IonicVueRouter'

// For the offline routing, comment out history mode config of IonicVueRouter
  // mode: "history",
  // base: process.env.BASE_URL,
```

## Update src/main.ts
```javascript
import Ionic from "@ionic/vue";
import { defineCustomElements } from "@ionic/pwa-elements/loader";

Vue.use(Ionic);

Vue.config.ignoredElements = [/^ion-/];

......

defineCustomElements(window); // Add this into the last line.

```

## Update src/main.ts
```javascript
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
</style>
```

## Update public/index.html
 ```html
    // Add below inside of the head tag
    <meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
```

## Update src/App.vue
```javascript
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

```

## Update src/views/*.vue
```javascript
<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>HEADER-TITLE</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      CONTENT
    </ion-content>
  </div>
</template>
```

## Build and serve
```sh
rm -rf dist
yarn run build
serve dist/
```

## Capacitor
```sh
npx cap init --web-dir=dist
npx cap add ios
npx cap add android
npx cap add electron

npx cap open ios
npx cap open android
npx cap open electron

npx cap sync electron
```

## Electron Example (Windows executable)
```sh
yarn add electron-packager -g
electron-packager --help

cd electron
electron-packager . --platform=win32 --overwrite
zip -r PROJECT-NAME.zip PROJECT-NAME-win32-x64
mv PROJECT-NAME.zip /mnt/c/Users/USER-NAME/Downloads/
```

# Run Starter Project

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## References
* https://github.com/ionic-team/ionic-framework/tree/master/vue
* https://ionicframework.com/blog/announcing-the-ionic-vue-beta/
* https://medium.com/@dalezak/using-the-ionic-framework-with-webpack-capacitor-vue-ca8838121417

