import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            backgroundColor: {
                very_dark_blue: 'hsl(207, 26%, 17%)',
                very_light_gray: 'hsl(0, 0%, 98%)',
                dark_gray: 'hsl(0, 0%, 52%)',
            },
            colors: {
                dark_blue: 'hsl(209, 23%, 22%)',
                very_dark_blue: 'hsl(200, 15%, 8%)',
            },
            boxShadow: {
                card: '0px 0px 16px 8px rgba(0,0,0,0.05)',
            },
        },
    },
    plugins: [],
}
export default config
