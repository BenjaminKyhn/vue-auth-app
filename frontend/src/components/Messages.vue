<template>
    <v-flex sm8 offset-sm2 mt-10>
        <v-card>
            <v-toolbar dark>
                Messages
            </v-toolbar>
            <div class="pa-5">
                <v-list>
                    <v-list-tile v-for="(message, index) in $store.state.messages" :key="index">
                        <div class="messageGroup">
                            <v-list-tile-content>
                                <v-list-item-title v-text="message.text" :to="'messages/' + index"></v-list-item-title>
                                <v-list-item-subtitle v-text="message.user"></v-list-item-subtitle>
                            </v-list-tile-content>
                        </div>
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
    .messageGroup {
        margin-bottom: 20px;
    }
</style>