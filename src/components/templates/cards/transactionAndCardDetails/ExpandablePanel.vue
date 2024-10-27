<template>
  <v-expansion-panel :value="value" class="mb-4">
    <v-expansion-panel-title
      expand-icon="mdi-chevron-down-circle"
      collapse-icon="mdi-chevron-up-circle"
      class="panel-title"
    >
      <v-icon :icon="icon" color="#5f9ea0"></v-icon>
      <span class="mx-2">{{ title }}</span>
    </v-expansion-panel-title>
    <v-expansion-panel-text class="panel-text">
      <slot />
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

/**
 * Component to reuse for expandable panel
 * @category Cards
 * @component
 * @example <caption>Cards usage (see code)</caption>
 * <ExpandablePanel :title="title" :icon="icon"/>
 */

const props = defineProps<{
  title: string
  icon: string
  value: number
}>()
</script>

<style scoped lang="scss">
.mb-4 {
  margin-bottom: 16px;
}
.panel-title {
  color: #0fa1db !important; /* Set the title color to blue */
}
.panel-text {
  border: 2px solid #f8f8f8;
  border-top-width: 0;
}
</style>
