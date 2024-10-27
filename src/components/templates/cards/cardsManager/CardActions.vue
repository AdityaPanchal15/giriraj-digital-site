<template>
  <v-card class="card-actions" color="#c2e2ee" flat>
    <v-row class="text-center">
      <!-- Lock Card Option -->
      <v-col cols="6">
        <v-btn
          :color="modelValue === 1 ? 'green' : '#0fa1db'"
          icon
          @click="selectAction(1)"
        >
          <v-icon>{{
            modelValue === 1 ? 'mdi-check-bold' : 'mdi-lock'
          }}</v-icon>
        </v-btn>
        <p>Lock Card</p>
      </v-col>

      <!-- Archive Option -->
      <v-col cols="6">
        <v-btn
          :color="modelValue === 2 ? 'green' : '#0fa1db'"
          icon
          @click="selectAction(2)"
        >
          <v-icon>{{
            modelValue === 2 ? 'mdi-check-bold' : 'mdi-archive'
          }}</v-icon>
        </v-btn>
        <p>Archive</p>
      </v-col>

      <!-- Set as Default Option -->
      <v-col cols="6">
        <v-btn
          :color="modelValue === 3 ? 'green' : '#0fa1db'"
          icon
          @click="selectAction(3)"
        >
          <v-icon>{{
            modelValue === 3 ? 'mdi-check-bold' : 'mdi-check'
          }}</v-icon>
        </v-btn>
        <p>Set as Default</p>
      </v-col>

      <!-- Add to GPay Option -->
      <v-col cols="6">
        <v-btn
          :color="modelValue === 4 ? 'green' : '#0fa1db'"
          icon
          @click="selectAction(4)"
        >
          <v-icon>{{
            modelValue === 4 ? 'mdi-check-bold' : 'mdi-google-pay'
          }}</v-icon>
        </v-btn>
        <p>Add to GPay</p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

/**
 * Component to card actions
 * @category Cards
 * @component
 * @example <caption>Cards usage (see code)</caption>
 * <CardActions />
 */

const props = defineProps<{
  modelValue: number | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | null): void
}>()

// Function to select an action
const selectAction = (action: number) => {
  const newValue = props.modelValue === action ? null : action
  emit('update:modelValue', newValue)
}
</script>

<style scoped lang="scss">
.card-actions {
  width: 100%;
  padding: 55px 10px;
}

.v-btn {
  margin: 5px 0;
  align-items: center;
}
</style>
