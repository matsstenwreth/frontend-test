<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Text file upload project</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <div class="d-md-flex pa-6 justify-md-center">
        <v-form ref="form">
          <v-card class="pa-3" min-width="400" outline>
            <v-file-input counter truncate-length="15"></v-file-input>
            <v-btn color="success" class="mr-4" @click="validate">
              Submit
            </v-btn>
          </v-card>
        </v-form>
      </div>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {},

  data: () => ({ drawer: false }),
};
</script>
