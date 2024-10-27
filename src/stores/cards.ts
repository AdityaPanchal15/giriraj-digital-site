import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { transactionsMockData } from '@/constants/mockData'
import type { ITransaction } from '@/models/cards.type'

export const useCardsStore = defineStore('cards', () => {
  const transactions = ref<ITransaction[]>(transactionsMockData)

  const getTransactions = () => {
    return transactions.value
  }

  return {
    transactions,
    getTransactions,
  }
})
