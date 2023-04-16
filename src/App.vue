<template>
  <v-app :theme="theme">
    <app-bar-menu-component />

    <v-main>
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </router-view>
    </v-main>

    <v-overlay v-model="loading" app class="justify-center align-center">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>

    <footer-component />
  </v-app>
</template>

<script setup lang="ts">
import {
  computed,
  nextTick,
  onMounted,
  watch,
  type ComputedRef,
  type WritableComputedRef,
} from 'vue';

import { getUserConfigStore, getAppStateStore } from '@/store/';

import AppBarMenuComponent from '@/components/AppBarMenuComponent/AppBarMenuComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

const appStateStore = getAppStateStore();
const userConfigStore = getUserConfigStore();

const loading: WritableComputedRef<boolean> = computed({
  get: () => appStateStore.loading,
  set: loadingIncomingValue => appStateStore.setLoading(loadingIncomingValue),
});

const theme: ComputedRef<string> = computed(() =>
  userConfigStore.isDarkModeEnabled ? 'dark' : 'light'
);

watch(loading, async () => nextTick());

onMounted(() => {
  loading.value = false;
});
</script>

<style lang="scss">
@import '~/vuetify/lib/styles/settings';

html {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: map-get($grey, 'lighten-2') map-get($grey, 'base');
}

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.1);
  background-color: map-get($grey, 'lighten-2');
}

::-webkit-scrollbar-thumb {
  border-radius: 0.5rem;
  background-color: map-get($grey, 'base');
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

.v-application {
  overflow-y: auto;
}
</style>
