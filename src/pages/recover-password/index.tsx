/* ----------- RESOURCES ----------- */
import Head from 'next/head'
import { useTheme } from 'Hooks/useTheme'

/* ----------- COMPONENTS ----------- */
import Link from 'next/link'
import Button from 'Components/Button'
import Input from 'Components/Input'
import Logo from 'Components/Logo'
import { Col, Form, FloatingLabel } from 'react-bootstrap'

/* ----------- STYLES ----------- */
import styles from 'Pages/recover-password/styles.module.scss'

export default function RecoverPassword() {
  const { theme } = useTheme()

  return (
    <div className={`d-flex ${styles.body} ${styles[theme]}`}>
      <Head>
        <title>Recuperar senha | Civil Cultural</title>
      </Head>

      <Col className={`${styles.img_container}  col-6 d-none d-md-block p-0`} />

      <Col as='section' className={`scol-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-items-center align-items-center`}>
        <Col className='col-11 mx-auto'>
          <Col className='col-10 col-xxl-5 col-xl-5 col-lg-6 col-md-7 col-sm-8 mx-auto d-flex align-items-center mb-5'>
            <h4 className={` ${styles.logo_title}  ${styles[theme]} text-capitalize ms-2`}>Civil Cultural</h4>
            <Logo />
          </Col>

          <Form>
            <Form.Group className='col-12 col-lg-8 col-md-10 col-sm-12 mx-auto mb-5'>
              <FloatingLabel label='E-mail' className={`${styles.float_label} ${styles[theme]}`}>
                <Input type="text" placeholder='E-mail' />
                <p className={`${styles.instruction} ${styles[theme]}`}>Você recebe-rá por e-mail um link para trocar a senha</p>
              </FloatingLabel>
            </Form.Group>

            <Form.Group className='col-12 col-lg-8 col-md-10 col-sm-12 mx-auto mb-4'>
              <Col className='col-12 d-grid gap-1'>
                <Button type="button" className={styles.submit}>Enviar </Button>
              </Col>
            </Form.Group>
          </Form>

          <Col className='col-12 my-2 text-center clearfix'>
            <Link href='/login' >
              <a className={`${styles.form_link} link-primary text-decoration-none text-center`}>Login</a>
            </Link>
          </Col>
        </Col>
      </Col>
    </div>
  )
}