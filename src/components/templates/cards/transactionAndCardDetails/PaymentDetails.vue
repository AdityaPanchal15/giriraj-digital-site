<template>
  <v-container class="transaction-list">
    <v-expansion-panels v-model="activePanel" color="#f8f8f8" flat>
      <!-- Card Details Section -->
      <ExpandablePanel :value="1" title="Card Details" icon="mdi-grid-large">
        <!-- Card details content goes here -->
        <p>Card details content can go here.</p>
      </ExpandablePanel>

      <!-- Today's Transactions Section -->
      <ExpandablePanel
        :value="2"
        title="Today's Transactions"
        icon="mdi-tune-variant"
      >
        <v-list>
          <TransactionCard
            v-for="(transaction, index) in $cardsStore.transactions"
            :key="index"
            :transaction="transaction"
          />
        </v-list>
      </ExpandablePanel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ExpandablePanel from './ExpandablePanel.vue'
import TransactionCard from './TransactionCard.vue'
import { useCardsStore } from '@/stores/cards'

/**
 * Component to payment details
 * @category Cards
 * @component
 * @example <caption>Cards usage (see code)</caption>
 * <PaymentDetails />
 */

const $cardsStore = useCardsStore()
const activePanel = ref(2)
</script>

<style scoped lang="scss"></style>
