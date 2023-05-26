export type Currency = 'USD' | 'EUR' | 'RUB'

export const currencyFormatter = (price: number, currency: Currency): string => {
  switch (currency) {
    case 'USD':
      return `${price.toLocaleString('en-US')} $`;
    case 'EUR':
      return `${price.toLocaleString('en-US')} €`;
    case 'RUB':
      
      return `${price.toLocaleString('ru')} ₽`;
    default:
      return `${price}${currency}`;
  }
};