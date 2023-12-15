import ThemeToggle from '@/components/buttons/ThemeToggle'

const TopBar = () => {
    return (
        <div
            className={
                'flex items-center justify-between bg-white px-4 py-7 shadow-card dark:bg-dark_blue  lg:px-20 lg:py-5 lg:text-2xl'
            }
        >
            <h1 className={'font-bold'}>Where in the world?</h1>
            <ThemeToggle />
        </div>
    )
}

export default TopBar
