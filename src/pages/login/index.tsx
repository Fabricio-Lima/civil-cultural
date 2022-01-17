/* ----------- RESOURCES ----------- */
import { KeyboardEventHandler } from 'react'
import { useTheme } from 'Hooks/useTheme'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRive, useStateMachineInput } from 'rive-react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useAuth } from 'Hooks/useAuth'
import * as yup from 'yup'

/* ----------- COMPONENTS ----------- */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Button from 'Components/Button'
import Input from 'Components/Input'
import AlertError from 'Components/AlertError'
import { Col, Form, FloatingLabel } from 'react-bootstrap'

/* ----------- STYLES ----------- */
import styles from 'Pages/login/styles.module.scss'


export default function Login() {
    let schema
    const { theme } = useTheme()
    const { t } = useTranslation()
    const { signIn } = useAuth()

    if (!schema) {
        schema = yup.object({
            user: yup
                .string()
                .required(t('forms.message_error.required').replace(':FIELD', t('pages.login.nick_or_email')))
                .trim(),
            password: yup
                .string()
                .required(t('forms.message_error.required').replace(':FIELD', t('forms.password')))
                .trim(),
        })
    }
        
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({ mode: 'onChange', resolver: yupResolver(schema) })

    const STATE_MACHINE_NAME = 'State Machine 1'
    const STATE_MACHINE_CHECKING = 'Checking'
    const STATE_MACHINE_VALID = 'Success'
    const STATE_MACHINE_INVALID = 'Fail'

    const { RiveComponent, rive } = useRive({
        src: 'assets/scientist-login.riv',
        stateMachines: STATE_MACHINE_NAME,
        autoplay: true,
        onLoadError(err) {
            console.log(`ERR: %c${err}`, 'color: red')
        },
    })

    const checking = useStateMachineInput(rive, STATE_MACHINE_NAME, STATE_MACHINE_CHECKING)
    const success = useStateMachineInput(rive, STATE_MACHINE_NAME, STATE_MACHINE_VALID)
    const fail = useStateMachineInput(rive, STATE_MACHINE_NAME, STATE_MACHINE_INVALID)


    const illustrationValidate = (e) => e.target?.value.length > 0 ? (checking && checking.fire()) : (fail && fail.fire())

    function submit(data) {
        signIn(data)
        success && success.fire()
    }


    return (
        <Col className={`${styles.containerLogin} ${styles[theme]} col-12 p-0 m-0 row h-full`}>
            <Head>
                <title>Login</title>
            </Head>
            <Col xxl='6' xl='6' lg='6' md='6' className={`${styles.imgIllustration} d-none d-md-block p-0`}>
                <RiveComponent style={{ width: '100%', height: '100%', marginLeft: '-.5rem' }} />
            </Col>
            <Col xxl='6' xl='6' lg='6' md='6' sm='12' xs='12' className='d-flex justify-items-center align-items-center'>
                <Col className='col-11 mx-auto'>
                    <Col xxl='5' xl='5' lg='6' md='7' sm='8' xs='10' className='mx-auto d-flex align-items-center mb-5'>
                        <h4 className={`${styles.logoTitle} ${styles[theme]} text-capitalize ms-2`}>Civil Cultural</h4>
                        <Image
                            width={43}
                            height={43}
                            src='/civilcultural.png'
                            aria-label='Logo Civil Cultural'
                            objectFit='cover'
                            className='float-end'
                        />
                    </Col>

                    <Form>
                        <Form.Group >
                            <Col xxl='6' xl='8' lg='8' md='10' sm='12' xs='12' className="mx-auto mb-4">
                                <FloatingLabel
                                    className={`${styles.floatLabel} ${styles[theme]}`}
                                    label={t('pages.login.nick_or_email')}
                                >
                                    <Input
                                        type='text'
                                        placeholder={t('pages.login.nick_or_email')}
                                        aria-label={t('pages.login.nick_or_email')}
                                        aria-required='true'
                                        {...register('userOrEmail', { required: true })}
                                        onKeyUp={illustrationValidate}
                                    />
                                </FloatingLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.user && (<AlertError text={errors.user.message} />)}
                                </Col>
                            </Col>

                            <Col xxl='6' xl='8' lg='8' md='10' sm='12' xs='12' className="col-10 mx-auto mb-4">
                                <FloatingLabel
                                    className={`${styles.floatLabel} ${styles[theme]}`}
                                    label={t('forms.password')}
                                >
                                    <Input
                                        type='password'
                                        placeholder={t('forms.password')}
                                        aria-label={t('forms.password')}
                                        aria-required='true'
                                        {...register('password', { required: true })}
                                        onKeyUp={illustrationValidate}
                                    />
                                </FloatingLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.password && (<AlertError text={errors.password.message} />)}
                                </Col>
                            </Col>

                            <Col xxl='8' xl='8' lg='8' md='10' sm='12' xs='12' className="col-8 mx-auto pt-2 pb-3 mt-5 mb-4">
                                <Link href='#' >
                                    <a className={`${styles.formLink} link-primary float-end`}>{t('pages.login.forgot_password')}</a>
                                </Link>
                            </Col>

                            <Col xxl='8' xl='8' lg='8' md='10' sm='12' xs='12' className="mx-auto d-grid gap-2 mb-4">
                                <Button type="button" className='text-uppercase' onClick={handleSubmit(submit)}> Entrar </Button>
                            </Col>

                            <Col className='col-12 my-2 text-center clearfix'>
                                <Link href='/register' >
                                    <a className={`${styles.formLink} link-primary text-decoration-none text-center`}>{t('pages.login.create_account')}</a>
                                </Link>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Col>
        </Col>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        }
    }
}