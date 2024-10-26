<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>

<script setup lang="ts">
/**
 * App Block
 * @category Root
 * @component
 */
import AppLayout from './layouts/AppLayout.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped lang="scss"></style>
