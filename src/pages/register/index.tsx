/* Resources */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

/* Components */
import Button from 'Components/Button'
import Input from 'Components/Input'
import AlertError from 'Components/AlertError'
import { Row, Col, Form } from 'react-bootstrap'


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

/* Styles */
import {
    FloatLabel,
    FormSelect,
    FormTextarea,
    BoxIcon,
    IconEye,
    IconEyeInvisible,
    FormLink
} from 'Pages/register/styles'




export default function Register() {
    let schema
    const [countries, setCountries] = useState<CountryProps[]>([])
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const { t } = useTranslation()

    if (!schema) {
        schema = yup.object({
            name: yup.string().required(t('pages.register.message_error.required').replace(':FIELD', t('forms.name'))),
            email: yup.string().email().required(t('pages.register.message_error.required').replace(':FIELD', 'email')),
            password: yup.string().required(t('pages.register.message_error.required').replace(':FIELD', t('forms.password'))),
            currentPassword: yup.string().required(t('pages.register.message_error.required').replace(':FIELD', t('forms.confirm_password'))).oneOf([yup.ref('password')], 'Senhas divergentes'),
            language: yup.string().required(t('pages.register.message_error.required').replace(':FIELD', t('forms.language'))),
            phone_cell: yup.number().required(t('pages.register.message_error.required').replace(':FIELD', t('forms.phone_cell'))),
            phone_fix_number: yup.number().notRequired(),
            country: yup.string().required(t('pages.register.message_error.required').replace(':FIELD', t('forms.country'))),
            cep: yup.number().notRequired().max(8, t('pages.register.message_error.max').replace(':FIELD', t('forms.cep'))),
            state: yup.string().required(t('pages.register.message_error.required').replace(':FIELD', t('forms.state'))),
            city: yup.string().required(t('pages.register.message_error.required').replace(':FIELD', t('forms.city'))),
            address: yup.string().required(t('pages.register.message_error.required').replace(':FIELD', t('forms.address'))),
            personal_identification: yup.string().required(t('pages.register.message_error.required').replace(':FIELD', t('forms.personal_identification'))),
        })

    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })


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
        <Col className='col-12 p-0 m-0'>
            <Head>
                <title>Cadastro</title>
            </Head>

            <Col xxl='8' xl='8' lg='10' md='10' sm='12' xs='12' className='mx-auto py-3'>
                <Form className='col-11 mx-auto'>
                    <Form.Group>
                        <Row>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatLabel
                                    label={t('forms.name')}
                                >
                                    <Input
                                        type='text'
                                        placeholder='Name'
                                        aria-label="Name"
                                        aria-required='true'
                                        {...register('name', { required: true })}

                                    />
                                </FloatLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.name && (<AlertError text={errors.name.message} />)}
                                </Col>
                            </Col>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatLabel
                                    label='Email'
                                >
                                    <Input
                                        type='email'
                                        placeholder='Email'
                                        aria-label="Email"
                                        aria-required='true'
                                        {...register('email', { required: true })}

                                    />
                                </FloatLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.email && (<AlertError text={errors.email.message} />)}
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4 position-relative">
                                <FloatLabel
                                    label={t('forms.password')}
                                >
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Senha'
                                        aria-label="Password"
                                        aria-required='true'
                                        {...register('password', { required: true })}

                                    />

                                    <BoxIcon className="cursor-pointer" onClick={() => setShowPassword(x => !x)}>
                                        {showPassword ? <IconEyeInvisible /> : <IconEye />}
                                    </BoxIcon>
                                </FloatLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.password && (<AlertError text={errors.password.message} />)}
                                </Col>
                            </Col>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatLabel
                                    label={t('forms.confirm_password')}
                                >
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Confirme Password'
                                        aria-label="Password"
                                        aria-required='true'
                                        {...register('currentPassword', { required: true })}

                                    />
                                </FloatLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.currentPassword && (<AlertError text={errors.currentPassword.message} />)}
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatLabel
                                    label={t('forms.phone_cell')}
                                >
                                    <Input
                                        type='number'
                                        placeholder='Telefone'
                                        aria-label="Telefone"
                                        aria-required='true'
                                        onKeyPress={(e) => /[\d]+/.test(e.key) || e.preventDefault()}
                                        {...register('phone_cell', { required: true, max: 11 })}
                                    />
                                </FloatLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.phone_cell && (<AlertError text={errors.phone_cell.message} />)}
                                </Col>
                            </Col>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatLabel
                                    label={t('forms.landline')}
                                >
                                    <Input
                                        type='number'
                                        placeholder='Telefone Fixo'
                                        aria-label="Telefone Fixo"
                                        aria-required='false'
                                        onKeyPress={(e) => /[\d]+/.test(e.key) || e.preventDefault()}
                                        {...register('phone_fix_number', { required: false, max: 8 })}
                                    />
                                </FloatLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.phone_fix_number && (<AlertError text='Telefone obrigatório' />)}
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatLabel
                                    label={t('forms.language')}
                                >
                                    <FormSelect
                                        placeholder='Idioma'
                                        aria-label='Idioma'
                                        aria-required='true'
                                        className='py-1'
                                        {...register('language', { required: true })}
                                    >
                                        <option value="" disabled></option>
                                        <option value='pt-BR'>Português</option>
                                        <option value='en'>Inglês</option>
                                    </FormSelect>
                                </FloatLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.language && (<AlertError text='Selecione o idioma principal' />)}
                                </Col>
                            </Col>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatLabel
                                    label={t('forms.country')}
                                >
                                    <FormSelect
                                        placeholder='País'
                                        aria-label='País'
                                        aria-required='true'
                                        className='py-1'
                                        {...register('country', { required: true })}
                                    >
                                        <option value="" disabled></option>
                                        {countries.map(country => <option key={country.id['ISO-ALPHA-2']} value={country.id['ISO-ALPHA-2']}>{country.nome}</option>)}
                                    </FormSelect>
                                </FloatLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.country && (<AlertError text='Selecione o país' />)}
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatLabel
                                    label={t('forms.state')}
                                >

                                    <Input
                                        type='text'
                                        placeholder='Estado'
                                        aria-label="Estado"
                                        aria-required='true'
                                        {...register('state', { required: true })}
                                    />
                                </FloatLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.state && (<AlertError text='Campo campo é obrigatório' />)}
                                </Col>
                            </Col>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatLabel
                                    label='Cep'
                                >
                                    <Input
                                        type='text'
                                        placeholder='Cep'
                                        aria-label='Cep'
                                        aria-required='false'
                                        onKeyPress={(e) => /[\d]+/.test(e.key) || e.preventDefault()}
                                        {...register('cep', { required: false })}
                                    />
                                </FloatLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatLabel
                                    label={t('forms.city')}
                                >
                                    <Input
                                        type='text'
                                        placeholder='Cidade'
                                        aria-label='Cidade'
                                        aria-required='true'
                                        {...register('city', { required: true })}
                                    />
                                </FloatLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.city && (<AlertError text='Cidade obrigatória' />)}
                                </Col>
                            </Col>
                            <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                <FloatLabel
                                    label={t('forms.address')}
                                >
                                    <Input
                                        type='text'
                                        placeholder='Endereço'
                                        aria-label='Endereço'
                                        aria-required='true'
                                        {...register('address', { required: true })}
                                    />
                                </FloatLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.address && (<AlertError text='Campo endereço Obrigatório' />)}
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl='12' xl='12' lg='12' md='12' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">

                                <FloatLabel
                                    label={t('pages.register.about_you')}
                                >
                                    <FormTextarea {...register('personal_identification', { required: true })} />
                                </FloatLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.personal_identification && (<AlertError text='Por favor preencha esse campo.' />)}
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
                        <FormLink className='link-primary'>{ t('pages.register.link_login') }</FormLink>
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