import { useForm } from 'react-hook-form'
import Image from 'next/image'

import Button from 'Components/Button'
import Input from 'Components/Input'
import { Col, Form, Alert } from 'react-bootstrap'


import {
    Logo,
    LogoTitle,
    ImgIllustration,
    FloatLabel
} from 'Pages/login/styles'

export default function Login () {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm()

    const submit = data => console.table(data)


    return (
        <Col className='col-12 p-0 m-0 row h-full'>
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
                                        {...register('email', { required: true}) }
                                    />
                                </FloatLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.email && (<Alert className='bg-white p-1 text-danger text-error float-end border-0'>Email obrigatória</Alert>)}
                                </Col>
                            </Col>
                            <Col xxl='6' xl='8' lg='8' md='10' sm='12' xs='12'  className="col-10 mx-auto mb-5">
                                <FloatLabel
                                        label="Senha"
                                >
                                        <Input 
                                            type='password' 
                                            placeholder="Senha"
                                            aria-label="password"
                                            {...register('password', { required: true }) }
                                        />
                                </FloatLabel>
                                <Col className='col-12 mx-auto mt-2'>
                                    {errors.password && (<Alert className='bg-white p-1 text-error text-danger float-end border-0'>Senha obrigatória</Alert>)}
                                </Col>
                            </Col>

                            <Col xxl='6' xl='8' lg='8' md='10' sm='12' xs='12'  className="mx-auto d-grid gap-2 mb-4">
                                <Button type="button" onClick={handleSubmit(submit)}> Entrar </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>  
            </Col>
        </Col>
    )
}