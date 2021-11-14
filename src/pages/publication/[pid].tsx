/* Resources */
import axios from 'axios'
import { useRouter } from 'next/router'
import { InferGetStaticPropsType } from 'next'
import { PublicationProps } from 'Contracts/PageProps'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Publication({ publication }: PublicationProps) {
    return (
        <div>
            <h1>{publication.title}</h1>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await axios.get('http://127.0.0.1:8555/api/publications/1/5000', {
        headers: {
            'Authorization': `bearer ${process.env.API_CC_TOKEN}`
        }
    })
    
    const paths = res.data.data.map(({ id }) => ({ params: { pid: id } }))

    return {
        fallback: 'blocking',
        paths
    }
}

export async function getStaticProps({ locale, params: { pid } }) {

    const res = await axios.get(`http://127.0.0.1:8555/api/publications/${pid}`, {
        headers: {
            'Authorization': `bearer ${process.env.API_CC_TOKEN}`
        }
    })

    if(!res?.data)
        return { notFound: true }

    return {
        props: {
            publication: res.data,

        },
        revalidate: 20000
    }
}