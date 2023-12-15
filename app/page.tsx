'use client'
import { useEffect, useMemo, useState } from 'react'

import TopBar from '@/components/TopBar'
import CountrySelector from '@/components/input/CountrySelector'
import { CategoryCountry } from '@/lib/types/categoryCountry'
import { fetchAllcountries } from '@/lib/api/fetchCoutries'
import { CountryGeneral } from '@/lib/api/Countries'
import CountriesCardContainer from '@/components/CountriesCard/CountriesCardContainer'

export default function Home() {
    const [searchedCountry, setSearchedCountry] = useState<string>('')
    const [category, setCategory] = useState<CategoryCountry | null>(null)

    const [countries, setCountries] = useState<CountryGeneral[]>([])

    const filteredCountries: CountryGeneral[] =
        useMemo((): CountryGeneral[] => {
            return countries.filter((country: CountryGeneral) => {
                const categoryIncluded =
                    category !== null
                        ? country.continents.some((continent) =>
                              continent.includes(category)
                          )
                        : true
                const countryIncluded = country.name.common
                    .toLowerCase()
                    .includes(searchedCountry.toLowerCase())
                return categoryIncluded && countryIncluded
            })
        }, [searchedCountry, category, countries])

    useEffect(() => {
        const fetchCountries = async () => {
            return await fetchAllcountries()
        }

        fetchCountries().then((res: CountryGeneral[]) => {
            setCountries(res)
        })
    }, [])

    return (
        <main className={'px-4 lg:px-20'}>
            <CountrySelector
                setSearchedCountry={setSearchedCountry}
                setCategory={setCategory}
            />
            {filteredCountries && (
                <CountriesCardContainer countries={filteredCountries} />
            )}
        </main>
    )
}
