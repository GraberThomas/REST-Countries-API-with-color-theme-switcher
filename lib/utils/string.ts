export function numberWithComma(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function getStringNativeName(nativeName: {
    [key: string]: { official: string; common: string }
}) {
    return Object.keys(nativeName)
        .map((key) => {
            return nativeName[key].common
        })
        .join(', ')
}

export function getStringCurrency(currencies: {
    [key: string]: { name: string; symbol: string }
}) {
    return Object.keys(currencies)
        .map((key) => {
            return `${currencies[key].name}`
        })
        .join(', ')
}

export function getStringLanguage(languages: { [key: string]: string }) {
    return Object.keys(languages)
        .map((key) => {
            return `${languages[key]}`
        })
        .join(', ')
}
