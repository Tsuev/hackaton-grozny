export const currencyFormatter = (price, currency) => {
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
