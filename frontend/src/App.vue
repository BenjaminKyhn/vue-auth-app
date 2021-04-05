<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-btn depressed to="/">Messages</v-btn>
      <v-btn depressed to="/NewMessage">New Message</v-btn>
      <v-spacer/>
      <v-btn depressed>Login</v-btn>

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
    //
  }),
};
</script>
