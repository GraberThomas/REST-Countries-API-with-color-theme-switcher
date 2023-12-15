'use server'

import { CountryDetail, CountryGeneral } from '@/lib/api/Countries'

export const fetchAllcountries = async () => {
    const url =
        'https://restcountries.com/v3.1/all?fields=name,continents,maps,capital,flags,population'
    const res = await fetch(url)
    return (await res.json()) as CountryGeneral[]
}

export const fetchCountryDetail = async (name: string) => {
    const url = `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,region,subregion,population,capital,currencies,languages,tld,flags,borders`
    const res = await fetch(url)
    return (await res.json()) as CountryDetail[]
}

export const fetchNameByCode = async (code: string): Promise<string> => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    const res = await fetch(url)
    const country = (await res.json()) as CountryDetail[]
    return country[0].name.common
}
