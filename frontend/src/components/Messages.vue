<template>
    <div>
        <h4 class="display-1">Messages</h4>
        <v-list>
            <v-list-tile v-for="(message, i) in messages" :key="i">
                <v-list-tile-content>
                    <v-list-item v-text="message"></v-list-item>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data(){
            return {
                messages: ["Hello", "Hi", "Derp"]
            }
        },
        async created(){
            this.messages = (await axios.get('http://localhost:3000/messages')).data
        }
    }
</script>

<style scoped>

</style>