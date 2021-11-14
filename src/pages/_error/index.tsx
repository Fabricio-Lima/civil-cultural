/* Resources */
import { useRouter } from 'next/router'
import AstroError from '/public/astro_error.png'

/* Components */
import Image from 'next/image'
import {
    Col
} from 'react-bootstrap'

/* Styles */
import {
    ErrorContainer,
    ErrorContent,
    ErrorStatusCode,
    ErrorBadge,
    BoxImg,
    LinkBack
} from 'Pages/_error/styles'

export default function Error({ statusCode }) {
    const router = useRouter()
    return (
        <ErrorContainer className='d-flex flex-column flex-wrap justify-content-center align-items-center p-0 m-0'>
            <ErrorContent className='col-11 col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-11 col-xs-11'>
                <ErrorBadge>Error</ErrorBadge>
                <ErrorStatusCode>{ statusCode }</ErrorStatusCode>
                <BoxImg>
                    <Image
                        src={AstroError}
                        alt='Astro'
                        width={86}
                        height={86}
                    />
                </BoxImg>
            </ErrorContent>
            <Col className='col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-11 col-xs-11 mt-3'>
                <p style={{color: '#546475'}} className='text-center mb-0'>Let's go <LinkBack onClick={() => router.back()}>back</LinkBack></p>
            </Col>
        </ErrorContainer>
    )
}

Error.getInitialProps = ({ res, err }) => {
    return { statusCode: res ? res.statusCode : err ? err.statusCode : 404 }
}
