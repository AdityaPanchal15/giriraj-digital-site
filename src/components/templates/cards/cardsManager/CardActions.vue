<template>
  <v-card class="card-actions" color="#c2e2ee" flat>
    <v-row class="text-center">
      <!-- Lock Card Option -->
      <v-col cols="6">
        <v-btn
          :color="selectedAction === 'lock' ? 'green' : '#0fa1db'"
          icon
          @click="selectAction('lock')"
        >
          <v-icon>{{
            selectedAction === 'lock' ? 'mdi-check-bold' : 'mdi-lock'
          }}</v-icon>
        </v-btn>
        <p>Lock Card</p>
      </v-col>

      <!-- Archive Option -->
      <v-col cols="6">
        <v-btn
          :color="selectedAction === 'archive' ? 'green' : '#0fa1db'"
          icon
          @click="selectAction('archive')"
        >
          <v-icon>{{
            selectedAction === 'archive' ? 'mdi-check-bold' : 'mdi-archive'
          }}</v-icon>
        </v-btn>
        <p>'Archive</p>
      </v-col>

      <!-- Set as Default Option -->
      <v-col cols="6">
        <v-btn
          :color="selectedAction === 'default' ? 'green' : '#0fa1db'"
          icon
          @click="selectAction('default')"
        >
          <v-icon>{{
            selectedAction === 'default' ? 'mdi-check-bold' : 'mdi-check'
          }}</v-icon>
        </v-btn>
        <p>'Set as Default</p>
      </v-col>

      <!-- Add to GPay Option -->
      <v-col cols="6">
        <v-btn
          :color="selectedAction === 'gpay' ? 'green' : '#0fa1db'"
          icon
          @click="selectAction('gpay')"
        >
          <v-icon>{{
            selectedAction === 'gpay' ? 'mdi-check-bold' : 'mdi-google-pay'
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

// State to track the currently selected action
const selectedAction = ref<string | null>(null)

// Function to select an action
const selectAction = (action: string) => {
  selectedAction.value = selectedAction.value === action ? null : action
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
