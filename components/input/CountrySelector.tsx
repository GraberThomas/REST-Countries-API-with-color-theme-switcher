import { CategoryCountry } from '@/lib/types/categoryCountry'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type CountrySelectorProps = {
    setSearchedCountry: (country: string) => void
    setCategory: (category: CategoryCountry | null) => void
}

const CountrySelector = ({
    setSearchedCountry,
    setCategory,
}: CountrySelectorProps) => {
    return (
        <div className={'lg:flex lg:justify-between'}>
            <div
                className={
                    'mt-7 flex items-center gap-4 rounded-lg bg-white py-3 pl-10 pr-4 shadow-card dark:bg-dark_blue lg:mt-10 lg:w-[500px]'
                }
            >
                <MagnifyingGlassIcon
                    className={'text-very_dark_blue opacity-30 dark:text-white'}
                    height={'1rem'}
                    width={'1rem'}
                />
                <input
                    type={'text'}
                    onChange={(val) => setSearchedCountry(val.target.value)}
                    placeholder={'Search for a country...'}
                    className={
                        'w-full bg-transparent placeholder:opacity-100 focus:outline-none'
                    }
                />
            </div>
            <div
                className={
                    'relative mt-10 w-[60%] overflow-hidden  rounded-lg  bg-white font-[600] shadow-card dark:bg-dark_blue lg:w-[230px]'
                }
            >
                <select
                    name={'country'}
                    id={'select_country'}
                    className={'w-[90%] bg-white py-4 pl-6 dark:bg-dark_blue'}
                    onChange={(val) => {
                        const value = val.target.value
                        setCategory(
                            value !== 'none' ? (value as CategoryCountry) : null
                        )
                    }}
                >
                    <option value={'none'}>Filter by Region</option>
                    {Object.values(CategoryCountry).map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default CountrySelector
