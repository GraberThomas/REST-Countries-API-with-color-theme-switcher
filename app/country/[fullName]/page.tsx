import { CountryDetail } from '@/lib/api/Countries'
import { fetchCountryDetail, fetchNameByCode } from '@/lib/api/fetchCoutries'
import PreviousButton from '@/components/buttons/PreviousButton'
import { CountryFlagImage } from '@/components/images/CountryFlagImage'
import { cookies } from 'next/headers'
import {
    getStringCurrency,
    getStringLanguage,
    getStringNativeName,
    numberWithComma,
} from '@/lib/utils/string'
import Link from 'next/link'

type PageProps = {
    params: {
        fullName: string
    }
}

async function getTableBorderNames(borderNames: string[]): Promise<string[]> {
    return await Promise.all(
        borderNames.map(async (border) => await fetchNameByCode(border))
    )
}

function DetailLiElem({ title, value }: { title: string; value: string }) {
    return (
        <li>
            <span className={'font-[600]'}>{title}:</span> {value}
        </li>
    )
}

const Page = async ({ params }: PageProps) => {
    const country: CountryDetail = (
        await fetchCountryDetail(params.fullName)
    )[0]

    const borderNames: string[] = await getTableBorderNames(country.borders)

    return (
        <main
            className={
                'relative flex flex-col items-center lg:flex-row  lg:items-stretch lg:gap-20'
            }
        >
            <div className={'w-full max-w-[428px] lg:w-1/2 lg:max-w-[700px]'}>
                <CountryFlagImage
                    src={country.flags.png}
                    name={country.name.common}
                    className={'mb-14 lg:mb-0'}
                />
            </div>
            <div className={'lg:flex lg:flex-col lg:justify-between lg:py-5'}>
                <h2 className={'mb-8 text-2xl font-[800] lg:mb-0'}>
                    {country.name.common}
                </h2>
                <div className={'lg:flex lg:gap-4 lg:text-sm'}>
                    <ul className={'mb-14 flex flex-col gap-3 lg:mb-0'}>
                        <DetailLiElem
                            title={'Native name'}
                            value={getStringNativeName(country.name.nativeName)}
                        />
                        <DetailLiElem
                            title={'Population'}
                            value={numberWithComma(country.population)}
                        />
                        <DetailLiElem
                            title={'Region'}
                            value={
                                typeof country.region === 'string'
                                    ? country.region
                                    : country.region.join(', ')
                            }
                        />
                        <DetailLiElem
                            title={'Sub Region'}
                            value={
                                typeof country.subregion === 'string'
                                    ? country.subregion
                                    : country.subregion.join(', ')
                            }
                        />
                        <DetailLiElem
                            title={'Capital'}
                            value={country.capital.join(', ')}
                        />
                    </ul>
                    <ul className={'mb-14 flex flex-col gap-3 lg:mb-0'}>
                        <DetailLiElem
                            title={'Top Level Domain'}
                            value={country.tld.map((tld) => tld).join(', ')}
                        />
                        <DetailLiElem
                            title={'Currencies'}
                            value={getStringCurrency(country.currencies)}
                        />
                        <DetailLiElem
                            title={'Languages'}
                            value={getStringLanguage(country.languages)}
                        />
                    </ul>
                </div>
                <div className={' lg:flex lg:items-center lg:gap-3 lg:text-sm'}>
                    <h3
                        className={
                            'text-xl font-[600] lg:w-fit lg:whitespace-nowrap lg:text-sm'
                        }
                    >
                        Border Countries:
                    </h3>
                    {borderNames.length > 0 ? (
                        <ul className={'mt-5 flex flex-wrap gap-3 lg:mt-0'}>
                            {borderNames.map((border) => (
                                <Link href={`/country/${border}`} key={border}>
                                    <li
                                        key={border}
                                        className={
                                            'rounded bg-white px-8 py-2 shadow-card dark:bg-dark_blue lg:text-xs'
                                        }
                                    >
                                        {border}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    ) : (
                        <p className={'mt-5'}>No border countries</p>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Page
