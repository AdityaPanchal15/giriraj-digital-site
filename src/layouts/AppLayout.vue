<template>
  <v-layout>
    <TheHeader />
    <v-main class="d-flex align-center justify-center">
      <slot />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
/**
 * Default layout
 * @category Layout
 * @component
 * @example <caption>Layout usage (see code)</caption>
 * <AppLayout />
 */
import TheHeader from '@/components/TheHeader.vue'
</script>
