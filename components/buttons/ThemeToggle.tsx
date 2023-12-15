'use client'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [isRendered, setIsRendered] = useState(false)
    const theme = useTheme()

    useEffect(() => {
        setIsRendered(true)
    }, [])

    if (!isRendered) return null

    return (
        <button
            className={'flex items-center gap-2 text-base font-[600]'}
            onClick={() => {
                theme.setTheme(theme.theme === 'dark' ? 'light' : 'dark')
            }}
        >
            {theme.theme === 'light' ? (
                <SunIcon width={'1.5rem'} height={'1.5rem'} />
            ) : (
                <MoonIcon width={'1.5rem'} height={'1.5rem'} />
            )}
            <span>{theme.theme === 'dark' ? 'Dark' : 'Light'} Mode</span>
        </button>
    )
}

export default ThemeToggle
