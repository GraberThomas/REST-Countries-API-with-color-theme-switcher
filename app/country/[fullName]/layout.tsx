import { PropsWithChildren } from 'react'
import PreviousButton from '@/components/buttons/PreviousButton'

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className={'px-6 pb-14 pt-10 lg:px-20'}>
            <PreviousButton className={'mb-16'} />
            {children}
        </div>
    )
}

export default Layout
