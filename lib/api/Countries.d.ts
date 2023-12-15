export type CountryGeneral = {
    name: {
        common: string
        official: string
        nativeName: {
            [key: string]: {
                official: string
                common: string
            }
        }
    }
    continents: string[]
    capital: string[] | undefined
    flags: {
        svg: string
        png: string
    }
    population: number
}

export type CountryDetail = {
    name: {
        common: string
        official: string
        nativeName: {
            [key: string]: {
                official: string
                common: string
            }
        }
    }
    region: string | string[]
    subregion: string | string[]
    population: number
    capital: string[]
    currencies: {
        [key: string]: {
            name: string
            symbol: string
        }
    }
    languages: {
        [key: string]: string
    }
    tld: string[]
    flags: {
        svg: string
        png: string
    }
    borders: string[]
}
