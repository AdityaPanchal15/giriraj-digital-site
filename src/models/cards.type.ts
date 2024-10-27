export interface ITransaction {
  description: string
  date: string
  detail: string
  amount: number
  type: 'debit' | 'credit'
}

export interface ICard {
  cardHolder: string
  cardNumber: string
  expiry: string
}
