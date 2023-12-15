'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import {PropsWithChildren} from "react";

export function ThemeProvider({ children }: PropsWithChildren) {
    return <NextThemeProvider storageKey={'theme_country'} defaultTheme={"dark"} attribute={"class"} enableSystem={false} >
        {children}
    </NextThemeProvider>
}