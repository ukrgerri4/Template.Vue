<template>
    <v-app id="inspire">
        <v-toolbar
            color="primary"
            dark
            dense
            fixed
            app
        >
            <v-spacer></v-spacer>
            <v-toolbar-title></v-toolbar-title>
        </v-toolbar>
        <v-content>
            <transition name="fade" mode="out-in">
                <v-container fluid fill-height>
                    <v-layout justify-center align-center>
                        <v-flex xs12 sm6 md4>
                            <v-card raised>
                                <v-card-title>
                                    <h3 class="headline">Are you lost?</h3>
                                </v-card-title>
                                <v-card-text>
                                    The page you are trying to show could not be found.
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn
                                        flat
                                        color="light-blue"
                                        @click.prevent="$router.push('/')"
                                    >Take me back</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </transition>
        </v-content>
    </v-app>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
  export default class NotFound extends Vue {
    constructor() {
      super();
    }
  }
</script>

<style scoped>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 0.25s;
    }

    .fade-leave-active {
        transition: opacity 0.25s;
        opacity: 0;
    }
</style>
