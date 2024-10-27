<template>
  <v-layout>
    <TheHeader />
    <v-main>
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
      <div class="px-4">
        <slot />
      </div>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
/**
 * Default layout
 * @category Layout
 * @component
 * @example <caption>Layout usage (see code)</caption>
 * <AppLayout />
 */
import TheHeader from '@/components/TheHeader.vue'
import { computed } from 'vue'

const route = useRoute()
const breadcrumbs = computed(() =>
  route.name && route.name.toString() !== 'Home'
    ? ['Home', route.name.toString()]
    : ['Home'],
) // Or route.path for the path
</script>
