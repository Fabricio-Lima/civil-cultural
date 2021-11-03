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
    FormLink
} from 'Pages/register/styles'


const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    currentPassword: yup.string().required().oneOf([yup.ref('password')]),
    country: yup.string().required(),
    language: yup.string().required(),
})

export default function Register() {
    const [countries, setCountries] = useState<CountryProps[]>([])
    const { register, handleSubmit, formState: { errors } } = useForm({
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

    return (
        <Col className='col-12 p-0 m-0'>
            <Head>
                <title>Cadastro</title>
            </Head>

            <Col className='d-flex justify-content-center align-content-center align-items-center'>
                <Col xxl='8' xl='8' lg='10' md='10' sm='12' xs='12' className='mx-auto'>
                    <Form className='col-11 mx-auto'>
                        <Form.Group>
                            <Row>
                                <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                    <FloatLabel
                                        label='Name'
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
                                        {errors.name && (<AlertError text='Nome obrigatório' />)}
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
                                        {errors.email && (<AlertError text='Email obrigatório' />)}
                                    </Col>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                    <FloatLabel
                                        label='Password'
                                    >
                                        <Input
                                            type='password'
                                            placeholder='Password'
                                            aria-label="Password"
                                            aria-required='true'
                                            {...register('password', { required: true })}

                                        />
                                    </FloatLabel>
                                    <Col className='col-12 mx-auto mt-2'>
                                        {errors.password && (<AlertError text='Senha obrigatória' />)}
                                    </Col>
                                </Col>
                                <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                    <FloatLabel
                                        label='Confirme Password'
                                    >
                                        <Input
                                            type='password'
                                            placeholder='Confirme Password'
                                            aria-label="Password"
                                            aria-required='true'
                                            {...register('currentPassword', { required: true })}

                                        />
                                    </FloatLabel>
                                    <Col className='col-12 mx-auto mt-2'>
                                        {errors.currentPassword && (<AlertError text='Senhas divergentes, por favor verifique' />)}
                                    </Col>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                    <FloatLabel
                                        label='País'
                                    >
                                        <FormSelect className='py-1' {...register('country')} >
                                            <option value="" disabled></option>
                                            {countries.map(country => <option key={country.id['ISO-ALPHA-2']} value={country.id['ISO-ALPHA-2']}>{country.nome}</option>)}
                                        </FormSelect>
                                    </FloatLabel>
                                    <Col className='col-12 mx-auto mt-2'>
                                        {errors.country && (<AlertError text='Selecione o país' />)}
                                    </Col>
                                </Col>
                                <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                    <FloatLabel
                                        label='Idioma'
                                    >
                                        <FormSelect className='py-1' {...register('language')}>
                                            <option value=""  disabled></option>
                                            <option value='pt-BR'>Português</option>
                                            <option value='en'>Inglês</option>
                                        </FormSelect>
                                    </FloatLabel>
                                    <Col className='col-12 mx-auto mt-2'>
                                        {errors.language && (<AlertError text='Selecione o idioma principal' />)}
                                    </Col>
                                </Col>
                            </Row>
                            <Col xxl='8' xl='8' lg='8' md='10' sm='12' xs='12' className="mx-auto d-grid gap-2 mb-4">
                                <Button type="button" className='text-uppercase' onClick={handleSubmit(submit)}> Cadastrar </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                    {/* <Link href='/login'>
                    <FormLink className='link-primary'>Logar</FormLink>
                </Link> */}
                </Col>
            </Col>
        </Col>
    )
}