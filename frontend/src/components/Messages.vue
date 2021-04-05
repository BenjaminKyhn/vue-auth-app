<template>
    <v-flex sm8 offset-sm2 mt-10>
        <v-card>
            <v-toolbar dark>
                Messages
            </v-toolbar>
            <div class="pa-5">
                <v-list>
                    <v-list-tile v-for="(message, i) in $store.state.messages" :key="i">
                        <v-list-tile-content>
                            <v-list-item v-text="message"></v-list-item>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </div>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        async created() {
            this.$store.dispatch('getMessages')
        }
    }
</script>

<style scoped>

</style>