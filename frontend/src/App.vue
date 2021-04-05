<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-btn depressed>Messages</v-btn>
      <v-spacer/>
      <btn depressed>Login</btn>

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
