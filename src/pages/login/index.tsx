/* Resources */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'

/* Components */
import Button from 'Components/Button'
import Input from 'Components/Input'
import AlertError from 'Components/AlertError'
import { Col, Form } from 'react-bootstrap'

/*  Styles */
import {
    Logo,
    LogoTitle,
    ImgIllustration,
    FloatLabel,
    FormLink
} from 'Pages/login/styles'

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
})

export default function Login () {
    const { t } = useTranslation()
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) })

    const submit = data => console.table(data)


    return (
        <Col className='col-12 p-0 m-0 row h-full'>
            <Head>
                <title>Login</title>
            </Head>
            <ImgIllustration xxl='6' xl='6' lg='6' md='6' className='d-none d-md-block'/>
            <Col xxl='6' xl='6' lg='6' md='6' sm='12' xs='12' className='d-flex justify-items-center align-items-center'>
                <Col className='col-11 mx-auto'>
                    <Logo xxl='5' xl='5' lg='6' md='7' sm='8' xs='10' className='mx-auto d-flex align-items-center mb-5'>
                        <LogoTitle className='h4 ms-2'>Civil Cultural</LogoTitle>
                        <Image
                            width={50}
                            height={50}
                            src='/civilcultural.png'
                            aria-label='Logo Civil Cultural'
                            objectFit='cover'
                            className='float-end'
                        />
                    </Logo>

                    <Form> 
                        <Form.Group >
                            <Col xxl='6' xl='8' lg='8' md='10' sm='12' xs='12'  className="mx-auto mb-4">
                                <FloatLabel
                                    label="Email"
                                >
                                    <Input 
                                        type='text'
                                        placeholder="Email"
                                        aria-label="Email"
                                        aria-required='true'
                                        {...register('email', { required: true}) }
                                    />
                                </FloatLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.email && (<AlertError text='Email obrigatória' />)}
                                </Col>
                            </Col>
                            <Col xxl='6' xl='8' lg='8' md='10' sm='12' xs='12'  className="col-10 mx-auto mb-4">
                                <FloatLabel
                                        label={t('forms.password')}
                                >
                                        <Input 
                                            type='password' 
                                            placeholder="Senha"
                                            aria-label="password"
                                            aria-required='true'
                                            {...register('password', { required: true }) }
                                        />
                                </FloatLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.password && (<AlertError text='Senha obrigatória' />)}
                                </Col>
                            </Col>
                            <Col xxl='8' xl='8' lg='8' md='10' sm='12' xs='12' className="col-8 mx-auto pt-2 pb-3 mt-5 mb-4">
                                <Link href='#' >
                                    <FormLink className="link-primary float-end">{t('pages.login.forgotpassword')}</FormLink>
                                </Link>
                            </Col>

                            <Col xxl='8' xl='8' lg='8' md='10' sm='12' xs='12'  className="mx-auto d-grid gap-2 mb-4">
                                <Button type="button" className='text-uppercase' onClick={handleSubmit(submit)}> Entrar </Button>
                            </Col>
                            <Col className='col-12 my-2 text-center clearfix'>
                                <Link href='/register' >
                                    <FormLink className="link-primary text-decoration-none text-center">{t('pages.login.createaccount')}</FormLink>
                                </Link>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>  
            </Col>
        </Col>
    )
}