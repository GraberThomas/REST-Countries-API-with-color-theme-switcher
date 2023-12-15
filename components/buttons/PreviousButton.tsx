'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { ButtonHTMLAttributes, HTMLProps } from 'react'

const PreviousButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const router = useRouter()
    const { className, ...otherProps } = props

    return (
        <button
            {...otherProps}
            onClick={() => router.back()}
            className={`flex items-center gap-2 rounded bg-white px-10 py-2 shadow-card dark:bg-dark_blue ${className}`}
        >
            <ArrowLeftIcon width={'1rem'} height={'1rem'} strokeWidth={3} />
            <span>Back</span>
        </button>
    )
}

export default PreviousButton
