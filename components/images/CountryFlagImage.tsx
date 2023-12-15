import Image from 'next/image'
import { placeHolder } from '@/lib/placeHolder/countryPlaceholder'

export function CountryFlagImage(props: {
    src: string
    name: string
    className?: string
}) {
    return (
        <Image
            src={props.src}
            alt={`Flag of ${props.name}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            placeholder={placeHolder}
            className={props.className ?? ''}
        />
    )
}
