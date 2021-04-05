<template>
    <v-flex sm8 offset-sm2>
        <v-card class="mt-10 mb-10">
            <v-toolbar dark>
                New Message
            </v-toolbar>
            <v-form class="pa-5">
                <v-container>
                    <v-row>
                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="messageBody"
                                    label="Message"
                                    required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn @click="submit">submit</v-btn>
            </v-form>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        data() {
            return {
                messageBody: ""
            }
        },
        methods: {
            submit() {
                console.log(this.messageBody)
            }
        }
    }
</script>

<style scoped>

</style>