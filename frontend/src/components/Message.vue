<template>
    <v-flex sm8 offset-sm2 class="mt-10">
        <v-card>
            <v-toolbar dark>Message</v-toolbar>
            <v-card-text>{{messageBody}}</v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        data(){
            return {
                messageBody: ""
            }
        },
        async created(){
            this.messageBody = (await this.$store.dispatch('getMessage', this.$route.params.id)).data
        }
    }

</script>

<style scoped>

</style>