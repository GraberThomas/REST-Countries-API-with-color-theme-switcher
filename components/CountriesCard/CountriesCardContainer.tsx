import { CountryGeneral } from '@/lib/api/Countries'
import CountryCard from '@/components/CountriesCard/CountryCard'

type CountriesCardContainerProps = {
    countries: CountryGeneral[]
}

const CountriesCardContainer = ({ countries }: CountriesCardContainerProps) => {
    return (
        <div
            className={
                'lg:gap-13 mt-10 flex w-full flex-wrap items-center justify-center gap-14 lg:mt-12'
            }
        >
            {countries.map((country: CountryGeneral, index) => (
                <div
                    key={index}
                    className={'w-[80%] min-w-[150px] max-w-[265px]'}
                >
                    <CountryCard
                        name={country.name.common} // Use a fallback value if country.name is null/undefined
                        capital={country.capital || []} // Ensure country.capital isn't null/undefined
                        population={country.population} // Use a fallback value for population if null/undefined
                        regions={country.continents || []} // Ensure country.continents isn't null/undefined
                        imagePath={country.flags?.png}
                    />
                </div>
            ))}
        </div>
    )
}

export default CountriesCardContainer
