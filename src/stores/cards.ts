import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { cardsMockData, transactionsMockData } from '@/constants/mockData'
import type { ICard, ITransaction } from '@/models/cards.type'

export const useCardsStore = defineStore('cards', () => {
  const transactions = ref<ITransaction[]>(transactionsMockData)
  const cards = ref<ICard[]>(cardsMockData)

  const getTransactions = () => {
    return transactions.value
  }

  const getCards = () => {
    return cards.value
  }

  return {
    transactions,
    cards,
    getTransactions,
    getCards,
  }
})
