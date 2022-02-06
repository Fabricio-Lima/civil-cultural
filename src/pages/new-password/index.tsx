/* ----------- RESOURCES ----------- */
import { useState } from 'react'
import { useTheme } from 'Hooks/useTheme'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

/* ----------- COMPONENTS ----------- */
import Head from 'next/head'
import Button from 'Components/Button'
import Input from 'Components/Input'
import Logo from 'Components/Logo'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Col, Form, FloatingLabel } from 'react-bootstrap'

/* ----------- STYLES ----------- */
import styles from 'Pages/new-password/styles.module.scss'


export default function NewPassword() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [showPassword, setShowPassword] = useState(false)


  return (
    <div className={`d-flex ${styles.body} ${styles[theme]}`}>
      <Head>
        <title>Nova Senha</title>
      </Head>

      <Col className={`${styles.img_container}  col-6 d-none d-md-block p-0`} />

      <Col as='section' className={`col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-items-center align-items-center`}>
        <Col className='col-11 mx-auto'>
          <Col className='col-10 col-xxl-5 col-xl-5 col-lg-6 col-md-7 col-sm-8 mx-auto d-flex align-items-center mb-5'>
            <h4 className={` ${styles.logo_title}  ${styles[theme]} text-capitalize ms-2`}>Civil Cultural</h4>
            <Logo />
          </Col>

          <Form>
            <Form.Group className='col-12 col-lg-8 col-md-10 col-sm-12 mx-auto mb-3'>
              <p className={`${styles.instruction} ${styles[theme]}`}>Escolha uma nova senha para ser redefinida</p>
              <FloatingLabel label={t('forms.password')} className={`${styles.float_label} ${styles[theme]}`}>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  className={`${styles.password_input} ${styles[theme]}`}
                />
                  <span className={styles.eye_btn_container} onClick={() => setShowPassword(x => !x)}>
                    {showPassword ? <AiFillEyeInvisible className={styles.iconEyeInvisible} /> : <AiFillEye className={styles.iconEye} />}
                  </span>
              </FloatingLabel>
            </Form.Group>

            <Form.Group className='col-12 col-lg-8 col-md-10 col-sm-12 mx-auto mb-5'>
              <FloatingLabel label='Escreva novamente' className={`${styles.float_label} ${styles[theme]}`}>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Digite novamente'
                  className={styles.password_input}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className='col-12 col-lg-8 col-md-10 col-sm-12 mx-auto'>
              <Col className='col-12 d-grid'>
                <Button type="button" >Redefinir </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Col>
    </div>
  )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        }
    }
}