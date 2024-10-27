<template>
  <v-card class="cards">
    <div class="tabs-container">
      <v-tabs v-model="tab" align-tabs="end" color="#0fa1db">
        <v-tab :value="1">Saved Cards</v-tab>
        <v-tab :value="2">GD Cards</v-tab>
      </v-tabs>
      <v-btn variant="flat" color="#0fa1db" size="small">
        <v-icon icon="mdi-plus"></v-icon>
        Add Card
      </v-btn>
    </div>

    <v-tabs-window v-model="tab">
      <div class="px-4">
        <template v-if="tab === 1">
          <v-row>
            <v-col cols="4">
              <PaymentDetails />
            </v-col>
            <v-col cols="8">
              <p class="py-4">Cards</p>
            </v-col>
          </v-row>
        </template>
        <template v-else>
          <div>GD Cards</div>
        </template>
      </div>
    </v-tabs-window>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PaymentDetails from './transactionAndCardDetails/PaymentDetails.vue'
/**
 * The card tabs block
 * @category cards
 * @component
 */

const tab = ref(1)
</script>

<style scoped lang="scss">
.tabs-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d3dbdd;
  padding: 0 2rem;
}
</style>
