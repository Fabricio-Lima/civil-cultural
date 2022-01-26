/* ----------- RESOURCES ----------- */
import { useState } from 'react'
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
import styles from 'Components/layouts/MainLayout/styles.module.scss'

export default function MainLayout({ title, page, children }: LayoutProps) {
    const [showSidebar, setShowSidebar] = useState(false)
    
    return (
        <div className={styles.layoutContainer}>
            <Head>
                <title>{ title || 'Civil cultural' }</title>
            </Head>

            <Header isActive={showSidebar} setIsActive={() => setShowSidebar(x => !x)} />
            <main className={styles.main}>
                <Sidebar active={showSidebar} setClose={() => setShowSidebar(false)} />
                <div className={styles.divHeader} />

                <Col as='section' className='row p-0 m-0'>
                    { page ?? children }
                </Col>
            </main>
        </div>
    )
}