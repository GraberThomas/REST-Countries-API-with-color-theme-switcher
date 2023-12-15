'use client'
import Image from 'next/image'
import { placeHolder } from '@/lib/placeHolder/countryPlaceholder'
import { numberWithComma } from '@/lib/utils/string'
import Link from 'next/link'
import { CountryFlagImage } from '@/components/images/CountryFlagImage'

type CountryCardProps = {
    name: string
    capital: string[]
    population: number
    regions: string[]
    imagePath: string
}

const CountryCard = ({
    name,
    capital,
    population,
    regions,
    imagePath,
}: CountryCardProps) => {
    return (
        <Link href={`/country/${name}`}>
            <div
                className={
                    'cursor-pointer overflow-hidden rounded bg-white shadow-card hover:scale-105 dark:bg-dark_blue'
                }
            >
                <CountryFlagImage src={imagePath} name={name} />
                <div className={'mb-8 pl-5 pt-5'}>
                    <h3 className={'mb-3 font-[800]'}>{name}</h3>
                    <div className={'flex flex-col gap-1'}>
                        <p className={'text-xs'}>
                            <span className={' font-[600]'}>Population:</span>{' '}
                            {numberWithComma(population)}
                        </p>
                        <p className={'text-xs'}>
                            <span className={' font-[600]'}>Region:</span>{' '}
                            {regions.join(', ')}
                        </p>
                        <p className={'text-xs'}>
                            <span className={' font-[600]'}>Capital:</span>{' '}
                            {capital.join(', ')}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard
