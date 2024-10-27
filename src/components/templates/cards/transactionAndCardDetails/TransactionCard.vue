<template>
  <v-card class="transaction-item" flat>
    <div class="transaction-content">
      <v-avatar color="#c1e5e7">
        <v-icon
          size="large"
          color="#0fa1db"
          :icon="
            transaction.type === 'credit'
              ? 'mdi-tray-arrow-down'
              : 'mdi-tray-arrow-up'
          "
        ></v-icon>
      </v-avatar>

      <div class="transaction-details">
        <div class="transaction-title">{{ transaction.description }}</div>
        <div class="transaction-subtitle">{{ transaction.date }}</div>
        <div class="transaction-subtitle">{{ transaction.detail }}</div>
      </div>

      <div
        class="transaction-amount"
        :style="{ color: transaction.amount > 0 ? 'green' : 'red' }"
      >
        {{ transaction.amount > 0 ? '+' : '-' }} ${{
          Math.abs(transaction.amount)
        }}
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { ITransaction } from '@/models/cards.type'
import { defineProps } from 'vue'
/**
 * Component to display transaction details card
 * @category Cards
 * @component
 * @example <caption>Cards usage (see code)</caption>
 * <TransactionCard :transaction="transaction" />
 */

const props = defineProps<{ transaction: ITransaction }>()
</script>

<style scoped lang="scss">
.transaction-item {
  padding: 8px 0;
}

.transaction-content {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  justify-content: space-between;
}

.transaction-details {
  flex: 1;
}

.transaction-title {
  font-weight: bold;
}

.transaction-subtitle {
  color: #757575;
  font-size: 0.875rem;
}

.transaction-amount {
  font-weight: bold;
}
</style>
