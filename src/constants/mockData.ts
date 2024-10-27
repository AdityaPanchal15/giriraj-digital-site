import type { ITransaction } from '@/models/cards.type'

export const transactionsMockData: Array<ITransaction> = [
  {
    description: 'Ordered Food',
    date: '20th May 2022',
    detail: 'Charges applied on credit card',
    amount: -150.5,
    type: 'debit',
  },
  {
    description: 'Ticket Refund',
    date: '20th May 2022',
    detail: 'Amount credited on debit card',
    amount: 50.5,
    type: 'credit',
  },
  {
    description: 'Interest credited',
    date: '20th May 2022',
    detail: 'Charges applied on credit card',
    amount: 5.5,
    type: 'credit',
  },
  {
    description: 'Electricity bill paid',
    date: '20th May 2022',
    detail: 'Charges applied on credit card',
    amount: -1050.5,
    type: 'debit',
  },
  {
    description: 'Interest credited',
    date: '20th May 2022',
    detail: 'Charges applied on credit card',
    amount: 5.5,
    type: 'credit',
  },
]

export const cardsMockData = [
  {
    cardHolder: 'John Watson',
    cardNumber: '1234567823459340',
    expiry: '12/24',
  },
  {
    cardHolder: 'Emma Johnson',
    cardNumber: '9876543212345678',
    expiry: '08/26',
  },
  {
    cardHolder: 'Liam Smith',
    cardNumber: '5432109876543210',
    expiry: '04/25',
  },
]
