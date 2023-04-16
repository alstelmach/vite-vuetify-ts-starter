<template>
  <v-btn icon="mdi-theme-light-dark" @click="userConfigStore.toggleTheme" />
</template>

<script setup lang="ts">
import { getUserConfigStore } from '@/store';
const userConfigStore = getUserConfigStore();
</script>
