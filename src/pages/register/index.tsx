/* Resources */
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
    FormLink,
    FormTextarea,
    BoxIcon,
    IconEye,
    IconEyeInvisible
} from 'Pages/register/styles'


const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    currentPassword: yup.string().required().oneOf([yup.ref('password')]),
    language: yup.string().required(),
    phone_number: yup.number().required(),
    phone_fix_number: yup.number().nullable(),
    country: yup.string().required(),
    cep: yup.number().nullable(),
    state: yup.string().required(),
    city: yup.string().required(),
    address: yup.string().required(),
    personal_identification: yup.string().required(),
})

export default function Register() {
    const [countries, setCountries] = useState<CountryProps[]>([])
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [countryUf, setCountryUf] = useState<string>('')

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const submit = (data) => console.table(data.type_user = '2540')

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

            <Col className='col-12 h-full mt-4'>
                <Col xxl='8' xl='8' lg='10' md='10' sm='12' xs='12' className='mx-auto'>
                    <Form className='col-11 mx-auto'>
                        <Form.Group>
                            <Row>
                                <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                    <FloatLabel
                                        label='Nome'
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
                                <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4 position-relative">
                                    <FloatLabel
                                        label='Senha'
                                    >
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder='Senha'
                                            aria-label="Password"
                                            aria-required='true'
                                            {...register('password', { required: true })}

                                        />
                                        
                                        <BoxIcon className="cursor-pointer"  onClick={() => setShowPassword(x => !x)}>
                                            {showPassword ?  <IconEyeInvisible /> : <IconEye />}
                                        </BoxIcon>
                                    </FloatLabel>
                                    <Col className='col-12 mx-auto mt-2'>
                                        {errors.password && (<AlertError text='Senha obrigatória' />)}
                                    </Col>
                                </Col>
                                <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                    <FloatLabel
                                        label='Confirme a senha'
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
                                        {errors.currentPassword && (<AlertError text='Senhas divergentes, por favor verifique' />)}
                                    </Col>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                    <FloatLabel
                                        label='Telefone'
                                    >
                                        <Input
                                            type='number'
                                            placeholder='Telefone'
                                            aria-label="Telefone"
                                            aria-required='true'
                                            onKeyPress={(e) => /[\d]+/.test(e.key) || e.preventDefault()}
                                            {...register('phone_number', { required: true })}
                                        />
                                    </FloatLabel>
                                    <Col className='col-12 mx-auto mt-2'>
                                        {errors.phone_number && (<AlertError text='Telefone obrigatório' />)}
                                    </Col>
                                </Col>
                                <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                    <FloatLabel
                                        label='Telefone Fixo'
                                    >
                                        <Input
                                            type='number'
                                            placeholder='Telefone Fixo'
                                            aria-label="Telefone Fixo"
                                            aria-required='false'
                                            onKeyPress={(e) => /[\d]+/.test(e.key) || e.preventDefault()}
                                            {...register('phone_fix_number')}
                                        />
                                    </FloatLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                    <FloatLabel
                                        label='Idioma'
                                    >
                                        <FormSelect placeholder='Idioma' aria-label='Idioma' aria-required='true' className='py-1' {...register('language')}>
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
                                        label='País'
                                    >
                                        <FormSelect 
                                            placeholder='País' 
                                            aria-label='País' 
                                            aria-required='true' 
                                            className='py-1' 
                                            {...register('country')} 
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
                                        label='Estado'
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
                                            {...register('cep')}
                                        />
                                    </FloatLabel>
                                    <Col className='col-12 mx-auto mt-2'>
                                        {errors.cep && (<AlertError text='Erro ao buscar cep' />)}
                                    </Col>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl='6' xl='6' lg='6' md='10' sm='12' xs='12' className="mx-md-auto mx-sm-auto m-xs-auto mb-4">
                                    <FloatLabel
                                        label='Cidade'
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
                                        label='Endereço'
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
                                        label='Conte-nos sobre sua carreira'
                                    >
                                        <FormTextarea {...register('personal_identification')} />
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
                    {/* <Link href='/login'>
                    <FormLink className='link-primary'>Logar</FormLink>
                </Link> */}
                </Col>
            </Col>
        </Col>
    )
}