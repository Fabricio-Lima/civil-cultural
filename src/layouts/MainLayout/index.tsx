/* ----------- RESOURCES ----------- */
import { useState } from 'react'
import { useTheme } from 'Hooks/useTheme'
import Head from 'next/head'

/* ----------- CONTRACTS ----------- */
import { LayoutProps } from 'Contracts/PageProps'

/* ----------- COMPONENTS ----------- */
import Header from "Components/Header"
import Sidebar from 'Components/Sidebar'
import {
    Col
} from 'react-bootstrap'

/* ----------- STYLES ----------- */
import styles from 'Layouts/MainLayout/styles.module.scss'

export default function MainLayout({ children, title }: LayoutProps) {
    const [showSidebar, setShowSidebar] = useState(false)
    const { theme } = useTheme()

    return (
        <div className={`${styles.layoutContainer} ${styles[theme]}`}>
            <Head>
                <title>{title ? `${title} | Civil Cultural` : 'Civil cultural'}</title>
            </Head>

            <Header isActive={showSidebar} setIsActive={() => setShowSidebar(x => !x)} />
            <div className={styles.divHeader} />

            <main className={styles.main}>
                <Sidebar active={showSidebar} setClose={() => setShowSidebar(false)} />

                <Col as='section' className='row p-0 m-0'>
                    {children}
                </Col>
            </main>
        </div>
    )
}