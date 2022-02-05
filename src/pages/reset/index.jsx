/* ----------- RESOURCES ----------- */
import { useTheme } from 'Hooks/useTheme'
import { useState } from 'react'
import {Locker as string } from 'Assets/locker.png'

/* ----------- COMPONENTS ----------- */
import Head from 'next/head'
import {Form, Button, FloatingLabel } from 'react-bootstrap'
import Input from 'Components/Input'

/* ----------- STYLES ----------- */
import styles from 'Pages/reset/styles.module.scss'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


function Reset()  {
  const { theme } = useTheme()
  const [showPassword, setShowPassword] = useState(false)


  return (
   <div className={`d-flex p-2 bd-highlight ${styles.body} ${styles[theme]}`}>
     <Head>
        <title>Nova Senha</title>
     </Head>
     <div className={styles.img_container}>
       <img 
       src="assets/locker.png" 
       alt="Cadeado e chave lado a lado"
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
              <FloatingLabel
              label='Senha'
              >
                <Input
                  type={showPassword ? 'password' : 'text' }
                  placeholder='Senha'
                  className={`${styles.password_input} ${styles[theme]}`}
                 />
                <span className={styles.eye_btn_container} onClick={() => setShowPassword(x => !x)}>
                    {showPassword ? <AiFillEyeInvisible className={styles.iconEyeInvisible} /> : <AiFillEye className={styles.iconEye} />}
                </span>       
              </FloatingLabel>

              <FloatingLabel
              label='Escreva novamente'
              >
                 <Input
                  type={showPassword ? 'password' : 'text' }
                  placeholder='Escreva novamente'
                  className={styles.password_input}
                 />
              </FloatingLabel>
                <div className={`${styles.instruction_container} d-flex justify-content-center`}>
                  <label className={styles.instruction}>Escolha sua nova senha</label>
                </div> 
                <Button type="submit" className={styles.submit}>Redefinir </Button>
            </Form>
          </div>
      </div>
     </section>
   </div>
  )
}

export default Reset