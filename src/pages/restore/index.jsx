/* ----------- RESOURCES ----------- */
import { useTheme } from 'Hooks/useTheme'

/* ----------- COMPONENTS ----------- */
import {Form, Button, FloatingLabel } from 'react-bootstrap'
import Head from 'next/head'
import Input from 'Components/Input'

/* ----------- STYLES ----------- */
import styles from 'Pages/restore/styles.module.scss'



function Restore()  {
  const { theme } = useTheme()
  return (
   <div className={`d-flex p-2 bd-highlight ${styles.body} ${styles[theme]}`}>
      <Head>
        <title>Recuperar senha</title>
     </Head>
     <div className={styles.img_container}>
       <img 
       src="assets/locker-restore.png" 
       alt="Cadeado"
       className={styles.left_img}
        />
     </div>
     <section className={`container-fluid ${styles.main_container} ${styles[theme]}`}>
       <div className={styles.content}>
          <div className={`col-12 d-flex justify-content-center ${styles.title_container}`}> 
            <h4 className={`${styles.title}`}>Civil Cultural</h4>
            <img src="/civilcultural.png"
            alt="Logo Civil Cultural" 
            height={43}
            width={43}
            className={styles.logo}
            />
          </div>
          <div>
            <Form> 
              <FloatingLabel label='E-mail'>
              <Input type="text" placeholder='E-mail'/>
              </FloatingLabel>
          <div className={`${styles.instruction_container} d-flex justify-content-center`}>
            <p className={styles.instruction}>Receba por e-mail um link de para trocar sua senha</p>
          </div>
              <Button type="submit" className={styles.submit}>Enviar </Button>
            </Form>
          </div>
      </div>
     </section>
   </div>
  )
}

export default Restore