<template>
  <v-list nav>
    <template v-for="drawer in drawers" :key="drawer.title">
      <v-divider v-if="drawer.title === '-'" />
      <template v-else>
        <v-list-item
          v-if="!drawer.subDrawers"
          :disabled="!drawer.to"
          :prepend-icon="drawer.icon"
          :title="drawer.title"
          :to="drawer.to"
          link
        />
        <v-list-group v-else-if="drawer.subDrawers" v-model="drawer.active">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              :prepend-icon="drawer.icon"
              :title="drawer.title"
            />
          </template>
          <template
            v-for="subDrawer in drawer.subDrawers"
            :key="subDrawer.title"
          >
            <v-divider v-if="subDrawer.title === '-'" />
            <v-list-item
              v-else
              :disabled="!subDrawer.to"
              :prepend-icon="subDrawer.icon"
              :title="subDrawer.title"
              :to="subDrawer.to"
              link
            />
          </template>
        </v-list-group>
      </template>
    </template>
  </v-list>
</template>

<script setup lang="ts">
import drawers from './Drawers';
</script>
