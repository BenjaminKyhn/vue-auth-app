<template>
    <v-flex sm8 offset-sm2 class="mt-10">
        <v-card>
            <v-toolbar dark>
                Login
            </v-toolbar>
            <v-form class="pa-5">
                <v-container>
                    <v-row>
                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="username"
                                    label="Username"
                                    required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="password"
                                    label="Password"
                                    required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn @click="login">login</v-btn>
            </v-form>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        methods: {
            async login() {
                this.$store.dispatch('login', {username: this.username, password: this.password})
            }
        }
    }
</script>

<style scoped>

</style>