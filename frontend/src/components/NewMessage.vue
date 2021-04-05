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
                                    label="Message"
                                    required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn>submit</v-btn>
            </v-form>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        name: "NewMessage"
    }
</script>

<style scoped>

</style>