/* ----------- RESOURCES ----------- */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useTheme } from 'Hooks/useTheme'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

/* ----------- COMPONENTS ----------- */
import Button from 'Components/Button'
import Input from 'Components/Input'
import AlertError from 'Components/AlertError'
import { Row, Col, Form, FloatingLabel } from 'react-bootstrap'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'


interface CountryProps {
    id: {
        'M49': number;
        'ISO-ALPHA-2': string;
        'ISO-ALPHA-3': string;
    };
    nome: string;
    'regiao-intermediaria': object;
    'sub-regiao': object;
}

/* ----------- STYLES ----------- */
import styles from 'Pages/register/styles.module.scss'




export default function Register() {
    let schema
    const { theme } = useTheme()
    const [countries, setCountries] = useState<CountryProps[]>([])
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const { t } = useTranslation()


    if (!schema) {
        schema = yup.object({
            name: yup
                .string()
                .required(t('forms.message_error.required').replace(':FIELD', t('forms.name')))
                .trim(),
            email: yup
                .string()
                .email(t('forms.message_error.email'))
                .required(t('forms.message_error.required').replace(':FIELD', 'email'))
                .trim(),
            password: yup
                .string()
                .required(t('forms.message_error.required').replace(':FIELD', t('forms.password')))
                .trim(),
            currentPassword: yup
                .string()
                .required(t('forms.message_error.required').replace(':FIELD', t('forms.confirm_password')))
                .oneOf([yup.ref('password')], 'Senhas divergentes')
                .trim(),
            phone_cell: yup
                .string()
                .required(t('forms.message_error.required').replace(':FIELD', t('forms.phone_cell')))
                .max(11, t('forms.message_error.max').replace(':NUM', '11'))
                .trim(),
            phone_fix_number: yup
                .string()
                .nullable()
                .notRequired()
                .max(8, t('forms.message_error.max').replace(':NUM', '8'))
                .trim(),
            personal_identification: yup
                .string()
                .required(t('forms.message_error.required').replace(':FIELD', t('forms.personal_identification')))
                .trim(),
            country: yup
                .string()
                .required(t('forms.message_error.required').replace(':FIELD', t('forms.country')))
                .trim(),
            cep: yup
                .string()
                .notRequired()
                .max(8, t('forms.message_error.max').replace(':NUM', '8')),
            state: yup
                .string()
                .required(t('forms.message_error.required').replace(':FIELD', t('forms.state')))
                .trim(),
            city: yup
                .string()
                .required(t('forms.message_error.required').replace(':FIELD', t('forms.city')))
                .trim(),
            address: yup
                .string()
                .required(t('forms.message_error.required').replace(':FIELD', t('forms.address')))
                .trim()
        })

    }

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm({ mode: 'onChange', resolver: yupResolver(schema) })


    const submit = (data) => console.table(data)

    useEffect(() => {
        axios
            .get('https://servicodados.ibge.gov.br/api/v1/localidades/paises')
            .then(res => {
                setCountries(res.data)
            })
            .catch(console.error)
    }, [])

    console.log(errors)

    return (
        <Col className={`${styles.containerRegister} ${styles[theme]} col-12 p-0 m-0`}>
            <Head>
                <title>Cadastro</title>
            </Head>

            <Col xxl='8' xl='8' lg='10' md='10' sm='12' xs='12' className='mx-auto py-3'>
                <Form className='col-11 mx-auto'>
                    <Form.Group>
                        <Row>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatingLabel
                                    className={`${styles.floatLabel} ${styles[theme]}`}
                                    label={t('forms.name')}
                                >
                                    <Input
                                        type='text'
                                        placeholder={t('forms.name')}
                                        aria-label={t('forms.name')}
                                        aria-required='true'
                                        {...register('name', { required: true })}

                                    />
                                </FloatingLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.name && (<AlertError text={errors.name.message} />)}
                                </Col>
                            </Col>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatingLabel
                                    className={`${styles.floatLabel} ${styles[theme]}`}
                                    label='Email'
                                >
                                    <Input
                                        type='email'
                                        placeholder='Email'
                                        aria-label="Email"
                                        aria-required='true'
                                        {...register('email', { required: true })}

                                    />
                                </FloatingLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.email && (<AlertError text={errors.email.message} />)}
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4 position-relative">
                                <FloatingLabel
                                    className={`${styles.floatLabel} ${styles[theme]}`}
                                    label={t('forms.password')}
                                >
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder={t('forms.password')}
                                        aria-label={t('forms.password')}
                                        aria-required='true'
                                        {...register('password', { required: true })}

                                    />

                                    <span className={`${styles.boxIcon} cursor-pointer`} onClick={() => setShowPassword(x => !x)}>
                                        {showPassword ? <AiFillEyeInvisible className={styles.iconEyeInvisible} /> : <AiFillEye className={styles.iconEye} />}
                                    </span>
                                </FloatingLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.password && (<AlertError text={errors.password.message} />)}
                                </Col>
                            </Col>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatingLabel
                                    className={`${styles.floatLabel} ${styles[theme]}`}
                                    label={t('forms.confirm_password')}
                                >
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder={t('forms.confirm_password')}
                                        aria-label={t('forms.confirm_password')}
                                        aria-required='true'
                                        {...register('currentPassword', { required: true })}

                                    />
                                </FloatingLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.currentPassword && (<AlertError text={errors.currentPassword.message} />)}
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatingLabel
                                    className={`${styles.floatLabel} ${styles[theme]}`}
                                    label={t('forms.phone_cell')}
                                >
                                    <Input
                                        type='number'
                                        placeholder={t('forms.phone_cell')}
                                        aria-label={t('forms.phone_cell')}
                                        aria-required='true'
                                        onKeyPress={(e) => /[\d]+/.test(e.key) || e.preventDefault()}
                                        {...register('phone_cell', { required: true, max: 11 })}
                                    />
                                </FloatingLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.phone_cell && (<AlertError text={errors.phone_cell.message} />)}
                                </Col>
                            </Col>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatingLabel
                                    className={`${styles.floatLabel} ${styles[theme]}`}
                                    label={t('forms.landline')}
                                >
                                    <Input
                                        type='number'
                                        placeholder={t('forms.landline')}
                                        aria-label={t('forms.landline')}
                                        aria-required='false'
                                        onKeyPress={(e) => /[\d]+/.test(e.key) || e.preventDefault()}
                                        {...register('phone_fix_number', { required: false, max: 8 })}
                                    />
                                </FloatingLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.phone_fix_number && (<AlertError text={errors.phone_fix_number.message} />)}
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatingLabel
                                    className={`${styles.floatLabel} ${styles[theme]}`}
                                    label={t('forms.personal_identification')}
                                >
                                    <Input
                                        placeholder={t('forms.personal_identification')}
                                        aria-label={t('forms.personal_identification')}
                                        aria-required='true'
                                        {...register('personal_identification', { required: true })}
                                    />
                                </FloatingLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.personal_identification && (<AlertError text={errors.personal_identification.message} />)}
                                </Col>
                            </Col>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatingLabel
                                    className={`${styles.floatLabel} ${styles[theme]}`}
                                    label={t('forms.country')}
                                >
                                    <Form.Select
                                        placeholder={t('forms.country')}
                                        aria-label={t('forms.country')}
                                        aria-required='true'
                                        className={`${styles.formSelect} ${styles[theme]} py-1`}
                                        {...register('country', { required: true })}
                                    >
                                        <option value="" disabled selected></option>
                                        {countries.map(country => <option key={country.id['ISO-ALPHA-2']} value={country.id['ISO-ALPHA-2']}>{country.nome}</option>)}
                                    </Form.Select>
                                </FloatingLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.country && (<AlertError text={errors.country.message} />)}
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatingLabel
                                    className={`${styles.floatLabel} ${styles[theme]}`}
                                    label={t('forms.state')}
                                >

                                    <Input
                                        type='text'
                                        placeholder={t('forms.state')}
                                        aria-label={t('forms.state')}
                                        aria-required='true'
                                        {...register('state', { required: true })}
                                    />
                                </FloatingLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.state && (<AlertError text={errors.state.message} />)}
                                </Col>
                            </Col>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatingLabel
                                    className={`${styles.floatLabel} ${styles[theme]}`}
                                    label='Cep'
                                >
                                    <Input
                                        type='text'
                                        placeholder='Cep'
                                        aria-label='Cep'
                                        aria-required='false'
                                        onKeyPress={(e) => /[\d]+/.test(e.key) || e.preventDefault()}
                                        {...register('cep', { required: false, max: 8 })}
                                    />
                                </FloatingLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.cep && (<AlertError text={errors.cep.message} />)}
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatingLabel
                                    className={`${styles.floatLabel} ${styles[theme]}`}
                                    label={t('forms.city')}
                                >
                                    <Input
                                        type='text'
                                        placeholder={t('forms.city')}
                                        aria-label={t('forms.city')}
                                        aria-required='true'
                                        {...register('city', { required: true })}
                                    />
                                </FloatingLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.city && (<AlertError text={errors.city.message} />)}
                                </Col>
                            </Col>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatingLabel
                                    className={`${styles.floatLabel} ${styles[theme]}`}
                                    label={t('forms.address')}
                                >
                                    <Input
                                        type='text'
                                        placeholder={t('forms.address')}
                                        aria-label={t('forms.address')}
                                        aria-required='true'
                                        {...register('address', { required: true })}
                                    />
                                </FloatingLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.address && (<AlertError text={errors.address.message} />)}
                                </Col>
                            </Col>
                        </Row>
                        <Col xxl='8' xl='8' lg='8' md='10' sm='12' xs='12' className="mx-auto d-grid gap-2 mb-4">
                            <Button type="button" className='text-uppercase' onClick={handleSubmit(submit)}> Cadastrar </Button>
                        </Col>
                    </Form.Group>
                </Form>
                <Col className='col-12 mt-2 text-center'>
                    <Link href='/login'>
                        <a className={`${styles.formLink} link-primary`}>{t('pages.register.link_login')}</a>
                    </Link>
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