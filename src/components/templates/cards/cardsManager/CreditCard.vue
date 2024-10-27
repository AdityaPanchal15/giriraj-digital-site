<template>
  <v-card
    class="credit-card"
    :color="selectedOptionColors[selectedOption - 1] || '#0c3f62'"
    dark
    rounded="2"
  >
    <div
      class="bank-logo"
      :class="selectedOption ? 'justify-space-between' : 'justify-end'"
    >
      <v-icon
        v-if="selectedOption"
        :icon="selectedOptionIcon[selectedOption - 1]"
      ></v-icon>
      <img height="20" :src="bankLogo" />
    </div>
    <v-row class="mt-14" no-gutters>
      <v-col cols="8">
        <v-card-text>
          <div class="card-header">
            <p class="text-h5">{{ cardHolder }}</p>
            <p>{{ displayNumber }}</p>
          </div>
          <div class="card-details">
            <p><b>Valid Till:</b> {{ expiry }}</p>
            <p><b>CVV:</b> ••••</p>
          </div>
        </v-card-text>
      </v-col>
      <v-col cols="4" class="d-flex justify-center align-end mb-5">
        <img width="60" :src="masterCardLogo" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>
import bankLogo from '@/assets/images/hdfc-bank-logo.png'
import masterCardLogo from '@/assets/images/master-card.png'
import { computed, defineProps, ref } from 'vue'

/**
 * Component to show credit/debit card
 * @category Cards
 * @component
 * @example <caption>Cards usage (see code)</caption>
 * <CreditCard :cardHolder="cardHolder" :cardNumber="cardNumber" :expiry="expiry" :isMasked="isMasked" :selectedOption="selectedOption" />
 */

interface CardProps {
  cardHolder: string
  cardNumber: string
  expiry: string
  isMasked: boolean
  selectedOption: number
}

const props = defineProps<CardProps>()
const selectedOptionColors = ['#6a94a5', '#6a94a5', '#0fa1db', '#0fa1db']
const selectedOptionIcon = ['mdi-lock', 'mdi-archive', 'mdi-check', 'mdi-gpay']

// Computed property to display masked or unmasked number
const displayNumber = computed(() => {
  return props.isMasked
    ? '•••• •••• •••• ' + props.cardNumber.slice(-4)
    : props.cardNumber.match(/.{1,4}/g)?.join(' ')
})
</script>

<style scoped>
.credit-card {
  height: 100%;
}
.card-header {
  font-size: 18px;
  margin-bottom: 10px;
}
.card-details {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
.bank-logo {
  display: flex;
  margin: 1rem 1rem 0 1rem;
}
</style>
