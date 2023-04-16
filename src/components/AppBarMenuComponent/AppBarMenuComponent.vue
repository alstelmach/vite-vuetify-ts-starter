<template>
  <v-navigation-drawer v-model="drawer" temporary>
    <drawer-component />
  </v-navigation-drawer>

  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-app-bar-title tag="h1">{{ title }}</v-app-bar-title>
    <v-spacer />
    <menu-content-component />
  </v-app-bar>
</template>

<script setup lang="ts">
import DrawerComponent from './components/DrawerComponent.vue';
import MenuContentComponent from './components/MenuContentComponent.vue';

import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';

const title = 'Robercik';
const drawer: Ref<boolean> = ref(false);

onMounted(() => {
  document.title = title;
});
</script>
