<template>
  <v-row class="py-4 align-end">
    <v-col cols="12" md="7">
      <v-btn
        variant="tonal"
        color="primary"
        class="d-flex ml-auto mb-1"
        size="small"
        prepend-icon="mdi-eye-outline"
        @click="toggleMaskNumber"
      >
        {{ isMasked ? 'Show' : 'Hide' }} Card Number
      </v-btn>
      <v-carousel
        :continuous="false"
        :show-arrows="false"
        height="300"
        hide-delimiter-background
        v-model="currentCard"
      >
        <v-carousel-item v-for="(card, i) in $cardsStore.cards" :key="i">
          <CreditCard
            :cardHolder="card.cardHolder"
            :cardNumber="card.cardNumber"
            :expiry="card.expiry"
            :isMasked="isMasked"
            :selectedOption="selectedAction"
          />
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="12" md="4">
      <CardActions v-model="selectedAction" />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import CreditCard from './CreditCard.vue'
import CardActions from './CardActions.vue'
import { ref, watch } from 'vue'
import { useCardsStore } from '@/stores/cards'

/**
 * Component to credit/debit card section
 * @category Cards
 * @component
 * @example <caption>Cards usage (see code)</caption>
 * <CreditCardsView />
 */

// State to determine if the card number is masked or not
const isMasked = ref(true)
// State to determine selected option for card.
const selectedAction = ref(null)
const currentCard = ref(0)

// Toggle function
const toggleMaskNumber = () => {
  isMasked.value = !isMasked.value
}

//Reset state on card change.
watch(currentCard, () => {
  selectedAction.value = null
})

const $cardsStore = useCardsStore()
</script>

<style scoped lang="scss">
.credit-cards-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
