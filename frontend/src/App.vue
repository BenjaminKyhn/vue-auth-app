<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-btn depressed to="/">Messages</v-btn>
      <v-btn depressed to="/NewMessage">New Message</v-btn>
      <v-spacer/>
      <v-btn depressed to="/Register" v-if="!$store.state.token">Register</v-btn>
      <v-btn depressed v-if="!$store.state.token">Login</v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },

  data: () => ({
  }),
};
</script>
